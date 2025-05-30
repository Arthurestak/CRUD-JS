document.getElementById("form").addEventListener("submit", async (e) =>{
    e.preventDefault()

    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value
    const confirmaSenha = document.getElementById("confirmaSenha").value


    if(senha !== confirmaSenha){
        alert("As senhas não coincidem!")
        return;
    } 
    const response = await fetch("http://localhost:3000/pessoa", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({nome,email,senha})
    })
    const data = await response.json();
    alert(data.message)
    
});

