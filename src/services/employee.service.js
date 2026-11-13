const Employee = require("../models/employee.model");


async function getEmployee(id){
    // return new Promise((resolve,reject)=>{

    //     setTimeout(()=>{
    //         const employee ={
    //             id:101,
    //             name:"Swapnil",
    //             salary:100000,
    //         };
    //         if(id == employee.id){
    //             resolve(employee);
    //         }else{
    //             reject(new Error("Employee not found"));
    //         }
    //     },2000)
    // });
    const employeeData = await Employee.findById(id);
    return employeeData;
}


const employees = [];

async function storeEmployee(employeeData){
        if(!employeeData || !employeeData.name || !employeeData.employeeId){
            return reject(new Error("Invalid data"));
        }
        const newEmployee = await Employee.create({
            name: employeeData.name,
            employeeId: employeeData.employeeId,
            dob: employeeData.dob,
            salary: employeeData.salary,
        });
        return newEmployee;
}
module.exports = {getEmployee,storeEmployee}