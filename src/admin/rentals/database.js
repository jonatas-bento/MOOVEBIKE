const { QueryTypes } = require("sequelize");
const { sequelize, Rentals } = require("../../database/models");

class Database {
  findAll() {
    const query = `SELECT r.id, u.id as user_id, u.name as user_name, u.email, p.id as pack_id, p.name as pack_name, p.price as pack_price, 
    p.period as pack_period, p.electric, r.id as rental_id, r.pick_up, r.drop_off, r.actual_drop, r.packActive 
    FROM users u INNER JOIN rentals r ON u.id = r.user_id INNER JOIN packages p ON p.id = r.pack_id`;

    const result = sequelize.query(query, {
      raw: false,
      type: QueryTypes.SELECT,
    });
    return result;
  }

  findPending() {
    const query = `SELECT r.id, u.id as user_id, u.name as user_name, u.email, p.id as pack_id, p.name as pack_name, p.price as pack_price, 
    p.period as pack_period, p.electric, r.id as rental_id, r.pick_up, r.drop_off, r.actual_drop, r.packActive 
    FROM users u INNER JOIN rentals r ON u.id = r.user_id INNER JOIN packages p ON p.id = r.pack_id WHERE r.pick_up is null`;

    const result = sequelize.query(query, {
      raw: false,
      type: QueryTypes.SELECT,
    });
    return result;
  }

  findActives() {
    const query = `SELECT r.id, u.id as user_id, u.name as user_name, u.email, p.id as pack_id, p.name as pack_name, p.price as pack_price, 
    p.period as pack_period, p.electric, r.id as rental_id, r.pick_up, r.drop_off, r.actual_drop, r.packActive 
    FROM users u INNER JOIN rentals r ON u.id = r.user_id INNER JOIN packages p ON p.id = r.pack_id WHERE r.packActive = true`;

    const result = sequelize.query(query, {
      raw: false,
      type: QueryTypes.SELECT,
    });
    return result;
  }

  findInactives() {
    const query = `SELECT r.id, u.id as user_id, u.name as user_name, u.email, p.id as pack_id, p.name as pack_name, p.price as pack_price, 
    p.period as pack_period, p.electric, r.id as rental_id, r.pick_up, r.drop_off, r.actual_drop, r.packActive 
    FROM users u INNER JOIN rentals r ON u.id = r.user_id INNER JOIN packages p ON p.id = r.pack_id WHERE r.packActive = false AND actual_drop IS NOT null`;

    const result = sequelize.query(query, {
      raw: false,
      type: QueryTypes.SELECT,
    });
    return result;
  }

  async activate(rentalData) {
    const rental = await Rentals.findByPk(rentalData.rental_id);
    Object.assign(rental, rentalData);
    rental.save();
    return rental;
  }

  async desactivate(rentalData) {
    const rental = await Rentals.findByPk(rentalData.rental_id);
    Object.assign(rental, rentalData);
    rental.save();
    return rental;
  }

  async findOne(userId) {
    const packActive = await Rentals.findOne({
      where: {
        user_id: userId,
        actual_drop: null,
      },
    });
    return packActive;
  }

  async create(userId, packId) {
    const result = await Rentals.create(userId, packId);
    return result;
  }
}

const RentalDb = new Database();

module.exports = RentalDb;
