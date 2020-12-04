const utcDate1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));
const utcDate2 = Date.UTC(2020, 0, 1, 0, 0, 0);

console.log(utcDate1.toUTCString());
// expected output: Fri, 02 Feb 1996 03:04:05 GMT

console.log(Date.now() / 1000 / 60 / 60 / 24 / 365);
// expected output: Sun, 31 Dec 1899 00:00:00 GMT   - utcDate2 / 1000 / 60 / 60 / 24 / 365

/* 1.
Írj egy függvényt, aminek a visszatérési értéke az adott év 01.01. óta eltelt másodperceinek száma! */

function getMilliseconds () {
    const now = Date.now();
    const jan1 = Date.UTC(2020, 0, 1, 0, 0, 0);
    const diff = now - jan1
    return `millisec ${diff} days ${diff / 1000 / 60 / 60 / 24} months ${diff / 1000 / 60 / 60 / 24 / 30}`;
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

/* 3.
Írj egy függvényt, ami paraméterként egy Date objektumot kap,
a visszatérési értéke pedig egy objektum két tulajdonsággal,
ami a következő formátumban tartalmazza a paraméterként kapott dátumot:
short: 2020. jan. 11. 14:20 (tehát évszám, a hónap neve röviden magyarul, kisbetűkkel a nap száma,
    majd az idő a másodperc nélkül)
long: 2020. január 11. 14:20:10 (tehát évszám, a hónap neve magyarul, a nap száma, majd az idő)
*/

function shortAndLong (date) {
    const date = {
        short: 
    }
}