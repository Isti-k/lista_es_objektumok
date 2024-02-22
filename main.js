// lista - azonos típusú változók tárolására
let lista=["első","második"]

console.log(lista[0])

lista[0]="Átírt első"

console.log(lista)

lista[10]="tizenegyedik"

console.log(lista)

// litához elemadás - utolsó hely után teszi az elemet

lista.push("követező elem")
console.log(lista)

// utolsó elem eltávolítása
lista.pop()
console.log(lista)


const szam=5;
//szam=12; konstanst értéke nem változtatható meg.


const lista2=[12,13,14,15]
console.log(lista2)
//lista2=[23,24,25] konstans változónak akartam új értéket adni
lista2[0]=2222222;
console.log(lista2)
lista2.push(33333)
console.log(lista2)

/* A konstans egyszerű adatszerkezet esetén const-val való deklarácoó folyamán a konstanst értékét nem lehet megváltoztatni. 
Egyszerű adatszerkezet: szöveg , szam, logikai. 
Összetett adatszerkezet esetén const használatával az összetett adatszekezet memória címe lesz állandó az nem változtatható meg, de az egyes értékek megváltoztatható. 
Összetett adatszerkezet: lista, objekrum konstans listához pl. új elem adni, törölni, átírni a listákat mindig const-ként definiáljuk*/

/* Objektumok */
/* étlapos feladat
ételnév lista -> szöveges típus
ételár lista -> szám típusú
ezt egy egységként tudnám kezelni*/

/* Az objektum az egy olyan összetett adatszerkezet, amely kulcsértékpárokból áll egységlént tudunk
kezelni összetartozó adattagokat többnyire const-ként dekraráljuk, mert neki is memória területi címe lesz fix és az egyes értékeit úgy tudjuk elérni,
hogy pl: console.log(etel1.nev) */

let etel1 = {
    nev: "Brassói aprópecsenye",
    ar: 2990
}

console.log(etel1.nev)
console.log(etel1.ar)

etel1.mennyiseg = 3 // új kulcs adok az objektumhoz
console.log(etel1)

const etel2= {
    nev:"BBQ pizza",
    ar: 4200,
    meret: 45,
    mennyiseg: 2
}

//egy kutya adatai
/* egy objektum tulajdonképpen olyan mint az adatbázisnak egy rakordja
kulcsok az adatbázis egy mezője */

const kutyaLista=[
    {
        nev:"Dézi",
        fajta:"pitbull",
        szin:"fekete",
        magassag:34,
        szul_datum:2020,
        szul_hely:"Budapest"
    },
    {
        nev:"Fruzsina",
        fajta:"keverék",
        szin:"tarka",
        magassag:50,
        szul_datum:2021,
        szul_hely:"Budapest"
    }
]
 // hogy érem el a Dézi színét?
 console.log(kutyaLista[0].szin)

 //hf: tetszőleges lista objektum legalább 2 adathalmaz



