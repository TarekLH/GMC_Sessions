//Challenge1
/*let sideLength = 5
let sideNbr = 4
let result = sideLength * sideNbr
console.log("La circonference de votre cercle est de:", result)*/

//Challenge2
/*let equalSideLength = 9
let baselength = 7
const a = 2
let result = equalSideLength * a + baselength
console.log("La circonference de votre triangle isoscele est de:", result)*/

//Challenge3
/*let radius = 13
const pi = 3.14
const a = 2
let result = a * pi * radius
console.log("La circonferencce de votre cercle est de:", result)*/

//Challenge4
/*let tab = [10, 10, 15, 12, 10, 14, 11]
let cpt = 0
for (let index = 0; index < tab.length; index++) {
    if (tab[index] == 10) {
        cpt++ 
    }
}
console.log(cpt)*/

//Challenge5
/* console.log(4 > 3) //true
console.log(4 >= 3) //true 
console.log(4 < 3) //false
console.log(4 <= 3) //false
console.log(4 == 4) //true
console.log(4 === 4) //true
console.log(4 != 4) //false
console.log(4 !== 4) //false
console.log(4 != '4') //false
console.log(4 === '4') //false
console.log(4 > 3 && 10 < 12) //true
console.log(4 > 3 && 10 > 12) //false
console.log(4 > 3 || 10 < 12 ) //true
console.log(4 > 3 || 10 > 12) //true
console.log(!(4 > 3)) //false
console.log(!(4 < 3)) //true
console.log(!(false)) //true
console.log(!(4 > 3 && 10 < 12)) //false
console.log(!(4 > 3 && 10 > 12)) //true
console.log(!(4 === '4')) //true */

//Challenge6
/*let age = prompt()
if ( age >= 18 ) {
    console.log("You can drive")
} else {
    console.log("You can't drive, you have to wait", 18 - age, "years")
}*/

//Challenge7
/*var note = prompt()
if (note < 0 || note > 100 ) {
    console.log("you're out of range")
} else {
    if (note >= 90 && note <= 100) {
        console.log("you're rank is A")
    } if (note >= 70 && note <= 89) {
        console.log("you're rank is B")
    } if (note >= 60 && note <= 69) {
        console.log("you're rank is c")
    } if (note >= 50 && note <= 59) {
        console.log("you're rank is d")
    } if (note >= 0 && note <= 49) {
        console.log("you're rank is f")
    }
}*/

//Challenge8
/*let season = {
    Winter : ['Decembre', 'Janvier', 'Fevrier'],
    Spring : ['Mars', 'Avril', 'Mai',],
    Summer : ['Juin', 'Juillet', 'Aout'],
    Automn : ['Septembre', 'Octobre','Novembre'],
}
let mois = prompt()
for (const key in season) {
    if (season[key].indexOf(mois) != -1) {
        console.log("The season is:", key);
    }
}*/

//Challenge9
/*var compagnies = ["facebook", "google", "microsoft", "apple", "amazon", "oracle", "IBM"]
console.log(compagnies)
console.log(compagnies.length)
console.log("first:", compagnies[0])
console.log("middle:", compagnies[3])
console.log("last:",compagnies[compagnies.length - 1])*/

//Challenge10
/*let countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']

let array = []
for (let index = 0; index < countries.length; index++) {
    array[index] = countries[index].length
    //console.log(countries[index], countries[index].length)
}
console.log(countries, array)*/

//Challenge11
/*let countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']
let array = []
for (let index = 0; index < countries.length; index++) {
    array[index] = [countries[index], countries[index].substring(0, 3).toUpperCase(), countries[index].length]
    //console.log(countries[index], countries[index].substring(0, 3).toUpperCase(), countries[index].length)
}
console.log(countries, array)*/

//Challenge12
/*var users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}*/

//   Solution 1
/*let MostSkilled = {
    key : "Alex",
    numSkills: users["Alex"].skills.length
}

for (const key in users) {
    if (users[key].skills.length > MostSkilled["numSkills"]) {
        MostSkilled = {
            key : key,
            numSkills: users[key].skills.length
        }
    }
}

console.log(MostSkilled["key"], users[MostSkilled["key"]]);*/

// Solution 2
// let MostSkilled = users["Alex"]

// for (const key in users) {
//     if (users[key].skills.length > MostSkilled.skills.length ) {
//         MostSkilled = users[key]
//     }
// }

// console.log(MostSkilled);



/*function fullName(firstName, lastName) {
    return firstName + lastName
}
var firstName = prompt()
var lastName = prompt()

console.log(fullName(firstName, lastName))*/


/*function findumois(salary, bonus) {
    if (bonus == true)
        return salary * 10 
    else
        return  salary
}
var salary = 500
var bonus = false
console.log(findumois(salary, bonus))*/




