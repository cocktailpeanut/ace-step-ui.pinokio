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
        path: "app/ACE-Step-1.5",
        message: [
          "uv venv --python 3.11",
          "uv pip install -e ."
        ]
      }
    }
  ]
}
