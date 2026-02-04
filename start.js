module.exports = {
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        path: "app/ACE-Step-1.5",
        message: [
          "uv run acestep-api --port 8001"
        ],
        on: [{
          "event": "/(http:\/\/[0-9.:]+)/",
          "done": true
        }]
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app/server",
        env: {
          "ACESTEP_PATH": "../ACE-Step-1.5",
          "PORT": "3001",
          "NODE_ENV": "development",
          "DATABASE_PATH": "./data/acestep.db",
          "ACESTEP_API_URL": "http://127.0.0.1:8001",
          "AUDIO_DIR": "./public/audio",
          "FRONTEND_URL": "http://127.0.0.1:3000",
          "VITE_API_URL": "http://127.0.0.1:3001",
          "JWT_SECRET": "ace-step-ui-local-secret",
          "PEXELS_API_KEY": ""
        },
        message: [
          "npm run dev"
        ],
        on: [{
          "event": "/ACE-Step UI Server running/",
          "done": true
        }]
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        env: {
          "VITE_API_URL": "http://127.0.0.1:3001"
        },
        message: [
          "npm run dev -- --host 127.0.0.1 --port 3000"
        ],
        on: [{
          "event": "/(http:\/\/[0-9.:]+)/",
          "done": true
        }]
      }
    },
    {
      method: "local.set",
      params: {
        url: "{{input.event[1]}}"
      }
    }
  ]
}
