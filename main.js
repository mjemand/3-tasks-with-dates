
/* 1.
Írj egy függvényt, aminek a visszatérési értéke az adott év 01.01. óta eltelt másodperceinek száma! */

function getMilliseconds () {
    const now = Date.now();
    const jan1 = Date.UTC(2020, 0, 1, 0, 0, 0);
    const diff = now - jan1
    return `milliseconds: ${diff}, seconds: ${diff / 1000}, days: ${diff / 1000 / 60 / 60 / 24}, months: ${diff / 1000 / 60 / 60 / 24 / 30}`;
}

console.log(getMilliseconds());

/* 2.
Írj egy függvényt, aminek a visszatérési értéke az adott évben eddig eltelt munkanapok (hétfő-péntek) száma!
*/

function getWorkDays () {
    const now = Date.now();
    const jan1 = Date.UTC(2020, 0, 1, 0, 0, 0);
    const diff = now - jan1
    const weeks = diff / 1000 / 60 / 60 / 24 / 7;
    const workDays = weeks * 5;
    return Math.trunc(workDays);
}

console.log(getWorkDays());

/* innentől pryann megoldása ugyanerre, ill. a 3.-ra
https://github.com/Training360/js-halado-consultations/blob/main/2020-12-01/date.js
*/

function countOfWorkingDays(from, to) {
    let counter = 0;
    for (let day = from; day <= to; day.setDate(day.getDate() + 1)) {
        if (day.getDay() > 0 && day.getDay() < 6) {
            counter += 1;
        }
    }
    return counter;
}

const from = new Date(2020, 0, 1);
const to = new Date();
console.log(countOfWorkingDays(from, to));

/*
3.
Írj egy függvényt, ami paraméterként egy Date objektumot kap,
a visszatérési értéke pedig egy objektum két tulajdonsággal,
ami a következő formátumban tartalmazza a paraméterként kapott dátumot:
short: 2020. jan. 11. 14:20 (tehát évszám, a hónap neve röviden magyarul, kisbetűkkel a nap száma,
    majd az idő a másodperc nélkül)
long: 2020. január 11. 14:20:10 (tehát évszám, a hónap neve magyarul, a nap száma, majd az idő)

Én így kezdtem el:
function shortAndLong (date) {
    const date = {
        short: 
    }
}
*/

function customDateFormats(date) {
    const shortOption = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    const longOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }
    return {
        short: date.toLocaleDateString('hu-HU', shortOption),
        long: date.toLocaleDateString('hu-HU', longOptions)
    }
}

console.log(customDateFormats(new Date()));
console.log((new Date()));