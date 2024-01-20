const express = require('express')
const router = express.Router()

const dashboardRouter = require('./dashboard')

router.get('/', (req, res) => {
  res.send('<h1>GFGHO Backend is running well!</h1>');
});
router.use('/api/v1/dashboard', dashboardRouter);

module.exports = router
