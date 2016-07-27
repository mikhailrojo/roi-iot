var express = require('express');
var router = express.Router();
var http = require("http");

/* GET home page. */
router.get('/', function(req, response, next) {

    http.get("http://api.thingspeak.com/channels/140011/feed.json?key=XJS8KOJ28JDA4GK6", (res)=>{
        var body = [];
        res.on("data", function(data){
            body.push(data);
        });
        res.on("end", function(){
            body = Buffer.concat(body).toString();
            body = JSON.parse(body);
            var showArray = {};
            var letsSort = body.feeds;
            var newArray = [];

            for(var i = 0; i < letsSort.length; i++){
                var newDate = letsSort[i].created_at;
                var passed = new Date(newDate);
                passed.setTime(passed.getTime()+(3*60*60*1000));
                var localeDate = passed.toDateString(); // 2016-07-26
                var year = passed.getFullYear();
                var month = passed.getMonth();
                var day = passed.getDate();



                var dateInString = passed.toLocaleTimeString() + " " + day + " " + russianMonth(month) + " " + year ;
                newArray[i] = {
                    time: passed.toLocaleTimeString(),
                    date:  day + " " + russianMonth(month) + " " + year,
                    luminosity: parseInt(letsSort[i].field1/1023*100)
                }
            }
            showArray.mi = newArray.splice(-48).reverse();
            response.render('index', showArray);

        })

    }).on("error", (e)=>{
        console.log(`out error is ${e.message}`);
    });
});
module.exports = router;

function russianMonth(d){
    var months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
    return months[parseInt(d)];
}
