require('dotenv-safe').config();

const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT } = process.env

module.exports = {
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'mysql',
  timezone: '-03:00'
}
