const sequelize = require("sequelize");
const db = require("../config/database");
var student = db.define(
    "student",
    {
        id: { type: sequelize.INTEGER, primaryKey: true },
        name: { type: sequelize.STRING },
        mobile: { type: sequelize.STRING },
        active: { type: sequelize.BOOLEAN },
    },
    {
        // freeze name table not using *s on name
        freezeTableName: true,
        // dont use createdAt/update
        timestamps: false,
    }
);
module.exports = student;