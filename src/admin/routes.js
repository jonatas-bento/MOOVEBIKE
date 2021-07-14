const express = require('express');
const router = express.Router();
const AdminController = require('../admin/controller')


router.get('/', AdminController.adminPage);
router.get('/users', AdminController.adminUsersPage);
router.get('/packages', AdminController.adminPackagesPage);
router.get('/rentals', AdminController.adminRentalsPage);

module.exports = router;
