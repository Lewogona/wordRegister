const express = require('express');
const router = express.Router();

const auth = require("../middleware/auth");
// const multer = require("../middleware/multer-config");

const projectCtrl = require('../controllers/project');

// Attach controllers to express routes
// router.get("/", auth, projectCtrl.getAllSauces);
router.post("/", auth, projectCtrl.createProject);
// router.get("/:id", auth, projectCtrl.getOneSauce);
// router.put("/:id", auth, multer, projectCtrl.modifySauce);
// router.delete("/:id", auth, multer, projectCtrl.deleteSauce);
// router.post("/:id/like", auth, projectCtrl.likeSauce);

module.exports = router;