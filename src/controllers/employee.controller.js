const Employee = require("../models/employee.model.js");
const {
  getEmployee,
  storeEmployee,
} = require("../services/employee.service.js");

async function getEmployeeDetails(req, res) {
  try {
    const employee = await getEmployee(req.params.id);
    console.log(employee.name);

    return res.status(200).json({
      success: true,
      data: employee,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
}

async function getAllEmployees(req,res) {
  try {
    const getAll = await Employee.find();
    return res.status(200).json({
        success:true,
        data:getAll,
    });
  } catch (error) {
    return res.status(404).json({
        success: false,
        message: error.message,
    });
  }
}

async function createEmployee(req, res) {
  try {
    const employeeData = await storeEmployee(req.body);

    return res.status(201).json({
      success: true,
      data: employeeData,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}
module.exports = { getEmployeeDetails, createEmployee,getAllEmployees };
