// Exercice1
let x = 7;
let y = 10;
if (x > y){
    console.log(x+ " est la plus grande valeur")
}else{
    console.log(y+ " est la plus grande valeur")
}

// Exercice2
let newDog = "Chihuahua"
console.log("La taille de la variable est " +newDog.length)
console.log("le contenu de la variable en majuscule est " +newDog.toUpperCase())
console.log("Le contenu de la variable en minnuscule est " +newDog.toLowerCase())
if (newDog == "Chihuahua"){
    console.log("J'adore les chihuahuas, c'est ma race de chien préférée")
}else{
    console.log("Je m'en fous, je préfère les chats")
}

// Exercice3
let num = prompt("Entrer un nombre")
 if (num % 2 == 0){
    console.log(num+ " est un nombre pair")
 }else{
    console.log(num+ "est un nombre impair")
 }

//  Exercice4
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
if(users == 0){
    console.log("personne n'est en ligne")
}else if(users == 1){
    console.log(users[1]+ " est en ligne")
}
else if(users == 2){
    console.log(users[1]+ " et " +users[2]+ " sont en ligne")
}else{
    console.log(users[1], users[2]+ " and 3 more are online")
}