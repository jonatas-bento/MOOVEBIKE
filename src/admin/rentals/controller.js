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
    const { page = 1 } = req.query
    try {
      const { rentals, pageTotal } = await RentalService.findPending(page);

      res.render('adminRentalsPending', { rentals, pageTotal });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async listActives(req, res) {
    const { page = 1 } = req.query
    try {
      const { rentals, pageTotal } = await RentalService.findActives(page);
      res.render('adminRentalsActive', { rentals, pageTotal });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async listInactives(req, res) {
    const { page = 1 } = req.query
    try {
      const { rentals, pageTotal } = await RentalService.findInactives(page); 
      res.render('adminRentalsInactive', { rentals, pageTotal }); 
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async activate(req, res) {
    const today = new Date();
    const rentalId = req.params.id;
    const rental = await RentalService.findPendingToActivate(rentalId);
    const period = rental[0].pack_period;

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
    const rental = await RentalService.findActivesToDesactivate(rentalId);

    const rentalData = {
      rental_id: rentalId,
      drop_off: rental[0].drop_off,
      actual_drop: today,
      packActive: false
    }
    const delayDays = RentalService.getDelayDays(rentalData.drop_off, today);
    const fine = RentalService.getFine(delayDays, rental[0].pack_price);
    try {
      await RentalService.desactivate(rentalData)
      res.render("messageDesativate", { delayDays, fine} )
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}

const RentalController = new Controller();
module.exports = RentalController;