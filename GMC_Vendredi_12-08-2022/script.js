//Ultimate challemge

/*var tabSM = [ 
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
        likes: ["15", "alex", "marc", "marie", "victor"]
    },
]*/


/*for (let n = 0; n < tabSM.length; n++) {
    
    alert("Choisissez: \n 1- Ajouter un post \n 2- Supprimer un post \n 3- Afficher les posts")

    let choix1 = prompt("Entrez votre choix")
    choix1 = parseInt(choix1)




    n--
}*/



/*alert("Choisissez: \n 1- Ajouter un post \n 2- Supprimer un post \n 3- Afficher les posts \n 4-Ajouter likes \n 5- Afficher likes")

let choix1 = prompt("Entrez votre choix")
choix1 = parseInt(choix1)
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
                    tabSM.splice(i, 1)
                }
            }

            var choix3 = prompt("Entrez: \n 1- Supprimer un autre post \n 2- Quitter")
            choix3 = parseInt(choix3)

        } while (choix3 == 1);
        break;
    
    case 3 :
        console.log(tabSM)
        break;
    
    case 4:
        let titleAddLikes = prompt("Entrez le titre du post dont vous voulez ajouter vos likes")
        
        for (let k = 0; k < tabSM.length; k++) {
            if (titleAddLikes === tabSM[k].title) {
                var nameLikes = prompt("Entrez vos likes").split(" ")
                for (let index = 0; index < nameLikes.length; index++) {
                    tabSM[k].likes.push(nameLikes[index])
                }
                
            }

        }

    case 5: 
        let afficherLikes = prompt("Entrez le titre du post dont vous voulez afficher les likes")
        for (let k = 0; k < tabSM.length; k++) {
            if (afficherLikes === tabSM[k].title) {
                console.log(tabSM[k].likes)
                if (tabSM[k].likes === undefined) {
                    console.log("No one likes this")
                } else if (tabSM[k].likes.length == 1) {
                    console.log(tabSM[k].likes, " likes this")
                } else if (tabSM[k].likes.length == 2) {
                    console.log(tabSM[0].likes, "and", tabSM[1].likes, " likes this")
                } else if (tabSM[k].likes.length == 3) {
                    console.log(tabSM[0].likes, "and", tabSM[1].likes, "and", tabSM[2].likes, " likes this")
                } else  {
                    console.log(tabSM[k].likes[0], ",", tabSM[k].likes[1], "and",  tabSM[k].likes.length - 2, " others likes this")
                }
            } 
            
        }
        break;
}*/


//Challenge21

/*let tab = [2, 4, 11, 6, 8]
for (let i = 0; i < tab.length; i++) {
    var cpti
    var cptp
    if (tab[i] % 2 == 0) {
        cptp += 1 
        
    } else {
        cpti += 1
    }
    
}
for (let i = 0; i < tab.length; i++) {
    if ( (cptp > cpti) && (tab[i] % 2 !== 0) ) {
        console.log(tab[i])
    } else {
        console.log(tab[i])
    }
    
}*/
    


//DOM 
//challenge1
/*function clickme() {
    document.querySelector("#title").innerHTML += "walid"
}*/

//challenge2
/*function clickhere() {
    document.querySelector("#para").style.color = "white"
    document.querySelector("#para").style.backgroundColor = "green"
    document.querySelector("#para").style.borderRadius = "25px"
    document.querySelector("#para").style.padding = "20px"
}*/

//challenge3
/*function clicktosee() {
    let nbr = 0
    document.querySelector("#ajout").innerHTML += "sibling" + nbr + document.querySelector("p")
    nbr += 1
}*/


//challenge4
/*function clicktodel() {
    document.querySelector("#select").removeChild(document.querySelector("option"))
}*/

//ultimatechallenge









