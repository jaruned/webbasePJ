const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
let contacts = []

app.use(bodyParser.json())
app.use(cors())

/// TODO: Develop GET /contacts



/// TODO: Develop POST /contacts



app.listen(3000, () => {
    console.log('API Server started at port 3000')
})
