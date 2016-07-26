var express = require('express');
var router = express.Router();
var http = require("https");
var mongoose = require('mongoose');
var Info = require('../mongoose/index');

/* GET home page. */
router.get('/', function(req, response, next) {

        Info.find((err,data)=>{
            if(err)console.log(err);
            else {
                var showArray = {};
                var letsSort = data;
                var newArray = [];

                for(var i = 0; i < letsSort.length; i++){
                    var newDate = letsSort[i].date;
                    var passed = new Date(newDate);
                    passed.setTime(passed.getTime() + (2*60*60*1000));
                    var localeDate = passed.toDateString(); // 2016-07-26
                    var year = passed.getFullYear();
                    var month = passed.getMonth();
                    var day = passed.getDate();



                    var dateInString = passed.toLocaleTimeString() + " " + day + " " + russianMonth(month) + " " + year ;
                    newArray[i] = {
                        time: passed.toLocaleTimeString(),
                        date:  day + " " + russianMonth(month) + " " + year,
                        luminosity: parseInt(letsSort[i].luminosity/1023*100)
                    }
                }
                showArray.mi = newArray.splice(-48).reverse();
                response.render('index', showArray);
            }
        })
});
module.exports = router;

function russianMonth(d){
    var months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
    return months[parseInt(d)];
}
