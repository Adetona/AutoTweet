
	var Twit = require('twit')

	var fs = require('fs'),
		path = require('path'),
		Twit = require('twit'),

		config = require(path.join(__dirname, 'config.js'));
		


	var bot = new Twit(config);



	/*

	The tweet to be posted.

	You can replace this with your own tweet.  

	*/

	var tweet = ['12:22 AM']; 


	var post = function () {

	T.post('statuses/update', { status: bot }, function(err, data, response) {

	console.log('successfully updated'); 	    

	});

	}




	var ontime = require('ontime');

	ontime({

	/*

	Schedule the time to post the tweet. 

	The current time is currently 12:22 AM. 

	*/ 
		
		cycle: '12:22:00'
	}, function (ot) {
	  
	post();

	ot.done()
		return
	})

