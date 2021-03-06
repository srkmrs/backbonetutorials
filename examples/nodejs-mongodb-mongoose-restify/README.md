# Simple example - Node.js, Restify, MongoDb and Mongoose

There are basically two big parts to this demo - two servers. The first server, httpServer, serves up static html/js/css to the 
browser and the second, mongodbServer, is purely for saving and retrieving data from the mongodb.  

For the sake of simplicity (kidding), I've put both parts in this file which makes it extremely long and challenging to maintain but it does the job. 

In the future, I'd probably refactor this file into two distinct modules: 
one to deal with static file requests and the other to persist data to mongodb.

This is especially important when you go deploy it to hosting platform. For instance, I'm
planning on deploying this to Nodjitsu and I know that apps on their platform can only listen externally on one port (80) so
I believe I might need to create two apps: http and mongodb. Or, perhaps, the http app could use an internal port for the mongodb 
requests then I'd only need one app. 

## HTTP SERVER

If you want to see the client side of the equation, you need also 
need to serve up the index.html to your browser

In my case, I started up the free version MAMP ( ) and configured Apache to point to:
file:///Users/bflowers/Projects/Code/Javascript/boilerplates/mongodb/index.html

so that when I open my browser to: 

http://localhost:8888/ 

I should see the index.html which presents MainView and its MessagesCollection will then go out and talk to:  

http://localhost:8080/messages via REST 

This is complicated part - some call it easy - not me ;-D - it took me awhile to realize that I need to host my app and have it talk
to the server which then talks to the database but this is the point of building restful apps. If I wanted another resource, I could
go talk to a different server from my app. 


I would also like to give credit to:
http://thecodinghumanist.com/blog/archives/2011/5/6/serving-static-files-from-node-js

## MONGODB

In order to setup my mongodb database, I've taken the following steps:

1. I have two terminal windows open.

2. In the the first one, I've started mongoDB: 
$ mongod

3. In the second, I've started the mongo shell
$ mongo

In the mongo shell, I've created a database called "nationalpark"

> use nationalpark <-- will automatically create and use this new database 

then, I've added a collection called "messages" and inserted a message

var message = { message: "onward, upward", hiker: "rosella"}; 

> db.messages.insert(message); <--- once you use nationalpark, db becomes the link to it

Just to prove you've added a message, you can display all the messages 

> db.messages.find();

Now, I have a database with a collection of messages containing at least one message.

## DATABASE

 If you opened your browser to http://localhost:8080/messages, you might see this cryptic message:
{"message":"Invalid sort() argument. Must be a string or object."}

It means there are no messages in your database but we'll get rid of that message by manually inserting a message.

Once you've inserted a mesage, you can open your brower to: http://localhost:8080/messages
and it should spit out the message   


## CONFIG

if you plan to work with a public github, it is a good idea to protect your production mongodb connection uri 
and put it in a config file which you include in .gitignore so that it doesn't get committed  

var config = require('./config'); // Local congig file to hide creds
db = mongoose.connect(config.mongoose_auth),
Schema = mongoose.Schema;  
