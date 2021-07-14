const RentalService = require('./service')

class Controller {

  async list(req, res) {
    try {
      const rentals = await RentalService.findAll();
      rentals.length == 0 ?
        res.status(200).json({ message: "No rentals registered yet" })
        :
        res.status(200).json(rentals);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async listPending(req, res) {
    try {
      const rentals = await RentalService.findPending();
      rentals.length == 0 ?
        res.status(200).json({ message: "No rentals pending activation" })
        :
        res.status(200).json(rentals);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async listActives(req, res) {
    try {
      const rentals = await RentalService.findActives();
      rentals.length == 0 ?
        res.status(200).json({ message: "No rentals active at the moment" })
        :
        res.status(200).json(rentals);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async listInactives(req, res) {
    try {
      const rentals = await RentalService.findInactives();
      rentals.length == 0 ?
        res.status(200).json({ message: "No rentals inactive at the moment" })
        :
        res.status(200).json(rentals);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async activate(req, res) {
    const today = new Date();

    const rentalData = {
      rental_id: req.body.rental_id,
      pick_up: today,
      drop_off: RentalService.getDropDate(today, req.body.pack_period),
      packActive: true
    }

    try {
      await RentalService.activate(rentalData)
      res.status(201).json({ message: "Rental activated successfully" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async desactivate(req, res) {
    const today = new Date();
    const packPrice = req.body.pack_price;

    const rentalData = {
      rental_id: req.body.rental_id,
      drop_off: req.body.drop_off,
      actual_drop: today,
      packActive: false
    }

    // Retorna os dias de atraso
    const delayDays = RentalService.getDelayDays(rentalData.drop_off, today);
    // Calcula multa com base no valor do plano
    const fine = RentalService.getFine(delayDays, packPrice);
    //# Passar Parâmetros para a view
    console.log(`Dias de Atrado = ${delayDays} e Multa = ${fine}`)

    try {
      await RentalService.desactivate(rentalData)
      res.status(201).json({ message: "Rental desactivated successfully" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}

const RentalController = new Controller();

module.exports = RentalController;