const express = require("express")

const app = express()

app.get("/", function (req, res) {
    res.send("<h1>Hello</h1>")
})

app.listen(3000, () => console.log("The server is up on port 3000"))