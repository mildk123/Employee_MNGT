const express = require("express");
const routes = express.Router();

const employees = require('../Model/Employees')

// ///////////////// Employees List ////////////////////
routes.get("/get", async (req, res) => {
    console.log('List OF Employees')
    //Check Email
    const employee = await employees.find({});
    
    res.status(200).send({ message: "Sahi Hai mere bhai", employee: employee });
    res.end()
})



module.exports = routes;