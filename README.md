# ACE-Step UI (Pinokio Launcher)

ACE-Step UI is an open source, local-first interface for ACE-Step 1.5 AI music generation. This launcher installs the UI and the ACE-Step engine, then starts the API, backend, and frontend together.

**What It Does**
- Installs ACE-Step UI and ACE-Step 1.5 into `app/`
- Creates a local configuration in `app/.env`
- Starts the ACE-Step API, backend server, and frontend UI

**Requirements**
- Node.js 18+
- Python 3.11
- `uv` (Python package manager)
- NVIDIA GPU with 8GB+ VRAM recommended (ACE-Step 1.5)
- FFmpeg (for audio processing and duration detection)

**How To Use**
1. Click **Install** in Pinokio.
2. Click **Start** once installation completes.
3. Open the **Open Web UI** tab.

**Default URLs**
- UI: `http://127.0.0.1:3000`
- Backend API: `http://127.0.0.1:3001`
- ACE-Step API: `http://127.0.0.1:8001`

**Configuration**
- Edit the `env` blocks in `start.js` to change ports or set optional keys like `PEXELS_API_KEY`.
- If you change `ACESTEP_API_URL` or ports, restart the app.

**API (Local Backend)**
The UI backend exposes local endpoints on `http://127.0.0.1:3001`. The minimal flow is:
1. Create or fetch a local user via `POST /api/auth/setup` to get a JWT token.
2. Start a generation job with `POST /api/generate` using the token.
3. Poll status with `GET /api/generate/status/:jobId` using the token.

JavaScript:
```javascript
const base = "http://127.0.0.1:3001";

const setupRes = await fetch(`${base}/api/auth/setup`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ username: "localuser" })
});
const { token } = await setupRes.json();

const genRes = await fetch(`${base}/api/generate`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  },
  body: JSON.stringify({
    customMode: false,
    songDescription: "An upbeat pop song about summer adventures",
    instrumental: false
  })
});
const { jobId } = await genRes.json();

const statusRes = await fetch(`${base}/api/generate/status/${jobId}`, {
  headers: { "Authorization": `Bearer ${token}` }
});
const status = await statusRes.json();
console.log(status);
```

Python:
```python
import requests

base = "http://127.0.0.1:3001"

setup = requests.post(f"{base}/api/auth/setup", json={"username": "localuser"})
setup.raise_for_status()
token = setup.json()["token"]

gen = requests.post(
    f"{base}/api/generate",
    headers={"Authorization": f"Bearer {token}"},
    json={
        "customMode": False,
        "songDescription": "An upbeat pop song about summer adventures",
        "instrumental": False
    },
)
gen.raise_for_status()
job_id = gen.json()["jobId"]

status = requests.get(
    f"{base}/api/generate/status/{job_id}",
    headers={"Authorization": f"Bearer {token}"},
)
status.raise_for_status()
print(status.json())
```

Curl:
```bash
curl -s http://127.0.0.1:3001/api/auth/setup \
  -H "Content-Type: application/json" \
  -d '{"username":"localuser"}'
```

```bash
curl -s http://127.0.0.1:3001/api/generate \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"customMode":false,"songDescription":"An upbeat pop song about summer adventures","instrumental":false}'
```

```bash
curl -s http://127.0.0.1:3001/api/generate/status/YOUR_JOB_ID \
  -H "Authorization: Bearer YOUR_TOKEN"
```
