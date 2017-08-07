# GIMAKER TEST
A predominantly client-side based gif-maker project utilizing slingshot to load iamges to S3 bucket vs using meteor's file system. Still in-flight.

# ACCOMPLISHED
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

# TO DO
[]
Setup the ability for a user to download Gif via S3 url in Gif Session Variable. 

[]
Grab milliseconds input, convert into appropriate metric and pass into gif create fx().

[]
Once functionality is 100%, refactor to move it into actual gifmaker package with Npm.depends and Npm.require etc.

[]
Setup access key + secret into Meteor.settings to pass into server-side code without exposing.


# Library Docs
[Meteor Slingshot](https://github.com/CulturalMe/meteor-slingshot)
[Gifshot](https://github.com/yahoo/gifshot)
