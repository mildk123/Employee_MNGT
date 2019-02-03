const express = require("express");
const routes = express.Router();


// ///////////////// Employees List ////////////////////
routes.get("/get", (req, res) => {
    console.log('List OF Employees')
    res.status(200).send({ message: "Sahi Hai mere bhai", match: false });
    return;

})



module.exports = routes;