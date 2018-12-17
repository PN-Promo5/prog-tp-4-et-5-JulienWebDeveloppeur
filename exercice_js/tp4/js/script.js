// Exercice 1
// Je declare un tableaux de chaine de caractére
let tableLettre = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"];

// Fonction qui prend en paramètre un tableau et qui affiche en console tous les éléments de ce tableau.
function displayTableau(table) {
    let i = 0; // Je déclare la variable compteur 
    let currentElement; // Je déclare l'a variable qui contiendra l'élement courant
    while (i < table.length) { // Tant que i est plus petit que la longeur du tableau
        currentElement = table[i]; // CurrentElement vaux la valeur du tableau a l'indice i       
        i++; // J'incrémente le compteur
    }
}


// Exercice 2
// fonction qui prend en paramètre un tableau et qui affiche en console les 10 premiers éléments de ce tableau.
function firstTensElements(table) {
    let i = 0; // Je déclare la variable compteur 
    let currentElement; // Je déclare l'a variable qui contiendra l'élement courant
    while (i < 10) { // Tant que i est plus petit que 10
        if (table.length >= 10) { // Si la longeur du tableau est égal a 10 
            currentElement = table[i]; // CurrentElement vaux la valeur du tableau a l'indice i
        }
        i++; // J'incrémente le compteur
    }
}
// Exercice 3
// fonction qui prend en paramètre un tableau et qui affiche en console les 10 derniers éléments de ce tableau.
function lastTenElements(table) {
    let i = 0; // Je déclare la variable compteur 
    let j = table.length; // Je déclare un deuxieme compteur qui prend la valeur de la longeur du tableau
    let currentElement; // Je déclare l'a variable qui contiendra l'élement courant
    while (i < 10) { // Tant que i est plus petit que 10
        currentElement = table[j]; // currentElement vaux la valeur du tableau a l'indice j
        j--; // Je décremente de 1 la variable j
        i++; // J'incrémente de 1 la variable i
    }
}

// Exercice 4
// Je déclare un tableau d'entiers
let tableNbr = [1, 1, 3, 3, 5, 5,5, 7, 1, 9, 1, 10, 11,11];
// Je déclare un tableau vide
let tableNbrIncremented = [];
// fonction qui prend en paramètre un tableau de nombres et qui renvoie une copie de ce tableau dans laquelle tout les nombres ont été augmentés de 1.
function nbrIncremented(table) {
    let i = 0; // Je déclare la variable compteur 
    let currentElement; // Je déclare l'a variable qui contiendra l'élement courant
    while (i < table.length) { // Tant que i est plus petit que la longeur du tableau
        currentElement = table[i]; // currentElement vaux la valeur du tableau a l'indice i
        tableauNbrIncremented[i] = currentElement + 1; // J'ajoute au tableau la valeur de currentElement + 1
        i++; // J'incrémente de 1 la variable i
    }
}

// Exercice 5
// fonction qui prend en paramètre un tableau de nombres et qui, pour tous les éléments de ce tableau, affiche si cet élément est pair ou non.
function pairOrNot(table) {
    let i = 0; // Je déclare la variable compteur 
    let currentElement; // Je déclare l'a variable qui contiendra l'élement courant
    while (i < table.length) { // Tant que i est plus petit que la longeur du tableau
        currentElement = table[i]; // currentElement vaux la valeur du tableau a l'indice i
        if (currentElement % 2 == 0) { // Si currentElement est pair
            console.log(currentElement + " est un nombre pair"); // J'affiche un message disant que l'element est pair
        } else {
            console.log(currentElement + " n'est pas nombre pair"); // J'affiche un message disant que l'element est impair
        }
        i++; // J'incrémente de 1 la variable i
    }
}

// Exercice 6
// Je déclare une variable qui stockera la somme des éléments
let tableSum = 0;
// fonction qui prend en paramètre un tableau de nombres, et qui renvoie la somme des éléments de ce tableau.
function sumTable(table) {
    let i = 0; // Je déclare la variable compteur 
    let currentElement; // Je déclare l'a variable qui contiendra l'élement courant
    while (i < table.length) { // Tant que i est plus petit que la longeur du tableau
        currentElement = table[i]; // currentElement vaux la valeur du tableau a l'indice i
        tableSum += currentElement; // J'ajoute la valeur de l'élément courant a la valeur de la variable tableSum
        i++ // J'incrémente de 1 la variable i
    }
    return tableSum; // Je renvoie la somme des élément du tableau
}

// Exercice 7
// Je déclare une variable qui vaudra le nombre d'élément pair contenue dans le tableau
let nbrPeer = 0;
// fonction qui prend en paramètre un tableau de nombres et qui renvoie le nombre d’éléments pairs de ce tableau.
function howManyPeer(table) {
    let i = 0; // Je déclare la variable compteur 
    let currentElement; // Je déclare l'a variable qui contiendra l'élement courant
    while (i < table.length) { // Tant que i est plus petit que la longeur du tableau
        currentElement = table[i]; // currentElement vaux la valeur du tableau a l'indice i
        if (currentElement % 2 == 0) { // Si currentElement est pair
            nbrPeer++; // J'incrémente de 1 la variable nbrPeer
        }
        i++; // J'incrémente de 1 la variable i
    }
    return nbrPeer; // Je retorune le nombre d"élément par contenue dan le tableau
}

// Exercice 8
// Je déclare une variable qui contiendra la valeur maximum du tableau
let maxValue = 0;
// fonction qui prend en paramètre un tableau de nombres et qui renvoie la valeur maximum de ce tableau.
function maxValueTable(table) {
    let i = 0; // Je déclare la variable compteur 
    let j; // Je déclare un deuxieme compteur  qui vaudra i -1
    let currentElement; // Je déclare la variable qui contiendra l'élement courant
    let beforeElement // Je déclare la variable qui contiendra l'élément qui précede l'élément courant
    while (i < table.length) { // Tant que i est plus petit que la longeur du tableau
        j = i - 1 // j vaux i moin 1
        currentElement = table[i]; // currentElement vaux la valeur du tableau a l'indice i
        beforeElement = table[j]; // beforeElement vaux la valeur du tableau a l'indice j
        if (currentElement > beforeElement) { // Si l'élément courant est inférieur a l'élement le précédent
            maxValue = currentElement; // maxValue vaux la valeur de l'élément courant
        }
        i++; // J'incrémente de 1 la variable i
    }
    return maxValue; // Je retourne la valeur maximum du tableau
}

// Exercice 9
// Je déclare une variable qui contiendra la valeur minimum du tableau
let minValue = 0;
// fonction qui prend en paramètre un tableau de nombres et qui affiche la valeur maximum et minimum de ce tableau.
function maxValueTable(table) {
    let i = 0; // Je déclare la variable compteur 
    let j; // Je déclare un deuxieme compteur  qui vaudra i -1
    let currentElement; // Je déclare la variable qui contiendra l'élement courant
    let beforeElement // Je déclare la variable qui contiendra l'élément qui précede l'élément courant
    while (i < table.length) { // Tant que i est plus petit que la longeur du tableau
        j = i - 1 // j vaux i moin 1
        currentElement = table[i]; // currentElement vaux la valeur du tableau a l'indice i
        beforeElement = table[j]; // beforeElement vaux la valeur du tableau a l'indice j
        if (currentElement > beforeElement) { // Si l'élément courant est supérieur a l'élement le précédent
            maxValue = currentElement; // maxValue vaux la valeur de l'élément courant
        } else if (currentElement < beforeElement) { // Sinon si l'élément courant est inférieur a l'élement le précédent
            minValue = currentElement; // minValue vaux la valeur de l'élément courant
        }
        i++; // J'incrémente de 1 la variable i
    }
    return maxValue + minValue; // Je retourne la valeur maximum et minimum du tableau
}

// Exercice 10
// Je déclare un booleen  qui renvera si le tableau est croissant ou non
let orderGrowing = false;
// fonction qui prend en paramètre un tableau de nombres et qui renvoie vrai si ce tableau est ordonné dans l’ordre croissant, faux si ce n’est pas le cas.
function OrderGrowingOrNot(table) {
    let i = 0; // Je déclare la variable compteur 
    let j = i; // Je déclare un deuxieme compteur  qui vaudra i -1
    let currentElement; // Je déclare la variable qui contiendra l'élement courant
    let beforeElement // Je déclare la variable qui contiendra l'élément qui précede l'élément courant
    while (i < table.length) { // Tant que i est plus petit que la longeur du tableau
        j = i - 1; // j vaux i moin 1
        currentElement = table[i]; // currentElement vaux la valeur du tableau a l'indice i
        beforeElement = table[j]; // beforeElement vaux la valeur du tableau a l'indice j
        if (currentElement > beforeElement) { // Si si l'élément courant est supérieur a l'élement le précédent
            orderGrowing = true; // Je fait passer le booleen a vrai
        }
        i++; // J'incrémente de 1 la variable i
    }
    return orderGrowing; // Je retourne si le tableau est croissant ou pas 
}

/* Exercice 11 : Créez une fonction qui prend en paramètre un tableau de nombres et qui retourne un autre tableau de nombres constitué des éléments du tableau passé en paramètre. 
Dans le tableau retourné, chaque élément n'a qu'une seule occurrence. */
function deleteOcurrences(table) {
    let currentElt; // élément courant

    let secondArray = [table[0]]; // sequence qui sera renvoyé, contient pour l'instant la première valeur du sequence passé en paramètre

    let secondArrayCurrentElt; // élément courant pour le second sequence

    let isAlreadyThere = false; // booléen qui vaudra vrai lorsqu'on rencontrera un même élément 2 fois

    for (var i = 0; i < table.length; i++) {
        currentElt = table[i] // stocke l'élément courant

        for (var j = 0; j < secondArray.length; j++) // seconde boucle pour parcourir le second sequence et vérifier si l'élément courant s'y trouve déjà ou non
        {
            secondArrayCurrentElt = secondArray[j]; // stocke l'élément courant du second sequence

            if (currentElt == secondArrayCurrentElt) // si l'élément courant du premier sequence correspond à celui du second
            {
                isAlreadyThere = true; // le booléen devient vrai
            }
        }

        if (!isAlreadyThere) // après avoir parcouru la seconde sequence, si le booléen est faux c'est que l'élément n'existe pas dans la deuxieme sequence)
        {
            secondArray.push(currentElt); // on ajoute l'élément courant au second sequence
        } else // sinon, c'est à dire si le booléen vaut vrai et que l'élément existait déjà dans le second sequence
        {
            isAlreadyThere = false; // on n'ajoute pas l'élément au second sequence, et le booléen redevient faux pour le prochain tour de boucle
        }
    }

    return secondArray; // retourne la seconde sequence
}
console.log(deleteOcurrences(tableNbr));

// Exercice 12
// Je déclare le tableau inverser
let tableInverted = [];
/* fonction qui prend en paramètre un tableau de nombres et qui retourne un autre tableau
de nombres constitué des éléments du tableau passé en paramètre. Dans le tableau retourné, l'ordre
des éléments est inversé. */
function invertedTable(table) {
    let i = 0; // Je déclare la variable compteur
    let j = table.length - 1; // Je déclare la variable j qui vaux la longeur du tableau moin 1
    let currentElement; // Je déclare la variable qui contiendra l'élement courant
    while (j > 0) {
        currentElement = table[j]; // L'élément courant vaux la valeur du tableau a l'indice j 
        tableInverted.push(currentElement); // j'ajoute au tableau inverser l'élément courant
        i++ // J'incrémente i
        j--; // Je décremente j
    }
    return tableInverted; // Je retourner le tableau inverser
}

// Exercice 13
// Je déclare un tableau de nombre
let tableNbr1 = [1, 2, 3, 4, 5, 6];
// Je déclare un deuxiem tableau de nombre
let tableNbr2 = [7, 8, 9, 10, 11, 12];
// Je déclare un tableau qui contiendra la valeur des deux tableaux d'entiers
let concatenedTable = [];
// fonction qui prend en paramètres deux tableaux de nombres et qui retourne un tableau correspondant à la concaténation des deux tableaux d'entiers passés en paramètres.
function tableConcat(table1, table2) {
    let i = 0; // Je déclare la variable compteur
    let j = 0; // Je déclare la deuxieme variable compteur
    let finish = table1.length + table2.length;
    let currentElement; // Je déclare la variable qui contiendra l'élement courant
    while (i < finish) { // tant que i ne vaux pas la longeur du tableau 1 et du tableau 2
        if (i < table1.length) { // Si i est plus petit que la longeur du tableau 1
            currentElement = table1[i]; // L'élément courant vaux la valeur du tableau 1 a l'indice i 
            concatenedTable.push(currentElement); // J'ajoute au tableau concaténer la valeur de l'élément courant
        } else {
            currentElement = table2[j]; // L'élément courant vaux la valeur du tableau 2 a l'indice j
            concatenedTable.push(currentElement); // J'ajoute au tableau concaténer la valeur de l'élément courant
            j++; // J'incrémente la variable j 
        }
        i++; // J'incrémente i
    }
    return concatenedTable; // Je déclare le tableau concaténé
}

// Exercice 14
// je déclare le tableau de voyelles vide
let tableVoyelles = [];
// fonction qui prend en paramètre un tableau de chaînes de caractères, qui copie dans un nouveau tableau tous les éléments du tableau passé en paramètre commençant par une voyelle.
function sortVoyelle(table) {
    let i = 0; // Je déclare la variable compteur
    let currentElement; // Je déclare la variable qui contiendra l'élement courant
    while (i < table.length) { // tant que i ne vaux pas la longeur du tableau
        currentElement = table[i]; // L'élément courant vaux la valeur du tableau a l'indice i 
        // Si l'élément courant vaux a ou e ou i ou o ou u ou y
        if (currentElement === "a" || currentElement === "e" || currentElement === "i" || currentElement === "o" || currentElement === "u" || currentElement === "y") {
            tableVoyelles.push(currentElement); // J'ajoute au tableau de voyelles l'élément courant
        }
        i++; // J'incrémente i
    }
    return tableVoyelles; // Je déclare le tableau de voyeles
}

// Exercice 15
// Je declare le mot qui sera tester
let wordBefore = "lol";
// fonction qui prend en paramètre une chaîne de caractères, qui renvoie vrai si la chaîne est un palindrome, ou qui renvoie faux si ce n’est pas le cas.
function palindromeOrNot(wordBefore) {
    let i = 0; // Je déclare la variable compteur
    let j = wordBefore.length - 1; // Je déclare une variable qui vaux la longeur du tableau moin 1
    let palindrome = false; // Je déclare un booleeen qui vaux faux
    let wordAfter = ""; // Je déclare une variable qui contiendra le mot créer par ma fonction
    let currentElement; // Je déclare la variable qui contiendra l'élement courant
    while (i < wordBefore.length) { // tant que i ne vaux pas la longeur du tableau
        currentElement = wordBefore[i]; // L'élément courant vaux le caractere de la chaine de caractere a l'indice i 
        wordAfter += wordBefore[j]; // j'ajoute le caractére a l'indice j de la chaine de caractere a la variable wordAfter
        if (wordBefore === wordAfter) { // Si le mot ecrit a l'envers vaux le mot passer en parametre
            palindrome = true; // je passe palindrome a true
            console.log(wordAfter + " est un palindrome !"); // j'affiche un message disant que le mot passer en parametre est un palindrome
        }
        i++; // J'incrémente i
        j--; // Je décremente j
    }
}

// Exercice 16
// Je déclare la variable contenant le mot 1
let word1 = "alinel";
// Je déclare la variable contenant le mot 2
let word2 = "lainel";
/* fonction qui prend en paramètre deux chaînes de caractères, qui renvoie vrai si la 1ère
chaîne est un anagramme de la 2ème chaîne, ou qui renvoie faux si ce n’est pas le cas.*/
function anagrameOrNot(word1, word2) {
    let i = 0; // Je déclare la variable compteur
    let j = 0; // Je déclare la deuxieme variable compteur
    let stockage = ""; // Je déclare la variable de stockage 
    let compteur = 0; // Je déclare compteur de caractére
    let anagrame = false; // Je déclare un booleen que j'initialise a faux
    let word2Array = word2.split(''); // Je stoche dans un tableaux ma chaine de caractéres
    let currentElementWord1; // Je déclare L'élement courant du premier mot
    let currentElementWord2; // Je déclare L'élement courant du deuxieme mot
    while (i < word1.length) { // Tant que i est plus petit que la longueur du mot 1
        j = 0; // je remet j a 0
        currentElementWord1 = word1[i]; // l'élément courant du mot 1 vaux le caractére du mot 1 a l'indice i
        while (j < word2.length) { // Tant quen est plus petit que la longeur du mot 2
            currentElementWord2 = word2Array[j]; // l'élément courant du mot 2 vaux le caractére du mot 2 a l'indice j
            stockage = currentElementWord2; // Stockage vaux l'élément courant 2
            if (currentElementWord1 === stockage) { // Si l'élément courant 1 est égal a stockage
                compteur++; // J'incrémente la variable compteur
                word2Array.splice(j, 1); // Je supprime le caractére du tableau
            }
            stockage = ""; // Je remet stockage a rien
            j++ // j'incrémente j
        }
        i++; // J'incrémente i
    }
    if (compteur === word1.length) { // Si compteur est égal a la longeur du mot 1
        anagrame = true; // Je passe le booleen anagrame a vraie
        console.log(word2 + " est un anagramme de " + word1); // j'affiche un message disant que mot 2 est bien un anagramme de mot 2
    }
}
//anagrameOrNot(word1,word2);