# AutoTweet

AutoTweet is a Twitter bot that helps with tweeting at a scheduled time.  




<h1> Quick start </h1>

<p><h3> Tools needed to set up AutoTweet: </h3> </p>


<p><li> <a href="https://nodejs.org/en/">Node.js</a>  installed on your machine. </li></p>

<p><li> A registered Twitter account. </li> </p>

<p><li> A Twitter App - Create one for your Twitter account <a href="https://apps.twitter.com/app/new"> here </a> </li></p> 


<p><i> Note: The following processes below assumes you have set up all the tools above</i> </p>   
   
<p><h3> Setting up on your local machine. </h3> </p> 



<p> <li> Open your Terminal, <code> cd </code> to the directory where you want to install the script.</li> </p>

<p><li> <code> git clone https://github.com/Adetona/AutoTweet.git </code> to download the script to your machine Or simply run <code>npm install autotweet</code> to install via npm </li> </p>

<p> <li>Open  <code> config.js </code> file. You will find the following in the file: </p> 

 <code> consumer_key:         '',</br> </code>

<code> consumer_secret:     '', </br> </code>

<code> access_token:         '', </br> </code>

<code> access_token_secret:  '' </code> 

 


Change the hash values to those provided to you by  the Twitter app. </li> 


<h3> Scheduling your tweet. </h3> 

<p> <li> Open the <code> server.js </code> file. </li> </p>

<p><li> Set the value of <code> var tweet </code> to the tweet you want to schedule. </li></p> 

<code> 	var tweet = ['12:22 AM']; </code> 



<p> <li> Set the value of <code>cycle</code> to the time you want to post the tweet. The current time in the script is 12:22 AM.</li></p>

<p>Learn more about setting the right time <a href="https://www.npmjs.com/package/ontime"> here </a>  </p> 
		
<code> cycle: '12:22:00' </code> 



<h3> Test the script. </h3>

<p><li> After the configuration, you should  <code> cd </code>  to the directory where the script is located, then type <code> node server.js </code> in your terminal and run it </li></p>


<p> If your configuration is complete the  tweet will be posted to your account at the scheduled time. </p> 


### Deploying to Heroku 

If you want the script to be running continuosly you have to move it to a server. 

Provided you have an Heroku account and <a href="https://devcenter.heroku.com/articles/heroku-cli">Heroku CLI</a> installed on your machine you can
easily deploy AutoTweet to heroku. 

<p> <li><code>npm install autotweet</code> to download the script. </li> </p>

<p> <li> <code>Heroku create <name of your app></code> to create the name for the app on heroku</li> </p> 


<p> <li> <code>git add .</code> and <code>git commit -m 'initial commit'</code> to stage the file for deploying. </li> </p> 


<p><li> Now you can push the whole project to the heroku by running <code>git push heroku master</code></li> </p>


Now that you've pushed the project to heroku there's one more thing to check. 

Go to your heroku dashboard and click on your app name. You will see some set of tabs, click on `Overview` then go to
configure dynos. You will have two options -- `Web and Worker`. The web part means that the app is a web service but our app is
a bot so turn off the web  and turn `ON` the worker instead. Your bot won't work without completing this process.

The final process must look like this: 

<img src="https://github.com/Adetona/AutoTweet/blob/master/autotweet.png"/>






Congratulations, you did it!



You can get in touch with me via my twitter handle <a href="https://twitter.com/Adetona77"> @adetona77 </a>








   




  
