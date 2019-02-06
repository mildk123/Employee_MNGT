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

routes.post("/search", async (req, res) => {
    console.log('search employee')
    let searchTerm = req.body.searchTerm
    //Check Email

    const employee = await employees.find({ [req.body.searchCat] : {$regex: new RegExp(searchTerm, "i") } })

    res.status(200).send({ message: "search response", employee: employee });
    res.end()
})



module.exports = routes;