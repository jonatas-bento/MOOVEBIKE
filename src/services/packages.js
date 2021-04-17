const packages = [
    {
      id: "diario",
      name: "DIÁRIO",
      price: "R$ 9,00",
      period: "Passe Diário",
    },
    {
      id: "relax",
      name: "RELAX",
      price: "R$ 16,90",
      period: "Plano Semanal",
    },
    {
      id: "moove",
      name: "MOOVE",
      price: "R$ 29,90",
      period: "Plano Mensal",
    },
    {
      id: "super-moove",
      name: "SUPER MOOVE",
      price: "R$ 239,90",
      period: "Plano Anual",
    }
  ]
  
  const getPackages = () => {
    return packages
  }
  
  module.exports = {
    getPackages
  }