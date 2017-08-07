Slingshot.fileRestrictions("myFileUploads", {
  allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
  maxSize: 10 * 1024 * 1024 // 10 MB (use null for unlimited).
});

Slingshot.createDirective("myFileUploads", Slingshot.S3Storage, {
  bucket: "fox-gifmaker-test",
  acl: "public-read",
  AWSAccessKeyId: // source in meteor settings
  AWSSecretAccessKey: // source in meteor settings
  region: "us-west-1",
  authorize: function () {
    return true;
  },
  key: function (file) {
    return file.name;
  }
});
