const express = require("express")
const axios = require("axios")
const cors = require("cors")

const app = express()
const port = 3000

app.use(cors())

app.get("/", (req, res) => {
  return res.send("Gatekeeper Running!")
})

app.get("/authenticate/:code", (req, res) => {
  axios
    .post(
      "https://github.com/login/oauth/access_token",
      {
        client_id: "4f26ab3457765e21e424",
        redirect_uri: "https://rabbitpull.com",
        client_secret: "3cd0af8bcb69e8da15d9a4d1b353534700d4131c",
        code: req.params.code
      },
      {
        headers: {
          accept: "application/json"
        }
      }
    )
    .then(
      (response) => {
        if (response.data.access_token) return res.json(response.data)

        return res.status(400).json({ error: "No access token" })
      },
      (error) => {
        console.error(error)
        return res.status(500).json({
          message: error?.message || "Something went wrong"
        })
      }
    )
})

app.listen(port, () => {
  console.log(`Rabbit pull server app listening on port ${port}`)
})
