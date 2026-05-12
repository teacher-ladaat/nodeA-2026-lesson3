//#region sync - סינכרוניות
// פעולות שמתבצעות לפי סדר הכתיבה
// תוקע את המערכת שלא תמשיך לפעול
/*
const x = 10;
console.log(x + 10);
let y = x ** 2;

// for (let i = 0; i < 3; i++) {
//     console.log('i is', i);
// }

const d = Date.now();
while (Date.now() - d <= 2000) { }

console.log('A');
console.log('B');
console.log('C');

// i is 0
// i is 1
// i is 2
// 20 A B C
*/
//#endregion

//#region async - אסינכרוניות
// פעולות שיכולות להתבצע בסדר שונה מזה שנכתבו
// לא תוקעות את המערכת
// מתבצעות במקביל
// כמו כמה שליחים שכל אחד מפםבצע פעולה ללא תלות בשליח השני
// יוצאים ביחד לדרך, כל אחד מבצע את הפעולה כשהוא מסיים

// setTimeout - פעם אחת אחרי 2 שניות
setTimeout(() => {
    console.log('A async');
}, 2000); // 2000 = 2s

// setInterval - כל חצי שניה עד שעוצרים אותו
// let count = 0;
// const id = setInterval(() => {
//     console.log('B async');

//     count++;
//     if (count === 5) {
//         clearInterval(id);
//     }
// }, 500); // 500 = 0.5s

setTimeout(() => {
    console.log('start');
}, 0);
console.log('hello');

setTimeout(() => {
    console.log('C async');
}, 1000);

setTimeout(() => {
    console.log('D async');
}, 1000);

console.log('end');

// start, end, C, D, A

//#endregion
