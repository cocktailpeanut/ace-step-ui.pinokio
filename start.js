const os = require("os");
const path = require("path");

function pickFrontendHost() {
  const nets = os.networkInterfaces();
  const addrs = [];
  for (const name of Object.keys(nets)) {
    const list = nets[name] || [];
    for (const net of list) {
      if (net && net.family === "IPv4" && !net.internal && net.address) {
        addrs.push(net.address);
      }
    }
  }
  const pick = (re) => addrs.find((addr) => re.test(addr));
  return (
    pick(/^100\.(6[4-9]|[7-9]\d)\./) ||
    pick(/^192\.168\./) ||
    pick(/^10\./) ||
    pick(/^172\.(1[6-9]|2\d|3[01])\./) ||
    "127.0.0.1"
  );
}

module.exports = async (kernel) => {
  const FRONTEND_PORT = await kernel.port();
  const FRONTEND_HOST = pickFrontendHost();
  const ACESTEP_DIR = path.join(__dirname, "app", "ACE-Step-1.5");
  const PYTHON_PATH = process.platform === "win32"
    ? path.join(ACESTEP_DIR, "env", "Scripts", "python.exe")
    : path.join(ACESTEP_DIR, "env", "bin", "python");
  return {
    daemon: true,
    run: [
      {
        method: "local.set",
        params: {
          api_port: "{{port}}",
          frontend_host: FRONTEND_HOST
        }
      },
      {
        method: "shell.run",
        params: {
          venv: "env",
          path: "app/ACE-Step-1.5",
          buffer: 10240,
          env: {
            MASTER_ADDR: "127.0.0.1",
            VLLM_HOST_IP: "127.0.0.1"
          },
          message: [
            "acestep-api --port {{local.api_port}}"
          ],
          on: [{
            event: "/Uvicorn running/i",
            done: true
          }, {
            event: "/system error/i",
            break: false
          }, {
            event: "/failed to connect/i",
            break: false
          }, {
            event: "/error.*10049/i",
            break: false
          }]
        }
      },
      {
        method: "shell.run",
        params: {
          path: "app",
          message: [
            `npm run dev -- --host ${FRONTEND_HOST} --port ${FRONTEND_PORT} --strictPort`
          ],
          on: [{
            event: "/(http:\\/\\/[0-9.:]+)/",
            done: true
          }]
        }
      },
      {
        method: "local.set",
        params: {
          url: "{{input.event[1]}}",
          frontend_url: "{{input.event[1]}}"
        }
      },
      {
        method: "shell.run",
        params: {
          path: "app/server",
          env: {
            PORT: "3001",
            ACESTEP_API_URL: "http://127.0.0.1:{{local.api_port}}",
            NODE_ENV: "development",
            DATABASE_PATH: "./data/acestep.db",
            AUDIO_DIR: "./public/audio",
            FRONTEND_URL: "{{local.url}}",
            ACESTEP_PATH: ACESTEP_DIR,
            PYTHON_PATH: PYTHON_PATH,
            JWT_SECRET: "ace-step-ui-local-secret"
          },
          message: [
            "npm run dev"
          ],
          on: [{
            event: "/ACE-Step UI Server running/",
            done: true
          }]
        }
      }
    ]
  }
}
