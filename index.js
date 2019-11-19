const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

let persons = [
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
    },
    {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
    },
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
    },
    {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
    }
]

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

app.get('/info', (req, res) => {
    res.send(`<div>
        <p>Phonebook has info for ${persons.length} people<p> 
        <p>${new Date()}</p>
    </div>`)
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
    const id = req.params.id
    const personToFind = persons.find(person => person.id == id)
    if (personToFind) {
        res.json(personToFind)
    } else {
        res.status(404).end()
    }
})

app.post('/api/persons', (req, res) => {
    const body = req.body
    const name = body.name
    const number = body.number
    const id = Math.max(...persons.map(person => person.id)) + 1

    if (!name) {
        return res.status(400).json({
            error: 'no name has been provided'
        })
    }
    if (!number) {
        return res.status(400).json({
            error: 'no number has been specified'
        })
    }

    personToAdd = {
        name: name,
        number: number,
        id: id
    }

    persons = persons.concat(personToAdd)
    res.json(personToAdd)
})

app.delete('/api/persons/:id', (req, res) => {
    const id = req.params.id
    persons = persons.filter(person => person.id != id)
    res.redirect('/api/persons')
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})