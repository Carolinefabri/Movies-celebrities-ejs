require('dotenv/config')
require('./db')
const express = require('express')
const app = express()
const path = require('path')

const publicFolderPath = path.join(__dirname, 'public')
const stylesheetFolderPath = path.join(publicFolderPath, 'stylesheets')

app.use(express.static(publicFolderPath))
app.use('/stylesheets', express.static(stylesheetFolderPath))

require('./config')(app)

const projectName = 'lab-movies-celebrities'
const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase()
app.locals.title = `${capitalized(projectName)}- Generated with Ironlauncher`

const index = require('./routes/index')
app.use('/', index)

const celebRoutes = require('./routes/celebrities.routes')
app.use('/celebrities', celebRoutes)

const moviesRoutes = require('./routes/movies.routes')
app.use('/movies', moviesRoutes)

require('./error-handling')(app)

module.exports = app
