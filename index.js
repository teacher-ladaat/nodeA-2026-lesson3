const { getAllUsers, addUser } = require('./fileDBasync');

const x = getAllUsers();
console.log(x);

// addUser('תהילה', '1111');
// addUser('פנינה', '1234');
const [, , name, pass] = process.argv;
addUser(name, pass);

console.log('='.repeat(10));
const y = getAllUsers();
console.log(y);

console.log('start');