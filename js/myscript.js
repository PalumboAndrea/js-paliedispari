// PARTE DEL GIOCO PALINDROMO
/*
Chiedere all’utente di inserire una parola:
Creare una funzione per capire se la parola inserita è palindroma
*/

const word = document.querySelector('.input');

const button = document.querySelector('.btn');

const palindrome = document.getElementById('palindrome');


function isPalindrome(s,i) {
    return (i=i||0)<0||i>=s.length>>1||s[i]==s[s.length-1-i]&&isPalindrome(s,++i);
}


button.addEventListener('click', function(){
    if ((isPalindrome(word.value)) === true){
        palindrome.append('E\' palindroma!');
    } else{
        palindrome.append('Purtroppo no!');
    }
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

    let random = getRandomNumber(1, 5);

    let OddOrEvenResult = getOddOrEvenSum(random, number.value);

    

    if ((OddOrEven.value == 'pari' || OddOrEven.value == 'dispari') && (number.value<= 5 && number.value>=1)){
        userChoice.innerHTML = OddOrEven.value + ' e il numero ' + number.value;
    } else {
        alert("Per favore ricontrolla i dati!");
        return;
    }

    if (OddOrEven.value == finalResult){
        winOrNot.innerHTML = 'Hai Vinto!'
    } else{
        winOrNot.innerHTML = 'Hai Perso!'
    }

    computerChoice.innerHTML = random;

    result.innerHTML = 'La somma dei due numeri è: ' + (random + parseInt(number.value, 10)) + ' ed è un numero: ' + OddOrEvenResult ;
    
})

































