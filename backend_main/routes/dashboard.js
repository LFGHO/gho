const express = require('express')
const router = express.Router()

const dashboardControllers = require('../controllers/dashboard')

router.get('/', (req,res)=> {
  res.send('Backend Running well!!')
});
router.get('/searchHours/:entry', dashboardControllers.searchHoursByEntryNumber);
router.get('/allEvents', dashboardControllers.getAllEvents);


module.exports = router
