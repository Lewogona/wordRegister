const express = require('express');
const router = express.Router();

const auth = require("../middleware/auth");

const projectCtrl = require('../controllers/project');

// Attach controllers to express routes
router.get("/", auth, projectCtrl.getAllProjectsOfOneUser);
router.post("/", auth, projectCtrl.createProject);
router.get("/:id", auth, projectCtrl.getOneProject);
router.put("/chapter/:id", auth, projectCtrl.modifyProjectChapter);
router.put("/:id", auth, projectCtrl.modifyProject);
router.delete("/:id", auth, projectCtrl.deleteProject);
// router.post("/:id/like", auth, projectCtrl.likeSauce);

module.exports = router;