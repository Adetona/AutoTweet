# AutoTweet

AutoTweet is a Twitter bot that helps with tweeting at a scheduled time.  




<h3> Quick start </h3>

<b> Tools needed to set up AutoTweet: </b> 

<li> 
<a href="https://nodejs.org/en/">Node.js</a>  installed on your machine.

A registered Twitter account. 

A Twitter App - Create one for your Twitter account <a href="https://apps.twitter.com/app/new"> here </a>

</li> 

<italic> Note: The following processes below assumes you have set up all the tools above</italic>    
   
<b> Setting up on your local machine. </b> 

<ul> 

<li> Open your Terminal, <code> cd </code> to the directory where you want to install the script.</li>

<li> <code> git clone https://github.com/Adetona/AutoTweet.git </code> to download the script to your machine.</li> 

<li>Open the <code> config.js </code> file. You will find the following in the file: 

<code> 
consumer_key:         '65EmpGTOKXXkjHR9tI5Jiio01',
consumer_secret:      'FZ0lYU5dUJA4YTuqPtZ4q5NfXLbXFuz4E9xgA49ij6Tc8YAcol',
access_token:         '2963547257-9N7VF9O9gLjQQTtJhRVjk8chJQivg0zTMV2dy9E',
access_token_secret:  'QMnRuSd0zbh3HbZ09wcVUohOEAol5W6HrABPyNF0gf0fY'
</code>  
</li> 

<li> Replace the KEYS with your own value. </li> 


<h2> Scheduling your tweet. </h2> 

<li> Open the <code> server.js </code> file. </li> 

<li> Set the value of <code> var tweet </code> to the tweet you want to schedule. 

<code> 	var tweet = ['12:22 AM']; </code> 

</li> 


<li> Set the time to post the tweet. 

Set the value of <code>cycle</code> to the time you want to post the tweet. The current time in the script is 12:22 AM.

Learn more about setting the right time <a href="https://www.npmjs.com/package/ontime"> here </a>  
		
<code> cycle: '12:22:00' </code> 

</li> 

<b> Test the script. </b>

<li> After the configuration you should  <code> cd </code>  to the directory where the script is located then type <code> node server.js <code> in your terminal. </li>


If your configuration is complete a tweet will be posted on your account at the scheduled time.





</ul> 

  
