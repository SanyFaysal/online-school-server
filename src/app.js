require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors')

const userRoutes = require('./app/modules/user/user.routes.js')


app.use(express.json())
app.use(cors())



app.get('/', (req, res) => {
    res.send('Success')
})


app.use('/api/v1/user', userRoutes)
module.exports = app; 