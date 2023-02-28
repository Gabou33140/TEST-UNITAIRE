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
    
    three_four_five : function (main,number) {
        for (k=1;k<=6;k++){
            tabk = main.filter(num => num == k)
            if (tabk.length >= number){
                if (number==5) return 50
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

    straight : function (main) {
        var tab_sort = main.sort();
        var n = 0;
        for (let k =0; k<tab_sort.length-1;k++){
            if (tab_sort[k+1]==tab_sort[k]+1){
                n++
            } 
        }
        if (n==4) return 40
        if (n==3) return 30
        return 0
    },

    chance : function (main) {
        return main.reduce((acc, curr) => acc + curr,0)
    },

}

module.exports = yahtzee;