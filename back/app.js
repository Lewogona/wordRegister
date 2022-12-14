const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require('dotenv').config()

const userRoutes = require("./routes/users");
const projectRoutes = require("./routes/projects");
const sessionRoutes = require("./routes/sessions");

const app = express();

mongoose.connect(process.env.MONGODB_URI,
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    // console.log('- API hit ', req.originalUrl)
    next();
});

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use("/users", userRoutes);
app.use("/projects", projectRoutes);
app.use("/sessions", sessionRoutes);

module.exports = app;