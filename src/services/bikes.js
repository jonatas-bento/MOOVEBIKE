const bikes = [
    {
        name: "MOOVE",
        photo: "/img/Bike01.png",
    },
    {
        name: "SUPER MOOVE",
        photo: "/img/Bike02.png",
      },
      {
        name: "MOOVE-e",
        photo: "/img/B01.png",
      },
      {
        name: "SUPER MOOVE-e",
        photo: "/img/B02.png",
      },
  ]
  
  const getBikes = () => {
    return bikes
  }
  
  module.exports = {
    getBikes
  }