import express from 'express'
import {config } from 'dotenv'

config()

const serverPort = process.env.PORT || 3000

const app = express()
app.use(express.json()) // json: Java Script Object Notation

const emocoes = [
    {
        id: 1,
        nome: "Nostalgia",
        cor: "Cinza"
    },

    {
        id: 2,
        nome: "Nojinho",
        cor: "Verde"
    },

    {
        id: 3,
        nome: "Raiva",
        cor: "Vermelho"
    },
]

const personagens = [
    {
        id: 100,
        nome: "Relampago Mcqueen",
        studio: "Pixar",
        copaPistao: true,
        relaciomento: "Sally Carrera"
    },

    {
        id: 101,
        nome: "Tom Mate",
        studio: "Pixar",
        copaPistao: false,
        relaciomento: "Holly"

    },

    {
        id: 102,
        nome: "Sally Carrera",
        studio: "Pixar",
        copaPistao: false,
        relaciomento: "Relampago Mcqueen"
    },
]

app.get("/",(req, res) => {
    return res.status(200).send({message:"Hello, World!" })
})

app.get("/2tds2",(req, res) => {
    return res.status(200).send({message:"Hello, World!" })
})

app.get("/emocoes",(req, res) => {
    return res.status(200)
    .send(emocoes)
})

app.get("/personagens",(req, res) => {
    return res.status(200)
    .send(personagens)
})


app.listen(serverPort, () => {
    console.log(`😍 Server started on http//localhost:${serverPort}`)
})