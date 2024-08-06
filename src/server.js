require('dotenv').config();
const mongoose = require('mongoose')
const app = require('./app.js');

const db_url = process.env.DB_URL
const port = process.env.PORT;


async function run() {
    try {
        await mongoose.connect(db_url);
        console.log('Server is connected')

        app.listen(port, (req, res) => {
            console.log('Application is listening on port: ', port)
        })

    } catch (error) {
        console.log(error)
    }
}
run()