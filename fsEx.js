var fs = require('fs');

fs.writeFile('movies.txt', 'inception, die hard', function(error) {
  // You need to nest read in write, or it might start read before file is written & return an error. But there is almost always a synchronous version of these methods so it will wait till the file is written. In this case, writeFileSync
  fs.readFile('movies.txt', 'utf8', function(error, data) {
    console.log(data);
  });
});

// will log to console FIRST, cuz node doesn't have to wait for top function to finish. asynchronous
console.log('hello world');

