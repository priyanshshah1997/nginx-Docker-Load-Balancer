const express = require('express')
const app = express();
const port = 5000
const name = process.env.name || "World"

app.get('/', (req, res) => {
    console.log("It is called");
    res.send(`Hello ${name} !`);
})
app.listen(port, () => {
    console.log(`Server Started on Port  ${port}`)
})
