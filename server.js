const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('<h1>Hello World by THUANVD!</h1>')
})

app.get('/about', (req, res) => {
    res.send(`I 'm THuanvd`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

