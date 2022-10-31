const Session = require("../models/Session");

// Create a new session
exports.createSession = (req, res, next) => {
  // Retrieve data from the request and create a new instance of session
  const session = new Session({ 
    ...req.body,
    date: new Date(),
  });
  // Save the new session into database
  session.save()
    .then(() => res.status(201).json({ message: "Session enregistré !" }))
    .catch(error => res.status(400).json({ error }))
};

// Get all projects in database
exports.getAllSessionsPerDate = (req, res, next) => {
  const todayStart = new Date()
  todayStart.setHours(0,0,0,0)
  const todayEnd = new Date()
  todayEnd.setHours(23,59,59,999)
  Session.find({
    userId: req.auth.userId,
    date: {
      $gte: todayStart,
      $lt: todayEnd
    }
  })
    .then(session => res.status(200).json(session))
    .catch(error => res.status(400).json({error}));
};

exports.getAllSessionsPerMonth = (req, res, next) => {
  Session.find({
    userId: req.auth.userId,
    date: {
      $gte: new Date("2022-11-01T00:00:00.000Z"),
      $lt: new Date("2022-12-01T00:00:00.000Z")
    }
  })
    .then(session => res.status(200).json(session))
    .catch(error => res.status(400).json({error}));
};