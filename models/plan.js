const mongoose = require('mongoose')
const planSchema =new mongoose.Schema({
    destination: String,
    startDate: Date ,
    endDate: Date,
    activities: Array
})

module.exports = mongoose.model('plan',planSchema)