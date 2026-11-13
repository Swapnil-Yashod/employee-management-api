const express = require("express");

const router = express.Router();

const { getEmployeeDetails,createEmployee,getAllEmployees } = require("../controllers/employee.controller");

router.get('/:id',getEmployeeDetails);
router.post('/create',createEmployee);
router.get('/',getAllEmployees)

module.exports = router;
