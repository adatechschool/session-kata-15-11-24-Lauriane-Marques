function getLatinCharacterList(string){
    let array= [] //création d'un tableau vide
    for(const char of string){ //pour chaque caractère de la chaîne de caractères
        array.push(char) // on l'ajoute au tableau vide
    }
    return array //on renvoie le tableau à la fin de la fonction
}

//test de la fonction avec une variable
let HW = "Hello World"
console.log(getLatinCharacterList(HW))