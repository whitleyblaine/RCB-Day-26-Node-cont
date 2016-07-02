var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(error, data) {
  if (error) {
    console.log(error);
  } else {
    var splitData = data.split(', ');
    for (var i=0; i < splitData.length; i++) {
      console.log(splitData[i]);
    };
  };
});