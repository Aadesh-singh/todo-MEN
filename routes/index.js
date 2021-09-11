const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');

router.get('/', homeController.home);

router.post('/create-task', homeController.createTask);

router.get('/delete-task', homeController.deleteTask);

router.get('/edit-task', homeController.editTask);

router.post('/update-task', homeController.updateTask);

module.exports = router;