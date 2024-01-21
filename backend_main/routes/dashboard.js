const express = require('express')
const router = express.Router()

const dashboardControllers = require('../controllers/dashboard')

router.post('/depositAmount', dashboardControllers.depositAmount);
router.post('/saveAnswer', dashboardControllers.saveAnswer);
router.post('/getUserData', dashboardControllers.getUserData);
router.post('/addInList', dashboardControllers.addInList);
router.post('/getList', dashboardControllers.getList);
router.get('/deleteEntrie/:id', dashboardControllers.deleteEntrie);
router.get('/changeStatus/:id', dashboardControllers.changeStatus);
router.post('/getNotifications', dashboardControllers.getNotifications);


module.exports = router
