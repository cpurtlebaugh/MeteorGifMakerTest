// set upload to s3 fx() on meteor method for re-usability
Meteor.uploadToS3 = (file, boolean) =>{
  console.log('uploading S3')
  let uploader = new Slingshot.Upload("myFileUploads");
  uploader.send(file, function (error, url) {
    if(error){
      throw new Meteor.Error(error)
      console.log('error', error);
    } else {
      let arr = Session.get('imgArr');
      arr.push(url);

      // quick check to see if this method call 
      // is for the final gif image or not
      boolean ? Session.set('gif', url) : Session.set('imgArr', arr);

      console.log('Image Arr', Session.get('imgArr'));
      console.log('Gif', Session.get('gif'));
    }
  });
};

// helper function to convert base64 DATA uri to blob
Meteor.dataURItoBlob = (dataURI) => {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  const byteString = atob(dataURI.split(',')[1]);
  // separate out the mime component
  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
  // write the bytes of the string to an ArrayBuffer
  const ab = new ArrayBuffer(byteString.length);
  // create a view into the buffer
  const ia = new Uint8Array(ab);
  // set the bytes of the buffer to the correct values
  for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
  }
  // write the ArrayBuffer to a blob, and you're done
  const blob = new Blob([ab], {type: mimeString});
  return blob;

};

// intention was to have a meteor fx() to 
//download from the url directly from s3
// Meteor.downloadImage = (url) => {
// }
