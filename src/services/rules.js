const rules = [
    {
        photo: "/img/two-removebg-preview.png",
        title: "CADASTRO",
        info: "Cadastre-se em nosso site.",   
    },
    {
        photo: "/img/two-removebg-preview.png",
        title: "PLANO",
        info: "Escolha um plano. Temos planos: diário, semanal, quinzenal e mensal.",    
    },
    {
        photo: "/img/threepg-removebg-preview.png",
        title: "RESERVA",
        info: "Faça sua reserva online.",    
    },
    {
        photo: "/img/four-removebg-preview.png",
        title: "RETIRADA/DEVOLUÇÃO",
        info: "Escolha a loja mais próxima de você para retirar e devolver.",    
    }
]

const getRules = () => {
    return rules
}
  
module.exports = { getRules }