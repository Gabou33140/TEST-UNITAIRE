/* PROJET REPRODUIRE LE JEUX YAHTZEE https://cardgames.io/yahtzee/consigne :
Binome, TDD, commits souvent sur git et commit de la part des deux du binome pour voir l'implication
git pull : permet de transfèrer le dossier de GitHub sur le PC en local
une fonction pour un tirage de cinq dé
three of a kind : 3 dés identique / brelan
four of a kind :  4 dés identique
full house : brelan et paire
petite suite : 4 des se suivent
grande suite : 5 des se suivent
yahtzee : 5 des identique
chance : total des des (toujours present)
bonus => supperieur
parti mineur > 63 : bonus de 35 pts
*/

// une fonction avec un parametre, il faut une variation ou une
// exemple : yahtzee.ones du fichier yahtzee.js et l'utiliser dans le test du fichier yahtzee.test.js

const yahtzee = {
    
    ones : function (main) {
        var tab1 = main.filter(num => num == 1) 
        return tab1.length  
    },

    twos : function (main) {
        var tab1 = main.filter(num => num == 2) 
        return tab1.length * 2
    },

    threes : function (main) {
        var tab1 = main.filter(num => num == 3) 
        return tab1.length * 3
    },

    fours : function (main) {
        var tab1 = main.filter(num => num == 4) 
        return tab1.length * 4
    },

    fives : function (main) {
        var tab1 = main.filter(num => num == 5) 
        return tab1.length * 5
    },

    sixs : function (main) {
        var tab1 = main.filter(num => num == 6) 
        return tab1.length * 6
    }

    // three_of_a_kind : function () {

    // }

    // four_of_a_kind : function () {

    // }

    // full_house : function () {

    // }

    // small_straight : function () {

    // }

    // large_straight : function () {

    // }

    // chance : function () {

    // }

    // yahtzee : function () {

    // }   

}

console.log(yahtzee.ones([1,1,1,4,5]))

module.exports = yahtzee;


// return 
    // var score = 0
    // var n = main.length;
    // for (let k =0; k <= n;k++ )
    //     if (main[k]==1) score ++
    // return score

    // // main de 5 dés au yahtzee
    // var list_occurs = []
    // for(i = 0; i < 5; i++){
    //     list_occurs.push(randomIntFromInterval(1,6) )
    // }


// function randomIntFromInterval(min, max) { // min and max included 
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }

// var score = 0
// var n = main.length;
// for (let k =0; k <= n;k++ )
//     if (main[k]==1) score ++
// return score
