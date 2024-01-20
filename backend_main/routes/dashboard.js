const express = require('express')
const router = express.Router()

const dashboardControllers = require('../controllers/dashboard')

router.post('/depositAmount', dashboardControllers.depositAmount);
router.post('/saveAnswer', dashboardControllers.saveAnswer);
router.post('/getUserData', dashboardControllers.getUserData);


module.exports = router
