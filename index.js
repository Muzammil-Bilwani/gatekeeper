const express = require("express")
const axios = require("axios").default

const app = express()
const port = 3000

app.get("/authenticate/:code", async (req, res) => {
  const response = await axios.post(
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
  return res.json(response.data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
