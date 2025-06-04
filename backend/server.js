const express = require("express")
const cors = require("cors")
const bcrypt = require("bcrypt")
const db = require("./db")
const validadorCadastro = require("./validadorCadastro");

const app = express()
app.use(cors())
app.use(express.json())

app.post("/pessoa", async (req, res) => {
    try{
        const {nome,email,senha} = req.body;
        if(nome.length > 45){
            res.json({message: "O nome deve conter menos de 45 caracteres!"})
            return
        }
        if(email.length > 50){
            res.json({message: "O email deve conter menos de 50 caracteres!"})
            return
        }
        if(senha.length > 20){
            res.json({message: "A senha deve conter menos de 20 caracteres!"})
            return
        }
        if(validadorCadastro(nome, email, senha) == true){
            
            const senhaCriptografada = await bcrypt.hash(senha,10)
            
            const sql = "insert into pessoa (nome,email,senha) values(?,?,?)"
            db.query(sql, [nome, email, senhaCriptografada], (err, result) =>{
                if(err){
                    console.error("Erro ao inserir", err)
                    return res.status(500).json({error: "Erro ao cadastrar usuário!"})
                }
                res.json({message: "Usuário cadastrado com sucesso!"})
            })
            return
        }
        res.json({message: "Os campos não correspondem!"})


    } catch (error){
        console.error("Erro na criptografia!", error)
        res.status(500).json({error: "Erro interno no servidor"})
    }
})

app.listen(3000, () =>{
    console.log("Servidor rodando em http://localhost:3000");
})

