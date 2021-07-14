const express = require('express');
const router = express.Router();
const UsersController = require('./controller')

router.get('/users', UsersController.list);
router.get('/users/:userId', UsersController.listOne);
router.delete('/users/:userId', UsersController.remove);
router.post('/users/:userId', UsersController.restore);
router.patch('/users/:userId', UsersController.edit);

module.exports = router;