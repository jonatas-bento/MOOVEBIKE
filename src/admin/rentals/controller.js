const RentalService = require('./service');
const PackService = require('../packs/service');

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
      res.render('adminRentalsPending', { rentals });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async listActives(req, res) {
    try {
      const rentals = await RentalService.findActives();
      res.render('adminRentalsActive', { rentals });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async listInactives(req, res) {
    try {
      const rentals = await RentalService.findInactives();
      res.render('adminRentalsInactive', { rentals });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async activate(req, res) {
    const today = new Date();
    const rentalId = req.params.id;
    const packId = await RentalService.findOnePackId(rentalId);
    const packPeriod = await PackService.findOne(packId)
    const period = packPeriod.period
    const rentalData = {
      rental_id: rentalId,
      pick_up: today,
      drop_off: RentalService.getDropDate(today, period),
      packActive: true
    }
    console.log(rentalData)
    try {
      await RentalService.activate(rentalData)
      res.render("message", { message: 'Pacote ativado com sucesso' })
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async desactivate(req, res) {
    const today = new Date();
    const rentalId = req.params.id;
    const drop = await RentalService.findOneDropOff(rentalId);
    const packId = await RentalService.findOnePackId(rentalId);
    const packPrice = await PackService.findOne(packId);
    const price = packPrice.price;
    const rentalData = {
      rental_id: rentalId,
      drop_off: drop,
      actual_drop: today,
      packActive: false
    }
    const delayDays = RentalService.getDelayDays(rentalData.drop_off, today);
    const fine = RentalService.getFine(delayDays, price);
    console.log(fine)
    try {
      await RentalService.desactivate(rentalData)
      res.render("message", { message: `Pacote desativado com sucesso! Dias de atraso: ${delayDays} | Multa: R$${fine}` })
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}

const RentalController = new Controller();
module.exports = RentalController;