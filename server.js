const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
let contacts = [
    {
         name : 'John',
         phoneNumber : '011-1111111'
    }
]

app.use(bodyParser.json())
app.use(cors())

/// TODO: Develop GET /contacts
app.get('/contacts', (req,res) => {
    res.json(contacts)

    })

/// TODO: Develop POST /contacts
app.post('/contacts', (req, res) => {
    let newContacts = req.body
    contacts.pushs(newContacts)
    res.json(newContacts)
    res.status(201).send() 

})


app.listen(3000, () => {
    console.log('API Server started at port 3000')
})
