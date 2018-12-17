// Exercice 1.1 :
// tableau à 2 dimensions de chaînes de caractères correspondant au tableau de profil-utilisateur :
let user1 = ["Mathias", "Ritrono", "34", "Nantes", "mr@yopmail.com", "1"];
let user2 = ["Salif", "Bamogo", "25", "Brest", "sb@yopmail.com", "2"];
let user3 = ["Kristina", "Pavlov", "20", "Villeurbanne", "kp@yopmail.com", "3"];
let user4 = ["Elise", "Seti", "30", "grenoble", "es@yopmail.com", "4"];
let user5 = ["Pierrick", "Di Angelo", "18", "Strasbourg", "pd@yopmail.com", "5"];
let user6 = ["Mohamed", "Khaoui", "23", "Lille", "mh@yopmail.com", "6"];
let user7 = ["Paige", "Anderson", "42", "Evry", "pa@yopmail.com", "7"];
// je créer le tableau profile et j'ajoute tout les tableaux au tableaux profiles
let usersProfiles = [user1, user2, user3, user4, user5, user6, user7];

// Exercice 1.2 :
// une fonction permettant d’ajouter au tableau un profil-utilisateur. Demande en paramètres 5 chaînes de caractères
function addNewuser(surname, name, age, town, mail) {
    let k = usersProfiles.length + 1; // Je déclare k qui vaux la longeur du tableau profile utilisateur + 1
    eval("var users" + k + " = [];"); // Je déclare une variable avec un nom dynamique
    eval("users" + k).push(surname); // J'ajoute le prenom
    eval("users" + k).push(name); // J'ajoute le nom
    eval("users" + k).push(age); // J'ajoute l'age
    eval("users" + k).push(town); // J'ajoute la ville
    eval("users" + k).push(mail); // J'ajoute le mal
    eval("users" + k).push(k.toString()); // j'ajoute l'id que je convertie en chaine de caractére
    usersProfiles.push(eval("users" + k)); // j'ajoute au tableau de profile utilisateur le nouvel utilisateur
}
addNewuser("Julien", "Tremblay", "21", "Marseille", "Tremblay.julien.pro@gmail.com");


// Exercice 1.3 :
/* fonction qui prend en paramètre une chaîne de caractères
correspondant à une ville. Cette fonction retourne, sous forme de tableau à 2 dimensions, les profils
des utilisateurs habitant dans cette ville.*/
function sortByTown(townYouNeed) {
    let usersByTown = []; // Je déclare un tableau qui contiendra les utilisateur qui correspondent a la ville
    let i = 0; // Je déclare la variable compteur
    while (i < usersProfiles.length) { // Tant que i est plus petit que la longeur du tableau profile utilisateur
        if (usersProfiles[i][3] === townYouNeed) { // Si tableau utilisateur a l'indice i a l'indice ou se trouver le nom de la ville  est égal a la ville passer en parametre
            usersByTown.push(usersProfiles[i]); // J'ajoute au tableau usersByTown le profil utilisateur qui correspond a la ville
        }
        i++; // J'incrémente i 
    }
    return usersByTown; // Je renvoie le tableau usersByTown
}


// Exercice 1.4 :
/* fonction qui prend en paramètre une chaîne de caractères
correspondant à un prénom ou un nom. Cette fonction retourne, sous forme de tableau à 2
dimensions, les profils des utilisateurs ayant ce prénom ou ce nom.*/
function sortBySurnameOrName(nameYouNeed, surnameYouNeed) {
    let usersByNameOrSurname = []; // Je déclare un tableau qui contiendra les utilisateur qui correspondent au nom ou prenom passer en parametres
    let i = 0; // Je déclare le compteur
    while (i < usersProfiles.length) { // Tant que i est plus petit que la longeur du tableau profil utilisateur
        if ((usersProfiles[i][0] === surnameYouNeed) || (usersProfiles[i][1] === nameYouNeed)) { // Si le tableau profil utilisateur a l'indice i a l'indice 0 est égal au prenom passer en parametre ou profil utilisateur a l'indice i a l'indice 1 est égal au nom passer en parametre
            usersByNameOrSurname.push(usersProfiles[i]); // J'ajoute au tableau usersByNameOrSurname le profil utilisateur
        }
        i++; // J'incrémente i
    }
    return usersByNameOrSurname; // Je renvoie le tableau usersByNameOrSurname
}


// Exercice 1.5 :
/* fonction qui prend en paramètre une chaîne de caractères
correspondant. Cette fonction retourne, sous forme de tableau à 2 dimensions, les profils des
utilisateurs dans lesquelles apparaissent la chaîne de caractères passée en paramètre.*/
function sortByKeyWord(keyWord) {
    let usersByKeyWord = []; // Je déclare un tableau qui contiendra les utilisateurs qui contienne le mot clefs passer en parametre
    let i = 0; // Je declare le compteur
    while (i < usersProfiles.length) { // Tant que i est plus petit que la longeur du tableau profile utilisateur
        // Je cherche a chaque indice de l'indice i du tableau si il est egal au mot clefs, si oui je l'ajoute au tableau
        if ((usersProfiles[i][0] === keyWord) || (usersProfiles[i][1] === keyWord) || (usersProfiles[i][2] === keyWord) || (usersProfiles[i][3] === keyWord) || (usersProfiles[i][4] === keyWord) || (usersProfiles[i][5] === keyWord)) {
            usersByKeyWord.push(usersProfiles[i]);
        }
        i++; // J'incrémente i 
    }
    return usersByKeyWord; // Je renvoie le tableau usersByKeyWord
}
//sortByKeyWord("1");
var body = document.body; // Je déclare l'élément body
function createTable(array2D, booleen) {
    let containerAddUsers = document.getElementById("container-add-users");
    containerAddUsers.hidden = true;
    var containerTable = document.createElement("div");
    containerTable.id = "container-table";
    body.appendChild(containerTable);
    let table = document.createElement("table"); // je stocke dans une variable l'element tableau
    containerTable.appendChild(table); // J'ajoute au body le tableau
    table.classList.add("table") // J'ajoute la classe table de bootstrap
    let i = 0; // Je déclare la variable compteur i
    let j = 0; // Je déclare la variable compteur j
    while (i < array2D.length) { // Tant que i est plus petit que la longeur du tableaux multidimensionnel
        if (booleen === true) { // Si booleen est égal a true
            eval("var row" + i + " = document.createElement(\"tr\");"); // Je crée une ranger de tableau pour chaque utilisateur
            table.appendChild(eval("row" + i)); // J'ajoute le row au tableau
            eval("var header" + i + " = document.createElement(\"th\");"); // Je crée une entéte pour chaque utilisateur
            eval("row" + i).appendChild(eval("header" + i)); // J'ajoute l'entéte au row du tableau
            eval("header" + i).textContent = usersProfiles[i][0]; // j'ajoute la premiére valeur du tableau a l'entéte
            eval("header" + i).classList.add("headerArray"); // J'ajoute la classe crée en css
            while (j + 1 < array2D[i].length) { // Tant que j+1 est plus petit que la longeur du tableau a l'indice i
                eval("var content" + j + " = document.createElement(\"td\");"); // Je créer un element td pour chaque informations de l'utilisateur
                eval("row" + i).appendChild(eval("content" + j)); // J'ajoute l'element td a la row
                eval("content" + j).textContent = usersProfiles[i][j + 1]; // J'ajoute la valeur de l'indice i du tableau usersProfiles a l'indice j+1 pour ne pas re ecrire l'entéte
                j++; // J'incrémente j       
            }
            j = 0; // Je reset j
        } else {
            eval("var row" + i + " = document.createElement(\"tr\");"); // Je crée une ranger de tableau pour chaque utilisateur
            table.appendChild(eval("row" + i)); // J'ajoute le row au tableau
            while (j < array2D[i].length) { // Tant que j est plus petit que la longeur du tableau a l'indice i
                eval("var content" + j + " = document.createElement(\"td\");"); // Je créer un element td pour chaque informations de l'utilisateur
                eval("row" + i).appendChild(eval("content" + j)); // J'ajoute l'element td a la row
                eval("content" + j).textContent = usersProfiles[i][j]; // J'ajoute la valeur de l'indice i du tableau usersProfiles a l'indice j+1 pour ne pas re ecrire l'entéte
                j++; // J'incrémente j             
            }
            j = 0; // Je reset j
        }
        i++; // J'incrémente i
    }
    let btnPrimary = document.createElement("button"); // Je créer le button
    btnPrimary.type = "button"; // Je lui donne un type button
    btnPrimary.id = "btn-add"; // Je lui donne un id
    btnPrimary.classList.add("btn"); // Je lui ajoute la classe bootstrap btn
    btnPrimary.classList.add("btn-primary"); // Je lui ajoute la classe bootstrap btn-primary
    btnPrimary.textContent = "Add new user"; // Je lui donne du texte
    containerTable.appendChild(btnPrimary); // Je l'ajoute au container table
    // J'ajoute un ecouteur d'evenement au click sur le boutton ajouter
    btnPrimary.addEventListener("click", function() {
        let add = false // Je déclare un booleen pour dire qu'aucun ajout n'a etait effectuer
        addNewUsersInterface(add); // J'apelle la fonction qui cache le container table et traite le contenue des input en lui donnant en parametre le booleen add
    }, false);
}

createTable(usersProfiles, true);

//Exercice 2.4 :
let containerAddUsers = document.getElementById("container-add-users");
// Je déclare la variable message d'erreur
var msgError = document.createElement("p");
//J'ajoute le texte du message d'erreur
msgError.textContent = "Veuillez renseigner tout les champs";
// Je donne une couleur rouge au message d'erreur
msgError.style.color = "red";
// J'ajoute le message d'erreur au containerAddUsers;
containerAddUsers.appendChild(msgError);
// Je cache le message d'erreur
msgError.hidden = true;
// Function qui cache le container table et traite le formulaire
function addNewUsersInterface(add) {
    // Je stocke mon elt html container table dans une variable
    let containerTable = document.getElementById("container-table");
    // Je stocke mon elt html container addUsers dans une variable
    let containerAddUsers = document.getElementById("container-add-users");
    // Je cache le container table
    containerTable.hidden = true;
    //J'affiche le container formulaire
    containerAddUsers.hidden = false;
    // je stocke l'élément html btnAdd dans une variable
    let btnAdd = document.getElementById("btn-add");
    // J'ajoute un ecouteur d'evenement au bouton ajouter
    btnAdd.addEventListener("click", function() {
        // Je stocke l'element l'input surname
        let surname = document.getElementById("surname");
        // Je stocke l'element l'input name
        let name = document.getElementById("name");
        // Je stocke l'element l'input age
        let age = document.getElementById("age");
        // Je stocke l'element l'input town
        let town = document.getElementById("town");
        // Je stocke l'element l'input mail
        let mail = document.getElementById("mail");
        // si add est a false et que les input ont une valeur j'ajoute les valeurs des input au tableau users
        if (add === false && surname.value != "" && name.value != "" && age.value != "" && town.value != "" && age.value != "" && mail.value != "") {
            let surnameToAdd = surname.value;
            let nameToAdd = name.value;
            let ageToAdd = age.value;
            let townToAdd = town.value;
            let mailToAdd = mail.value;
            addNewuser(surnameToAdd, nameToAdd, ageToAdd, townToAdd, mailToAdd);
            // Je fait passer add a true
            add = true
                // J'affiche le container tableau
            containerTable.hidden = false;
            // Je cache le container formulaire
            containerAddUsers.hidden = true;
            // Je supprime l'ancien tableau du dom
            body.removeChild(containerTable);
            // Je crée un nouveau tableau
            createTable(usersProfiles, true);
            //Je cache le messsage d'erreur
            msgError.hidden = true;
        } else {
            //Je cache le messsage d'erreur
            msgError.hidden = false
        }
    }, false);
}

//Exercice 2.5 : 






