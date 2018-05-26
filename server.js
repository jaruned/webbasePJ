const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
let contacts = [
    {
         name : 'Jhon',
         phoneNumber : '011-1111111'
    }
]

app.use(bodyParser.json())
app.use(cors())

/// TODO: Develop GET /contacts



/// TODO: Develop POST /contacts
app.post('/contacts', (req, res) => {
    let newContacts = req.body
    contacts.push(newContacts)
    res.status(201).send() 

})


app.listen(3000, () => {
    console.log('API Server started at port 3000')
})
