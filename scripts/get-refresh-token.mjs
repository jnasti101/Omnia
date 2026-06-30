import http from "node:http"
import { URL } from "node:url"
import { google } from "googleapis"

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
const REDIRECT_URI = "http://localhost:53682/oauth2callback"

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error("Set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET env vars and try again.")
  console.error("Example: GOOGLE_CLIENT_ID=... GOOGLE_CLIENT_SECRET=... node scripts/get-refresh-token.mjs")
  process.exit(1)
}

const oauth2 = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)

const authUrl = oauth2.generateAuthUrl({
  access_type: "offline",
  prompt: "consent",
  scope: ["https://www.googleapis.com/auth/calendar"],
})

console.log("\n1. Open this URL in your browser and grant access:\n")
console.log(authUrl)
console.log("\n2. After you approve, you'll be redirected back here. Waiting...\n")

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, REDIRECT_URI)
    if (url.pathname !== "/oauth2callback") {
      res.writeHead(404).end()
      return
    }
    const code = url.searchParams.get("code")
    if (!code) {
      res.writeHead(400).end("No code")
      return
    }
    const { tokens } = await oauth2.getToken(code)
    res.writeHead(200, { "Content-Type": "text/html" })
    res.end("<h1>Done. You can close this tab and return to the terminal.</h1>")

    console.log("\nGOOGLE_REFRESH_TOKEN=" + tokens.refresh_token)
    console.log("\nCopy that line into your .env.local. Done.")
    server.close()
    process.exit(0)
  } catch (err) {
    console.error("Error exchanging code:", err)
    res.writeHead(500).end()
    process.exit(1)
  }
})

server.listen(53682)
