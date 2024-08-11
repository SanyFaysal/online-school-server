require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors')

const userRoutes = require('./app/modules/user/user.routes.js')
const instructorRoutes = require('./app/modules/instructor/instructor.route.js')


app.use(express.json())
app.use(cors())



app.get('/', (req, res) => {
    res.send('Success')
})


app.use('/api/v1/user', userRoutes)
app.use('/api/v1/instructor', instructorRoutes)
module.exports = app; 