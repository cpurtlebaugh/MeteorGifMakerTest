// import gifshot from 'gifshot';

Meteor.saveFile = function(blob, name, path, type, callback) {
    console.log('blob: ', blob);
    var fileReader = new FileReader(),
        method, encoding = 'binary', type = type || 'binary';
    switch (type) {
        case 'image/png':
        case 'image/jpeg':
        case 'binary':
            method = 'readAsBinaryString';
            encoding = 'binary';
            break;
        default:
            method = 'readAsBinaryString';
            encoding = 'binary';
            break;
    }
    fileReader.onload = function(file) {
      // do something here
    }
    fileReader[method](blob);


}
