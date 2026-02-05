const path = require('path')
const ACESTEP_DIR = path.join(__dirname, "app", "ACE-Step-1.5");
module.exports = {
  daemon: true,
  run: [
    {
      method: "local.set",
      params: {
        api_port: "{{port}}"
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
      method: "fs.link",
      params: {
        drive: {
          checkpoints: "app/ACE-Step-1.5/checkpoints"
        },
        peers: [
          "https://github.com/cocktailpeanut/ace-step.pinokio.git",
          "https://github.com/cocktailpeanut/ace-step-ui.pinokio.git"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          "npm run dev -- --host 127.0.0.1 --port {{port}} --strictPort"
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
