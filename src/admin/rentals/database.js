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

  async findPending(page) {
    const query = `SELECT r.id, u.id as user_id, u.name as user_name, u.email, p.id as pack_id, p.name as pack_name, p.price as pack_price, 
    p.period as pack_period, p.electric, r.id as rental_id, r.pick_up, r.drop_off, r.actual_drop, r.packActive 
    FROM users u INNER JOIN rentals r ON u.id = r.user_id INNER JOIN packages p ON p.id = r.pack_id WHERE r.pick_up is null LIMIT 5 OFFSET ` + (page - 1) * 5;

    const queryCount = `SELECT COUNT(*) as total FROM users u INNER JOIN rentals r ON u.id = r.user_id INNER JOIN packages p ON p.id = r.pack_id WHERE r.pick_up is null`;

    const resultCount = await sequelize.query(queryCount, {
      raw: false,
      type: QueryTypes.SELECT,
    });

    const rentals = await sequelize.query(query, {
      raw: false,
      type: QueryTypes.SELECT,
    });

    const total = resultCount[0].total;
    const pageTotal = Math.ceil(total/5);

    return { rentals, pageTotal }
  }

  async findActives(page) {
    const query = `SELECT r.id, u.id as user_id, u.name as user_name, u.email, p.id as pack_id, p.name as pack_name, p.price as pack_price, 
    p.period as pack_period, p.electric, r.id as rental_id, r.pick_up, r.drop_off, r.actual_drop, r.packActive 
    FROM users u INNER JOIN rentals r ON u.id = r.user_id INNER JOIN packages p ON p.id = r.pack_id WHERE r.packActive = true LIMIT 5 OFFSET ` + (page - 1) * 5;

    const queryCount = `SELECT COUNT(*) as total FROM users u INNER JOIN rentals r ON u.id = r.user_id INNER JOIN packages p ON p.id = r.pack_id WHERE r.packActive = true`;

    const resultCount = await sequelize.query(queryCount, {
      raw: false,
      type: QueryTypes.SELECT,
    });

    const rentals = await sequelize.query(query, {
      raw: false,
      type: QueryTypes.SELECT,
    });

    const total = resultCount[0].total;
    const pageTotal = Math.ceil(total/5);

    return { rentals, pageTotal }
  }

  async findInactives(page) {

    const query = `SELECT r.id, u.id as user_id, u.name as user_name, u.email, p.id as pack_id, p.name as pack_name, p.price as pack_price, 
    p.period as pack_period, p.electric, r.id as rental_id, r.pick_up, r.drop_off, r.actual_drop, r.packActive 
    FROM users u INNER JOIN rentals r ON u.id = r.user_id INNER JOIN packages p ON p.id = r.pack_id WHERE r.packActive = false AND actual_drop IS NOT null LIMIT 5 OFFSET ` + (page - 1) * 5;

    const queryCount = `SELECT COUNT(*) as total 
    FROM users u INNER JOIN rentals r ON u.id = r.user_id INNER JOIN packages p ON p.id = r.pack_id WHERE r.packActive = false AND actual_drop IS NOT null`;

    const resultCount = await sequelize.query(queryCount, {
      raw: false,
      type: QueryTypes.SELECT,
    });

    const rentals = await sequelize.query(query, {
      raw: false,
      type: QueryTypes.SELECT,
    });

    const total = resultCount[0].total;
    const pageTotal = Math.ceil(total/5);

    return { rentals, pageTotal }
  }

  findPendingById(rentalId) {
    const query = `SELECT r.id, u.id as user_id, u.name as user_name, u.email, p.id as pack_id, p.name as pack_name, p.price as pack_price, 
    p.period as pack_period, p.electric, r.id as rental_id, r.pick_up, r.drop_off, r.actual_drop, r.packActive 
    FROM users u INNER JOIN rentals r ON u.id = r.user_id INNER JOIN packages p ON p.id = r.pack_id WHERE r.pick_up is null AND r.id = ${rentalId}`;

    const result = sequelize.query(query, {
      raw: false,
      type: QueryTypes.SELECT,
    });
    return result;
  }
  
  findActivesById(rentalId) {
    const query = `SELECT r.id, u.id as user_id, u.name as user_name, u.email, p.id as pack_id, p.name as pack_name, p.price as pack_price, 
    p.period as pack_period, p.electric, r.id as rental_id, r.pick_up, r.drop_off, r.actual_drop, r.packActive 
    FROM users u INNER JOIN rentals r ON u.id = r.user_id INNER JOIN packages p ON p.id = r.pack_id WHERE r.packActive = true AND r.id = ${rentalId}`;

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
    const result = await Rentals.create(
      {
        user_id: userId,
        pack_id: packId
      })
    return result
  }
}

const RentalDb = new Database();
module.exports = RentalDb;
