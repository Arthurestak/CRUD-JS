const express = require("express")
const cors = require("cors")
const bcrypt = require("bcrypt")
const db = require("./db")

const app = express()
app.use(cors())
app.use(express.json())

app.post("/pessoa", async (req, res) => {
    const {nome,email,senha} = req.body;
    try{
        const senhaCriptografada = await bcrypt.hash(senha,10)
    
        const sql = "insert into pessoa (nome,email,senha) values(?,?,?)"
        db.query(sql, [nome, email, senhaCriptografada], (err, result) =>{
            if(err){
                console.error("Erro ao inserir", err)
                return res.status(500).json({error: "Erro ao cadastrar usuário!"})
            }
            res.json({message: "Usuário cadastrado com sucesso!"})
        })
    } catch (error){
        console.error("Erro na criptografia!", error)
        res.status(500).json({error: "Erro interno no servidor"})
    }
})

app.listen(3000, () =>{
    console.log("Servidor rodando em http://localhost:3000");
})