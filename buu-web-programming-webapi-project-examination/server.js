const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')



/// TODO: Develop GET /contacts


/// TODO: Develop POST /contacts

app.post('/contacts', (req, res) => {
    let newContact = req.body
    contacts.push(newContacts)
    res.status(201).send()
})

app.listen(3000, () => {
    console.log('API Server started at port 3000')
})
