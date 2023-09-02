require('dotenv').config();
const mongoose = require('mongoose');
const {app} = require('./app')

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT

mongoose.connect(MONGO_URL)
.then(() => {
    app.listen(PORT, () => {
        console.log(`app is listening on port ${PORT}`)
    });
    
})
.catch((error) => {
    console.log(error)
});