
// PROJET REPRODUIRE LE JEUX YAHTZEE https://cardgames.io/yahtzee/consigne :
// Binome, TDD, commits souvent sur git et commit de la part des deux du binome pour voir l'implication

// git pull : permet de transfèrer le dossier de GitHub sur le PC en local

// une fonction pour un tirage de cinq dé
function yahtzee(){
    var list_occurs = []
    for(i = 0; i < 5; i++){
        list_occurs.push( randomIntFromInterval(1,6) )
    }
    console.log(list_occurs)
    
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(yahtzee())

// module.exports = { yahtzee };