module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/fspecii/ace-step-ui app"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/ace-step/ACE-Step-1.5 app/ACE-Step-1.5"
        ]
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
          "npm install"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app/server",
        message: [
          "npm install",
          "npm run db:migrate"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        venv_python: "3.11",
        path: "app/ACE-Step-1.5",
        message: [
          "uv pip install -e ."
        ]
      }
    }
  ]
}
