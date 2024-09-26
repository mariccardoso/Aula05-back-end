import { Router } from "express"

const personagensRoutes = Router()

let personagens = [
    {
        id: 1,
        nome: "Relampago Mcqueen",
        studio: "Pixar",
        copaPistao: true,
        relacionamento: "Sally Carrera"
    },

    {
        id: 2,
        nome: "Tom Mate",
        studio: "Pixar",
        copaPistao: false,
        relacionamento: "Holly"

    },

    {
        id: 3,
        nome: "Sally Carrera",
        studio: "Pixar",
        copaPistao: false,
        relacionamento: "Relampago Mcqueen"
    },
]

personagensRoutes.get("/",(req, res) => {
    return res.status(200)
    .send(personagens)
})

//Criar uma nova emoção
personagensRoutes.post("/",(req, res) => {
    const{nome, studio, copaPistao, relacionamento} = req.body
    const newPersonagem = {
        id: personagens.length + 1,
        nome: nome,
        studio: studio,
        copaPistao: copaPistao,
        relacionamento: relacionamento
    }
    personagens.push(newPersonagem)
    return res.status(201).send(newPersonagem)


});

// Buscar por id

personagensRoutes.get("/:id", (req, res) => {
    const{id} = req.params; 

    //console.log(id);
    const personagem = personagens.find((personagem) => personagem.id == id)

    if(!personagem){ 
        return res.status(404).send({
        message: "Personagem não encontrado!",
        });
    }

    return  res.status(200).send({
        message: "Personagem encontrado",
        personagem,
    })
});

//Atualizar personagem
personagensRoutes.put("/:id", (req, res) => {
    const{id} = req.params;

    const personagem = personagens.find((person) => person.id == id);

    if(!personagem){ 
        return res.status(404).send({
        message: "Personagem não encontrado!",
        });
    }

    const{nome, studio, copaPistao, relacionamento} = req.body
    personagem.nome = nome
    personagem.studio = studio
    personagem.copaPistao = copaPistao
    personagem.relacionamento = relacionamento;

    return  res.status(200).send({
        message: "Personagem atualizado",
        personagem,
    })
})

//Deletar personagem
personagensRoutes.delete("/:id", (req, res) => {
    const{id} = req.params; 

    //console.log(id);
    const personagem = personagens.find((person) => person.id == id)

    if(!personagem){ 
        return res.status(404).send({
        message: "Personagem não encontrado!",
        });
    }

    personagem = personagens.filter((personagem)=> personagem.id != id)

    return  res.status(200).send({
        message: "Personagem deletado",
        personagem,
    })
});


export default personagensRoutes;
