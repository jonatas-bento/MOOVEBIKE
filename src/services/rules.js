const rules = [
    {
        photo: "/img/one-removebg-preview.png",
        title: "CADASTRO",
        info: "Cadastre-se em nosso site.",
    },
    {
        photo: "/img/two-removebg-preview.png",
        title: "PLANO",
        info: "Escolha um plano. Temos planos: diário, semanal, mensal e anual.",
    },
    {
        photo: "/img/threepg-removebg-preview.png",
        title: "RETIRADA",
        info: "Escolha a loja mais próxima de você para retirar.",
    },
    {
        photo: "/img/four-removebg-preview.png",
        title: "DEVOLUÇÃO",
        info: "Devolva em qualquer uma das lojas.",
    }
]

const getRules = () => {
    return rules
}

module.exports = { getRules }