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
                //var resultArray = data.pop();
                showArray.mi = data.splice(-5).reverse();

                console.log(showArray);
                response.render('index', showArray);




                //var passed = new Date(resultArray.date);
                //var dateInString = passed.toLocaleTimeString() + " " + passed.toLocaleDateString();
                // response.render('index', {number1:  resultArray.firstPrinter,
                //                           number2: resultArray.secondPrinter,
                //                           sum: resultArray.total,
                //                           dateInString: dateInString});


            }
        })
});

module.exports = router;
