import { Router } from "express";

const emocoesRoutes = Router();

let emocoes = [
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

emocoesRoutes.get("/",(req, res) => {
    return res.status(200).send(emocoes)
})

emocoesRoutes.post("/",(req, res) => {
    const{nome, cor} = req.body
    const newEmotion = {
        id: emocoes.length + 1,
        nome: nome,
        cor: cor
    }
    emocoes.push(newEmotion)
    return res.status(201).send(emocoes)
});

export default emocoesRoutes;
