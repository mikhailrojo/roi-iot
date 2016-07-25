var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var totalInfo = new Schema({
    firstPrinter: Number,
    secondPrinter: Number,
    total: Number,
    date: {
        type: Date, default: Date.now
    },
    luminosity: Number
})

module.exports = mongoose.model('Info', totalInfo);
