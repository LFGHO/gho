const { StatusCodes } = require("http-status-codes");
const { validationResult } = require("express-validator");
const {
  BadRequestError,
  UnauthenticatedError,
  InternalServerError,
} = require("../errors");


const Student = require('../models/studentModel')
const Counter = require('../models/counter')
const Event = require('../models/event')
const Grade = require('../models/grades')
const Hours = require('../models/hoursModel')
const DeletedHours = require('../models/deletedHoursModel')


// importing hours utils 
const {addHoursToStudentAndCollection,processMultipleHoursData} = require('../utils/hour/addHours')

const addOneStudent = async (req, res) => {
  try {
      const student = new Student({
          name: req.body.name,
          entry: req.body.entry,
          email: req.body.email,
      });
      const newStudent = await student.save();
      res.status(200).json(newStudent);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
  }
}


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


const getAllStudents = async (req, res) => {
  try {
      const students = await Student.find();
      res.status(200).json(students);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
  }
}


const addMultipleHours = async (req, res) => {
  try {
      const multipleHoursData = req.body.hoursData; // Assuming it's an array of hour data
      if (!Array.isArray(multipleHoursData)) {
          return res.status(400).json({ error: 'Invalid input data' });
      }
      const results = await processMultipleHoursData(multipleHoursData);
      res.status(200).json({ message: 'Hours added successfully', results });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
  }
}

const addOneEvent = async (req, res) => {

  try { 
      const counter = await Counter.findOne({ id: 1 });
      if (!counter) {
          return res.status(404).json({ error: 'Counter not found' });
      }

      const event = new Event({
          eventId: counter.counterEvent,
          name: req.body.name,
          type: req.body.type,
          venue: req.body.venue,
          date: req.body.date
      });

      const newEvent = await event.save();

      counter.counterEvent += 1;
      await counter.save();
      
      res.status(200).json(newEvent);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
  }

}




const getEventById = async (req, res) => {
  try {
      const event = await Event.findOne({ eventId: req.params.eventId });
      if (!event) {
          return res.status(404).json({ error: 'Event not found' });
      }
      res.status(200).json(event);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
  }
}


const updateEventById = async (req, res) => {
  try {
      const result = await Event.deleteOne({ eventId: req.params.eventId });
      if (result.deletedCount === 0) {
          return res.status(404).json({ error: 'Event not found' });
      }
      res.status(200);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
  }
}

const deleteEventById = async (req, res) => {
  try {
      const result = await Event.deleteOne({ eventId: req.params.eventId });
      if (result.deletedCount === 0) {
          return res.status(404).json({ error: 'Event not found' });
      }
      res.status(200);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
  }
}

const getAllStudentsWith80Hours = async (req, res) => {
  // Update those student creditUploaded to True
  try {
      const students = await Student.find({ hours: { $gte: 80 }, creditUploaded: false });
      // Update those student creditUploaded to True

      // Push those students data in the grade's history array of grade id =1 
      const grade = await Grade.findOne({ id: 1 });
      if (!grade) {
          return res.status(404).json({ error: 'Grade not found' });
      }

      const gradeHistory = []
      for(const student of students){
          gradeHistory.push({
              entry: student.entry,
              name: student.name,
              grade: 'S'
          })
      }

      grade.history.push(gradeHistory);

      for (const student of students) {
          student.creditUploaded = true;
          await student.save();
      }

      res.status(200).json(students);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
  }
}


const downloadGradeHistory = async (req, res) => {
  try {
      const grade = await Grade.findOne({ id: 1 });
      if (!grade) {
          return res.status(404).json({ error: 'Grade not found' });
      }
      res.status(200).json(grade.history);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
  }
}




module.exports = {
  addOneStudent,
  searchHoursByEntryNumber,
  getAllStudents,
  addMultipleHours,
  addOneEvent,
  getEventById,
  updateEventById,
  deleteEventById,
  getAllStudentsWith80Hours,
  downloadGradeHistory
};