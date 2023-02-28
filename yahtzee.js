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

    ones_to_six : function (main,number) {
        var tab = main.filter(num => num == number) 
        return tab.reduce((acc, curr) => acc + curr,0)
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
    },

    three_of_a_kind : function (main) {
        for (k=1;k<=6;k++){
            tabk = main.filter(num => num == k)
            if (tabk.length >= 3){
                return main.reduce((acc, curr) => acc + curr,0)
            }
        }
        return 0
    },

    four_of_a_kind : function (main) {
        for (k=1;k<=6;k++){
            tabk = main.filter(num => num == k)
            if (tabk.length >= 4){
                return main.reduce((acc, curr) => acc + curr,0)
            }
        }
        return 0
    },

    full_house : function (main) {
        var brelan; var pair;
        for (k=1;k<=6;k++){
            tabk = main.filter(num => num == k)
            if (tabk.length = 2) pair = true
            if (tabk.length = 3) brelan = true
        }
        var result = (pair && brelan) ? 25 : 0
        return result
    },

    small_straight : function (main) {
        var tab_sort = main.sort();
        var n = 0;
        for (let k =0; k<tab_sort.length-1;k++){
            if (tab_sort[k+1]=tab_sort[k]+1){
                n++
            } 
        }
        result = (n == 4) ? 30 : 0;
        return result
    },

    large_straight : function (main) {
        var tab_sort = main.sort();
        for (let k =0; k<tab_sort.length-1;k++){
            if (tab_sort[k+1]!=tab_sort[k]+1){
                return 0
            } 
        }
        return 40
    },

    chance : function (main) {
        return main.reduce((acc, curr) => acc + curr,0)
    },

    yahtzee : function (main) {
        for (k=1;k<=6;k++){
            tabk = main.filter(num => num == k)
            if (tabk.length = 5){
                return 50
            }
        }
        return 0
    }   

}

module.exports = yahtzee;