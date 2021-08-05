const rules = [
    {
        photo: "/img/number-one.png",
        title: "CADASTRO",
        info: "Cadastre-se em nosso site.",
    },
    {
        photo: "/img/number-two.png",
        title: "PLANO",
        info: "Escolha um plano. Temos planos: diário, semanal, mensal e anual.",
    },
    {
        photo: "/img/number-three.png",
        title: "RETIRADA",
        info: "Escolha a loja mais próxima de você para retirar.",
    },
    {
        photo: "/img/number-four.png",
        title: "DEVOLUÇÃO",
        info: "Devolva em qualquer uma das lojas.",
    }
]

const getRules = () => {
    return rules
}

module.exports = { getRules }