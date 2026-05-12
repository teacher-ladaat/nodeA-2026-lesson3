const fs = require('node:fs');

const myDB = 'users.txt';
exports.getAllUsers = () => {
    // פונקציה שמתבצעת בצורה אסינכרונית
    // ללא המתנה - במקביל
    fs.readFile(myDB, 'utf8', (err1, data1) => {
        // זו פונקציית קולבק שמופעלת רק כאשר סיימנו לקרוא את הקובץ
        // callback - תקרא לי בחזור

        // err1  - שגיאה במידה והיתה
        // data1 - נתוני הקובץ אם לא היתה שגיאה

        if (err1) {
            console.log(err1.message);
        } else {
            const lines = data1.split('\r\n').filter(line => line !== '');
            console.log(lines);
        }
    });
};