var { config, app } = require("./inde")

var port = process.env.PORT || config.port || 9999

app.listen(port, null, function (err) {
  console.log("Gatekeeper, at your service: http://localhost:" + port)
})
