var Twit = require('twit')

var fs = require('fs'),
    path = require('path'),
    Twit = require('twit'),

    config = require(path.join(__dirname, 'config.js'));

var T = new Twit(config);



var bot = ['2:50 AM']; 

var bot = bot[Math.floor(Math.random() * bot.length)];
var post = function () {

T.post('statuses/update', { status: bot }, function(err, data, response) {

console.log('success'); 	    

});

}

//post(); 


var ontime = require('ontime')

ontime({
    cycle: '2:50:00'
}, function (ot) {
    // do your job here

post();
console.log('Hi'); 
ot.done()
    return
})


//setInterval(post, 10000);

/*setInterval(function() {
T.post('statuses/update', { status: bot }, function(err, data, response) {

console.log('success'); 	    

});

 }*/ 


 

/*setInterval(
T.post('statuses/update', { status: '....' }, function(err, data, response) {

	console.log(data); 
});

}
  //post_tweet (),  
  10000
);*/ 