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
                    var dateInString = passed.toLocaleTimeString() + " " + passed.toLocaleDateString();
                    newArray[i] = {
                        date: dateInString,
                        luminosity: letsSort[i].luminosity
                    }
                }
                showArray.mi = newArray.splice(-48).reverse();
                response.render('index', showArray);
            }
        })
});
module.exports = router;
