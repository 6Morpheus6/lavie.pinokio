module.exports = {
  run: [
    {
      method: "hf.download",
      params: {
        "_": [ "Vchitect/LaVie" ],
        "repo-type": "space",
        "local-dir": "app",
      }
    },
    {
      method: "fs.copy",
      params: {
        src: "app.py",
        dest: "app/base/patched.py"
      }
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",
          path: "app",
          xformers: true
        }
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "uv pip install -r ../requirements.txt"
        ]
      }
    }
  ]
}
