// פונקציה שמחזירה את הערך שקיבלה אחרי מספר שניות

// 1. נסיון ראשון - לא עבד
// return טיימר לא החזיר כלום - אין בו
// רק הפונקציה פנימית החזירה ערך ולא עשתה איתו כלום
const timer1 = (data, seconds) => {
    setTimeout(() => {
        return data;
    }, 1000 * seconds);
};

// 2. פונקציה אסינכרונית שמחזירה ערך לאחר זמן
//    - מחזירים פרומיס, מחלקה שמורה שמבטיחה להחזיר ערך מתישהו
//    - הפרומיס מקבל 2 פונקציות להחזרת תשובה במקום ריטרן
//      resolve - הפונקציה הראשונה מחזירה ערך במקרה של הצלחה
//      reject  - בצורה אסינכרונית throw מחזירה שגיאה, כמו
const timer2 = (data, seconds) => {
    return new Promise((resolve1, reject1) => {
        // resolve1 - return for success
        // reject1  - return for failed (throw)

        if (seconds < 0) {
            reject1('seconds cannot be negative'); // throw 'seconds cannot be negative'
        }
        else {
            setTimeout(() => {
                resolve1(data); // return data
            }, 1000 * seconds);
        }
    });
};

// כדי להפעיל פונקציה שמחזירה פרומיס
// נכתוב אחריה
// then - resolve לכאן יחזור הערך במקרה של הצלחה עם
// catch - reject לכאן תחזור השגיאה במקרה של כשלון עם
timer2('AAA', -2)
    .then(ans => console.log('answer is', ans))   // resolve
    .catch(e => console.log('my error', e));      // reject

timer2('BBB', 2)
    .then(ans => console.log('answer is', ans)) // resolve
    .catch(e => console.log('my error', e));    // reject

timer2('CCC', 5)
    .then(ans => console.log('answer is', ans)) // resolve
    .catch(e => console.log('my error', e));    // reject

timer2('DDD', 0)
    .then(ans => console.log('answer is', ans)) // resolve
    .catch(e => console.log('my error', e));      // reject