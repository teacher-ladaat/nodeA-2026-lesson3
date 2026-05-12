// מודול מערכת שמאפשר גישה לקבצים/תיקיות
// built-in module, core module
const fs = require('node:fs');

// CRUD

// Create
exports.addUser = (username, password) => {

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