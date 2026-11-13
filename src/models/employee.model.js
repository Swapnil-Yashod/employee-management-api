const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    employeeId: {
        type: Number,
        required: true,
        unique: true
    },

    dob: {
        type: Date
    },

    salary: {
        type: Number
    }

}, {
    timestamps: true
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;