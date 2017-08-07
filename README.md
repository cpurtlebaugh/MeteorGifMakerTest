# Gifmaker Test
A predominantly client-side based gif-maker project utilizing slingshot to load iamges to S3 bucket vs utilizing meteor's file system. 

This project is still in-flight.

The primary goal was to mimick a more "real-world" setup. In production, file stores should happen in the cloud, not on the server's file system or DB. That takes up too many resources.

So, I'm sorry that I took this project outside of a normal Meteor MVC setup if that's what you were intending to test me on. I didn't utilize Meteor's client-side mino mongo cache nor did I make use of its webscokets / broadcasting pub / subs from the DB via DDP. Despite not completing, I hope you understand the underlying decision-making.

With more time, and in the real-world it would obviously sense to process the uploads on the server and store the return url's in the DB with a reference to the user's ID. But, for the scope of this test and due to lack of time, I ommitted this step.

# Accomplished
[x]
Configure S3 bucket policy and CORS config in AWS.

[x]
Setup re-usable S3 upload fx() on client that stores urls in a Session variable to later pass to gifshot.

[x]
Successfully upload image to S3 bucket from button input.

[x]
Implement HTML5 drag and drop + image uplaod to S3.

[x]
Setup submit button to pass session var array into Gifshot, convert result into blob, upload gif to S3.

[x]
Temporarily display gif in browser via doc append hack.

# To Do
[]
Setup the ability for a user to download Gif via S3 url in Gif Session Variable. 

[]
Grab milliseconds input, convert into appropriate metric and pass into gif create fx().

[]
Once functionality is 100%, refactor to move it into actual gifmaker package with Npm.depends and Npm.require etc.

[]
Setup access key + secret into Meteor.settings to pass into server-side code without exposing.

[]
Add basic bootstrap styling.


# Dependency Docs
[Meteor Slingshot](https://github.com/CulturalMe/meteor-slingshot)
[Gifshot](https://github.com/yahoo/gifshot)

# More Resources
[AWS S3](http://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-example-photo-album.html) 
