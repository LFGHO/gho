const express = require('express')
const router = express.Router()

const dashboardControllers = require('../controllers/dashboard')

router.post('/depositAmount', dashboardControllers.depositAmount);


module.exports = router
