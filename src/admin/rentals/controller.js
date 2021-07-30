const RentalService = require('./service');
const PackService = require('../packs/service');

class Controller {

  async list(req, res) {
    try {
      const rentals = await RentalService.findAll();
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
    const rental = await RentalService.findPending(rentalId);

    const period = rental.period
    const rentalData = {
      rental_id: rentalId,
      pick_up: today,
      drop_off: RentalService.getDropDate(today, period),
      packActive: true
    }
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
    const rental = await RentalService.findActives(rentalId); 
  
    const rentalData = {
      rental_id: rentalId,
      drop_off: rental.drop_off,
      actual_drop: today,
      packActive: false
    }
    const delayDays = RentalService.getDelayDays(rentalData.drop_off, today);
    const fine = RentalService.getFine(delayDays, rental.price);
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