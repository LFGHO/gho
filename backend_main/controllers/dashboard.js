const { StatusCodes } = require("http-status-codes");
const { validationResult } = require("express-validator");
const {
  BadRequestError,
  UnauthenticatedError,
  InternalServerError,
} = require("../errors");


const Student = require('../models/studentModel')
// const Hours = require('../models/hoursModel')
// const DeletedHours = require('../models/deletedHoursModel')
// const Counter = require('../models/counter')
// const Event = require('../models/event')
// const Grade = require('../models/grades')


const searchHoursByEntryNumber = async (req, res) => {
  try {
      const student = await Student.findOne({ entry: req.params.entry });
      if (!student) {
          return res.status(404).json({ error: 'Student not found' });
      }
      res.status(200).json(student);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
  }
}

const getAllEvents = async (req, res) => {
  try {
      const events = await Event.find();
      res.status(200).json(events);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
  }
}






module.exports = {
  searchHoursByEntryNumber,
  getAllEvents
};