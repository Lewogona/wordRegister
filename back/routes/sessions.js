const express = require('express');
const router = express.Router();

const auth = require("../middleware/auth");

const sessionCtrl = require('../controllers/session');

// Attach controllers to express routes
// router.get("/", auth, sessionCtrl.getAllSessions);
router.post("/", auth, sessionCtrl.createSession);
router.get("/day", auth, sessionCtrl.getAllSessionsPerDate);
router.get("/month", auth, sessionCtrl.getAllSessionsPerMonth);
// router.get("/:id", auth, sessionCtrl.getOneSession);
// router.put("/:id", auth, sessionCtrl.modifySauce);
// router.delete("/:id", auth, sessionCtrl.deleteSauce);
// router.post("/:id/like", auth, sessionCtrl.likeSauce);

module.exports = router;