const Project = require("../models/Project");

// Create a new project
exports.createProject = (req, res, next) => {
    // Retrieve data from the request and create a new instance of project
    const project = new Project({ ...req.body });
    // Save the new project into database
    project.save()
        .then(() => res.status(201).json({ message: "Projet enregistré !" }))
        .catch(error => res.status(400).json({ error }))
};