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

function formatObj(obj,type=""){
    //formate un objet pour etre proprement afficher en html
    if (type == "html"){
        return JSON.stringify(choices).replace(/[\"{}]/g,"").replace(/,/g,"<br/>").replace(/_/g," ");
    } else {
        return JSON.stringify(choices).replace(/[\"{}]/g,"").replace(/,/g,"\n").replace(/_/g," ");
    }
}

function randomIntFromInterval(min, max) { //
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const yahtzee = {

    throw_dace : function() {
        var list_dace = []
        for(i = 0; i < 5; i++){
            list_dace.push(randomIntFromInterval(1,6))
        }
        return list_dace;
    },

    ones_to_six : function (game,number) {
        var tab = game.filter(num => num == number) 
        return tab.reduce((acc, curr) => acc + curr,0)
    },
    
    three_four_five : function (game,number) {
        for (k=1;k<=6;k++){
            tabk = game.filter(num => num == k)
            if (tabk.length >= number){
                if (number==5) return 50
                return game.reduce((acc, curr) => acc + curr,0)
            }
        }
        return 0
    },
    

    full_house : function (game) {
        var brelan; var pair;
        for (k=1;k<=6;k++){
            tabk = game.filter(num => num == k)
            if (tabk.length = 2) pair = true
            if (tabk.length = 3) brelan = true
        }
        var result = (pair && brelan) ? 25 : 0
        return result
    },

    small_straight : function (game) {
        var tab_sort = game.sort();
        var n = 0;
        for (let k =0; k<tab_sort.length-1;k++){
            if (tab_sort[k+1]==tab_sort[k]+1){
                n++
            } 
        }
        return result = (n==3) ? 30 : 0 
    },
    
    large_straight : function (game) {
        var tab_sort = game.sort();
        var n = 0;
        for (let k =0; k<tab_sort.length-1;k++){
            if (tab_sort[k+1]==tab_sort[k]+1){
                n++
            } 
        }
        return result = (n==4) ? 40 : 0 
    },

    chance : function (game) {
        return game.reduce((acc, curr) => acc + curr,0)
    },

}

function single_play(type_call = ""){
    game = yahtzee.throw_dace()
    choices = {  Ones: yahtzee.ones_to_six(game,1),
                Twos: yahtzee.ones_to_six(game,2),
                Three: yahtzee.ones_to_six(game,3),
                Fours: yahtzee.ones_to_six(game,4),
                Fives: yahtzee.ones_to_six(game,5),
                Sixes: yahtzee.ones_to_six(game,6),
                Sum: undefined,
                Bonus: undefined,
                Three_of_a_kind : yahtzee.three_four_five(game),
                Fours_of_a_kind : yahtzee.three_four_five(game),
                Full_House : yahtzee.full_house(game),
                Small_Straight : yahtzee.small_straight(game),
                Large_Straight : yahtzee.large_straight(game),
                Chance : yahtzee.chance(game),
                YAHTZEE : yahtzee.three_four_five(game),
                TOTAL_SCORE : undefined
             }
    if (type_call == "html"){
        stringObj = formatObj(choices,"html");
        return `VOICI VOTRE JEUX : <br/>` + game + `<br/>ET VOTRE GRILLE DE SCORE : <br/>` + stringObj
    } else {
        stringObj = formatObj(choices);
        return `VOICI VOTRE JEUX : \n` + game + `\nET VOTRE GRILLE DE SCORE : \n` + stringObj
    }
}

function main_html (){
    //var life = 2;
    // while (life != 0) {
    // }
    document.write(single_play("html"));  
}

console.log(single_play());

module.exports = {
                    yahtzee,
                 };

