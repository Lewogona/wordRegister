const express = require('express');
const router = express.Router();

const auth = require("../middleware/auth");

const projectCtrl = require('../controllers/project');

// Attach controllers to express routes
router.get("/", auth, projectCtrl.getAllProjects);
router.post("/", auth, projectCtrl.createProject);
router.get("/:id", auth, projectCtrl.getOneProject);
router.put("/:id", auth, projectCtrl.modifyProject);
// router.delete("/:id", auth, projectCtrl.deleteSauce);
// router.post("/:id/like", auth, projectCtrl.likeSauce);

module.exports = router;