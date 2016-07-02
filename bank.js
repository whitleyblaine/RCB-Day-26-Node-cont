// REMEMBER fs.appendFile is a thing... for the deposit ... hint hint

var fs = require('fs');

var transaction = process.argv[2];
// total withdraw deposit lotto

var amount = process.argv[3];

var vault;
var vaultArr;
var vaultTotal;

fs.readFile ('bank.txt', 'utf8', function(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    var vault = data;
    var vaultArr = data.split(', ');
  };
});

// for (var i=0; i < vaultArr.length; i++) {
//   vaultTotal = vaultTotal + vaultArr[i].parseFloat;
// };

// console.log(vaultTotal);



// if (transaction == 'deposit') {
//   console.log('deposit: ' + amount)
// } else if (transaction == 'total') {
//   console.log('total is');
// } else if (transaction == 'withdraw') {
//   console.log('withdraw!' + amount);
// } else if (transaction == 'lotto') {

// }