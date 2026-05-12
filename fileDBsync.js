// מודול מערכת שמאפשר גישה לקבצים/תיקיות
// built-in module, core module
const fs = require('node:fs');

// CRUD

// Create
exports.addUser = (username, password) => {
    try {
        // append - הוספה לסוף הקובץ
        fs.appendFileSync('users.txt', `${username} ${password}\r\n`);

        // write - דורס את תוכן הקובץ
        // fs.writeFileSync('users.txt', `${username} ${password}\r\n`);
    } catch (error) {
        console.log(error.message);
    }
};

// Read
exports.getAllUsers = () => {
    // try-catch:תמיד נעטוף פעולות שניגשות לקובץ ב
    try {
        const content = fs.readFileSync('users.txt', 'utf8');
        const lines = content.split('\r\n').filter(line => line !== '');
        console.log(lines);
    } catch (error) {
        console.log(error.message);
    }
};

// Update

// Delete