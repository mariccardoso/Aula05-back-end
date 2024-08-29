import { Router } from "express"

const emocoesRoutes = Router()

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

app.get("/emocoes",(req, res) => {
    return res.status(200)
    .send(emocoes)
})

app.post("/emocoes",(req, res) => {
    const{nome, cor} = req.body
    const newEmotion = {
        id: emocoes.length + 1,
        nome: nome,
        cor: cor
    }
    emocoes.push(newEmotion)
    return res.status(200)
    .send(emocoes)
})

