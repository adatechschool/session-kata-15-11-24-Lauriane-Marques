//j'ai essayé de faire un type=module avec un import/export mais je n'ai pas réussi à le faire fonctionner
const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

function getLatinCharacterList(string){
    let array= [] //création d'un tableau vide
    for(const char of string){ //pour chaque caractère de la chaîne de caractères
        array.push(char) // on l'ajoute au tableau vide
    }
    return array //on renvoie le tableau à la fin de la fonction
}

//test de la fonction avec une variable
let HW = "Hello World"
//console.log(getLatinCharacterList(HW))
//test de la fonction avec une chaîne de caractères
//console.log(getLatinCharacterList("Hello World"))


function translateLatinCharacter(char){
    morseChar = latinToMorse[char]
    return morseChar
}

//test du dictionnaire pour comprendre comment fonctionne ce genre de variables
/*console.log(latinToMorse[0]) //ne fonctionne pas
console.log(latinToMorse[A]) //pas une variable
console.log(latinToMorse["A"]) //fonctionne avec la lettre en chaîne de caractères */

//test de la fonction 
//console.log(translateLatinCharacter("A")) //fonctionne avec une chaine de caractères
//console.log(translateLatinCharacter(HW)) //ne fonctionne pas avec une variable

function encode(string){
    let upperString = string.toUpperCase() //on passe la chaîne de caractères en majuscules
    let charArray = getLatinCharacterList(upperString) //on utilise la première fonction pour faire epeller la chaîne de caractères
    let morseArray = "" //on définit une chaîne de caractères vide
    //console.log("charArray " + charArray)

    for(const char of charArray){
        morseArray += translateLatinCharacter(char) + " " //pour chaque caractères on le traduit en morse puis on l'ajoute à notre chaîne avec un espace entre chaques lettres
    }
    return morseArray
}

//test fonction encode
console.log(encode("test"))