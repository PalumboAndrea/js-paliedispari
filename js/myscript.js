// PARTE DEL GIOCO PALINDROMO
/*
Chiedere all’utente di inserire una parola:
Creare una funzione per capire se la parola inserita è palindroma
*/

let word = document.querySelector('.input');

const button = document.querySelector('.btn');

const palindrome = document.getElementById('palindrome');


function checkPalindrome(string) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

button.addEventListener('click', function(){
    if ((checkPalindrome(word.value)) === true){
        palindrome.append('E\' palindroma!');
    } else{
        palindrome.append('Purtroppo no!');
    }
    return;
})




// PARTE DEL GIOCO PARI O DISPARI
/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer attraverso una funzione.
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari attraverso un'altra funzione
Dichiariamo chi ha vinto.
*/

const buttonOddOrEven = document.querySelector('.check-odd-or-even');

let OddOrEven = document.querySelector('.odd-or-even');

let number = document.querySelector('.number');

const userChoice = document.getElementById('user-choice');

let computerChoice = document.getElementById('computer-choice');

let result = document.getElementById('result');

let winOrNot = document.createElement('h2');
let gameOddOrEven = document.querySelector('.game-odd-or-even');
gameOddOrEven.append(winOrNot);


function getRandomNumber(firstNumber, secondNumber) {
    const randomNumber = Math.floor(Math.random() * (secondNumber - firstNumber + 1) + firstNumber);
    return randomNumber;
}

function getOddOrEvenSum (firstNumber, secondNumber){
    
    if ((firstNumber + parseInt(secondNumber, 10)) % 2 == 0){
        finalResult = 'pari'
    } else {
        finalResult = 'dispari'
    }
    return finalResult;
}

buttonOddOrEven.addEventListener('click', function(){

    if ((OddOrEven.value == 'pari' || OddOrEven.value == 'dispari') && (number.value<= 5 && number.value>=1)){
        userChoice.innerHTML = OddOrEven.value + ' e il numero ' + number.value;
    } else {
        alert("Per favore ricontrolla i dati!");
        return;
    }

    let random = getRandomNumber(1, 5);

    computerChoice.innerHTML = random;

    let OddOrEvenResult = getOddOrEvenSum(random, number.value);

    result.innerHTML = 'La somma dei due numeri è: ' + (random + parseInt(number.value, 10)) + ' ed è un numero: ' + OddOrEvenResult ;

    if (OddOrEven.value == finalResult){
        winOrNot.innerHTML = 'Hai Vinto!'
    } else{
        winOrNot.innerHTML = 'Hai Perso!'
    }
    
})

































