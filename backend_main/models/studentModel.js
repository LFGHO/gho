const mongoose = require('mongoose')

const studentSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter student name"]
        },
        entry: {
            type: String,
            required: true,
            unique: true
        },
        entryYear: {
            type: Number,
            required: true,
        },
        hoursToComplete : {
            type : Number,
            required: true,
            default: 80
        },
        grade: {
            type : String,
            required: true,
            default : 'Z'
        },
        hours: {
            type: Number,
            required: true,
            default: 0
        },
        history : {
            type: Array,
            default: []
        },
        creditUploaded : {
            type : Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)


const Student = mongoose.model('Student', studentSchema);

module.exports = Student;