import gifshot from 'gifshot';
import { Session } from 'meteor/session';

// SET / RESET VARIABLES ON TEMPLATE LOAD AND DESTROY
Template.body.onRendered(function () {
  Session.set('imgArr', []);
  Session.set('gif', '');
});

Template.body.onDestroyed(function () {
  Session.set('imgArr', []);
  Session.set('gif', '');
});

Template.body.events({
  'click #submit' : function(e){
    e.preventDefault();
    let arr = Session.get('imgArr');
    if(arr.length === 5){
      gifshot.createGIF({
        'images': Session.get('imgArr'),
        'internval':3
      },function(obj) {
        console.log('obj:', obj.error);
        if(!obj.error) {
          // convert data URI to blod so it can be uploaded to s3 via slingshot
          let image = obj.image;
          let blob = Meteor.dataURItoBlob(image);
          blob.name = 'gif' + new Date();
          blob.lastModifiedDate = new Date();
          
          // call method to upload to S3
          let b = true;
          Meteor.uploadToS3(blob, b);

          // temporary hack to append image to DOM
          animatedImage = document.createElement('img');
          animatedImage.src = image;
          console.log('image: ', image);
          document.body.appendChild(animatedImage);
        }
      });
    } else {
     throw new Meteor.Error(error)
    }
  },

 'dragover #dropDiv' : function(e, t) {
    e.preventDefault();
    $(e.currentTarget).addClass('dragover');
  },

  'dragleave #dropDiv' : function(e, t) {
    $(e.currentTarget).removeClass('dragover');
  },

  'drop #dropDiv' : function(e, t) {
    e.preventDefault();
    e.originalEvent.dataTransfer.getData("text");
    let file = e.originalEvent.dataTransfer.files[0];
    let b = false;
    Meteor.uploadToS3(file, b);
  },

  'change #interval' : function(e, t) {
    e.preventDefault();
    console.log('interval!', e,t);
  }
});

Template.gifmaker.events({
  'change input': function(e) {
    _.each(e.target.files, function(file) {
      console.log('initial file', file);
      let b = false;
      Meteor.uploadToS3(file, b);
    });
  }
});



