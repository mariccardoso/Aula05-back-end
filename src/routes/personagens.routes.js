import { Router } from "express"

const personagensRoutes = Router()

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

app.get("/personagens",(req, res) => {
    return res.status(200)
    .send(personagens)
})