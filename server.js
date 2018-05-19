const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
let contacts = [
    { name: 'Weera', phoneNumber: '081-8117784' },
    { name: 'Nuttaluck', phoneNumber: '080-0937060' },
    { name: 'Fuji', phoneNumber: '090-2201921' }
]

app.use(bodyParser.json())
app.use(cors())

app.get('/contacts', (req, res) => {
    res.send(contacts)
})

app.post('/contacts', (req, res) => {
    let newContact = req.body
    contacts.push(newContact)
    res.status(201).end()
})

app.listen(3000, () => {
    console.log('API Server started at port 3000')
})