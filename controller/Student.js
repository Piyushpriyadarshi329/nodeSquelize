const model = require("../model/index");
const { Op } = require("sequelize");
const controller = {};


controller.getAll = async function (req, res) {
    try {
        console.log("user call")
        const userData = await model.student.findAll();

        console.log("userData",userData)
        if (userData.length > 0) {
             res
                .status(200)
                .json({ message: "Connection successful", data: userData });
        } else {
            res.status(200).json({ message: "Connection failed", data: [] });
        }
    } catch (error) {

        console.log("error",error)
        res.status(404).json({ message: error });
    }
};

module.exports = controller;
