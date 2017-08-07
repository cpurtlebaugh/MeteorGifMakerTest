# Gifmaker Test
A predominantly client-side based gif-maker project utilizing slingshot to load iamges to S3 bucket vs utilizing meteor's file system. 

This project is still in-flight.

The primary goal was to mimick a more "real-world" setup. In production, file stores should happen in the cloud, not on the server's file system or DB. That takes up too many resources.

I apologize for taking this project outside of a normal Meteor MVC setup if that's what you testing me on. I opted not to utilize Meteor's client-side mino mongo cache and did not make use of websockets to publich data from the DB. Despite not completing, I hope you understand my underlying decision-making.

With more time, and in the real-world, it would make sense to store the return url's in the DB with a reference to the user's ID. But, for the scope of this test and due to lack of time, I ommitted this step.

# Done
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
Setup the ability for a user to download Gif via the S3 url stored in the Gif Session Variable. 

[]
Grab the milliseconds input, convert into appropriate metric and pass into gifshot gif create method.

[]
Once functionality is established, refactor code and move it into the actual gifmaker package.

[]
Setup access key + secret into Meteor.settings to pass into server-side code without exposing.

[]
Add basic bootstrap / css styling.


# Dependency Docs
[Meteor Slingshot](https://github.com/CulturalMe/meteor-slingshot)
[Gifshot](https://github.com/yahoo/gifshot)

# More Resources
[AWS S3](http://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-example-photo-album.html) 
