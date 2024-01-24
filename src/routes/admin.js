const express = require('express');
const router = express.Router();
const validationAdmin = require('../middlewares/validationAdmin')
const {admin} = require('../controllers/adminController');

router.get('/', validationAdmin, admin)

module.exports = router