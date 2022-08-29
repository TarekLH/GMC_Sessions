





/*for (let i = 0; i < isogram.length; i++) {
    for (let j = 0; j < isogram.length; j++) {
        if (isogram[i] === isogram[j]) {

        }
        
    }
}*/


//let isogram = []
//let alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
//isogram.toLowercase()

/*for (let i = 0; i < isogram.length; i++) {
    for (let j = 0; j < alpha.length; j++) {
        let rep = 0
        if (tab[i,  ] === tab[j]) {
            rep++
            if (rep > 2) {
                console.log("your word is not an isogram")
            } else {
                console.log("is an isogram")
            }
        }
        
    }
}*/

/*let iso = (string) => {
    let rep = 1;
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if (string[i] === string[j]) {
                rep++;
                if (rep > 2) {
                    console.log("your word is not an isogram")
                } else {
                    console.log("is an isogram")
                }
            
        }
        
    } 
    }
};*/


/*let item = [1,'a','b',0,15] //== [1,2]

return item.filter(content => typeof content == "number") 
console.log(result)*/


/*function sumTwoSmallestNumbers(numbers) {  
    let mini = numbers[0] 
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < mini) {
            mini = numbers[i]
        }


        
    }
    numbers.filter(content => Math.min(...content,...content) )
}*/



/*function sumTwoSmallestNumbers(numbers) {  
    numbers.filter(content => find(Math.min(min1,min2).reduce(min2 - min1)) )*/

    function greet(name){
        if(name === "Johnny") {
            return "Hello, my love!";
        }
        return "Hello, " + name + "!";
    }
