const Project = require("../models/Project");

// Create a new project
exports.createProject = (req, res) => {
  // Retrieve data from the request and create a new instance of project
  const project = new Project({ ...req.body });
  // Save the new project into database
  project.save()
    .then(() => res.status(201).json({ message: "Projet enregistré !" }))
    .catch(error => res.status(400).json({ error }))
};

// Get all projects in database
exports.getAllProjects = (req, res) => {
  Project.find()
    .then(project => res.status(200).json(project))
    .catch(error => res.status(400).json({error}));
};

// Get one project in database with its ID
exports.getOneProject = (req, res) => {
  Project.findOne({ _id: req.params.id })
      .then(project => res.status(200).json(project))
      .catch(error => res.status(404).json({ error }));
};

// Modify the project info
exports.modifyProject = (req, res) => {
  // Find if project exists with the its ID
  Project.findOne({ _id: req.params.id })
    .then((project) => {
      if (!project) {
        return res.status(404).json({ error: "Projet non trouvée !" })
      }
      if (project.userId !== req.auth.userId) {
        return res.status(401).json({ error: "Requête non autorisée !" })
      }

      if (project.chapters.length < req.body.chapter) {
        console.log('je suis ici')
        project.chapters.push(req.body.totalFileWord)
      } else {
        project.chapters[req.body.chapter] = req.body.totalFileWord;
      }
      Project.updateOne({ _id: req.params.id }, { chapters: project.chapters })
        .then(() => res.status(200).json({ message: "Projet modifié !" }))
        .catch(error => res.status(403).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));   
}