var arg1 = process.argv[2];
var arg2 = process.argv[3];

if (arg1 != null && arg2 != null) {
  if (arg1 % 7 === 0 && arg2 % 7 === 0) {
    console.log('true');
  } else {
    console.log('false');
  };
} else {
  console.log('Please enter two arguments!');
}