//challenge13
/*
let age = prompt("entrez age")
let BMI = (weight) / (height**(2))
if (age >= 20) {
    let weight = prompt("entrez poids")
    let height = prompt("entrez taille")
    if (BMI < 18.8 ) {
        console.log("Underweight")
    } else if (BMI > 18.5 && BMI <= 24.9) {
        console.log("Normal weight") 
    } else if (BMI >= 25 && BMI <= 29.9) {
            console.log("Overweight")
        } else {
            console.log("Obese")
        }
} else{
    console.log("vous etes trop jeune")
} */

//challenge14=15
//console.log("$" + (+(prompt("enterez montant"))).toFixed(2))

//challenge16
/*let num = prompt()
let tab = []
for (let index = 0; index <= 10; index++) {
    tab[index] = index * num
    console.log( index, 'x', +num, '=', tab[index])
}*/

//challenge17
/*let val = prompt()
let check = false
let arr = [10, "10", 14, "hello", 15, 16, 20]
if (arr.indexOf(+(val)) == -1 && arr.indexOf(val) == -1) {
    console.log(val, "is not in the arr")
} else {
    console.log(val, "is in the arr")
}
Version 2
let arr =[4, 6, 9, "Hello", 8, "a", "0", "b"]
let val = prompt("Give me the value you want to search.")

if (arr.indexOf(+(val)) != -1 || arr.indexOf(val) != -1 ) {
    console.log(val, "Is in the array.");
} else {
    console.log(val, "is not in the array.");
}
*/

//challenge18
/*let mot = prompt("Entrez votre mot")
console.log(mot.substring(1, mot.length-1))*/


//challenge20 ( a corriger !)
/*let nbr = prompt()
let somme
for (let index = 0; index < nbr.length   ; index++) {
    for (let i = 1; i < nbr.length ; i++) {
        somme = ( +(nbr[index]) + (+(nbr[i])) )
    }
    //tab[index] = tab[index] + tab[index + 1] erreur que jai fait plusierus fois !
}
console.log(somme)*/
/* Correction challenge 20
let num = "493193"
let bigNum = num

let sum;

while (num.length > 1) {
    sum = 0;
    for (let index = 0; index < num.length; index++) {
        sum += +(num[index]);
    }
    num = sum.toString()
    
}

console.log("The Digital Root of", bigNum, "is :", num)*/

//Ultimate Challenge
var tabSM = []
var tabSM = [ 
    {   
        title: "rafik",
        caption: "ceci est la cap de rafik",
        link: "https://discord.com/channels/1",
        photo: "photo1",
        likes: ["23"]
    },

    {   
        title: "racim" ,
        caption: "ceci est la cap de racim" ,
        link: "https://ceciest.un/lienbidon/2" ,
        photo: "photo2" ,
        likes: ["15"]
    },
]
console.log(tabSM.length)
console.log(tabSM[1].title)

for (let n = 0; n < tabSM.length; n++) {
    alert("Choisissez: \n 1- Ajouter un post \n 2- Supprimer un post \n 3- Afficher les posts")
    let choix1 = prompt("Entrez votre choix")
    choix1 = parseInt(choix1)
    if (choix1 != 4){
        let lng = tabSM.length
        switch (choix1) {
            case 1: 
                do {
                    
                    tabSM.push({}) 
            
                    tabSM[lng].title = prompt("Entrez votre nom")
                    tabSM[lng].caption = prompt("Entrez une caption")
                    tabSM[lng].link = prompt("Entrez votre link")
                    tabSM[lng].photo = prompt("Ajouter votre photo")
                    lng++;

                    var choix2 = prompt("Entrez: \n 1- Ajouter un autre post \n 2- Quitter")
                    choix2 = parseInt(choix2)
                    
                } while (choix2 == 1);
                break;
            case 2 :
                do {
                    let supp = prompt("Entrez le titre du post que vous voulez supprimer: ")
                    for (let i = 0; i < tabSM.length; i++) {
                        if (supp === tabSM[i].title) {
                            tabSM.splice(i, i)
                        }
                    }

                    var choix3 = prompt("Entrez: \n 1- Supprimer un autre post \n 2- Quitter")
                    choix3 = parseInt(choix3)

                } while (choix3 == 1);
                break;
            case 3 :
                console.log(tabSM)
                break;
        }
            }
}
    
let lng = tabSM.length
switch (choix1) {
    case 1: 
        do {
            
            tabSM.push({}) 
    
            tabSM[lng].title = prompt("Entrez votre nom")
            tabSM[lng].caption = prompt("Entrez une caption")
            tabSM[lng].link = prompt("Entrez votre link")
            tabSM[lng].photo = prompt("Ajouter votre photo")
            lng++;

            var choix2 = prompt("Entrez: \n 1- Ajouter un autre post \n 2- Quitter")
            choix2 = parseInt(choix2)
            
        } while (choix2 == 1);
        break;
    case 2 :
        do {
            let supp = prompt("Entrez le titre du post que vous voulez supprimer: ")
            for (let i = 0; i < tabSM.length; i++) {
                if (supp === tabSM[i].title) {
                    tabSM.splice(i, i)
                }
            }

            var choix3 = prompt("Entrez: \n 1- Supprimer un autre post \n 2- Quitter")
            choix3 = parseInt(choix3)

        } while (choix3 == 1);
        break;
    case 3 :
        console.log(tabSM)
        break;
}


// Ultimate Challenge 

/*let obj = [ 
    {
        title : "First Post",
        caption : "hello world",
        link_photo : "facebook photo",
        per_like : ["Alex" , "Jaffar" , "Kadour"]
    },

    {
        title : "Second Post",
        caption : "hello from Facebook",
        link_photo : "facebook photo 02 ",
        per_like : ["Kaido" , "Buggy" , "litch"]
    },
]

let loop = obj.length ;
let j = 2;

for (let i = 0; i < loop; i++) {
    alert(" The post in the console \n 1 - Show all post in the console  \n 2 - Add new post \n 3 - Delete post \n 4 - If you want Exit  ")
    let slc = prompt("Entere your number : ")

    slc = parseInt(slc)
    let con = 0;

    if (slc == 1) {
        console.log(obj)
    } else if (slc == 2){
        while (con < 1) {

            obj[j] = {}
        
            obj[j].title = prompt("Entre the title of post : ")
            obj[j].caption = prompt("Entre the caption of post : ")
            obj[j].link_photo = prompt("Entre the Link to Photo of post : ")
            j++;

            let str = prompt("Entre : \n 1 - if you wante create post \n 2 - if you wante to exit ")
            if (str == "1") {
                con = 0 
            } else {
                con = 2  
            }
        }
    }else if (slc == 3){
        while (con < 1) {
            let del = prompt("Entre the title of the post that you want to Delete :")
            for (let k = 0; k < loop+1 ; k++) {
                if (del == obj[k].title) {
                    obj.splice(k , k)
                }
            }
            
            let str = prompt("Entre : \n 1 - if you wante deelte onther post \n 2 - if you wante to exit ")
            if (str == "1") {
                con = 0 
            } else {
                con = 2  
            }
        }
    }else if (slc == 4){
        loop = 0;
    }
    i--;
}

console.log(tabSM)*/
