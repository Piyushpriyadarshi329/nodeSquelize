const express = require("express");
const router = express.Router();
const controller = require("../controller/index");
router.get("/", controller.student.getAll);
// router.get("/:username", controller.user.getUsername);
// router.post("/", controller.user.createNew);
// router.put("/", controller.user.editAt);
// router.delete("/", controller.user.deleteUser);
module.exports = router;