/*
Chiedere all’utente di inserire una parola:
Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer attraverso una funzione.
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari attraverso un'altra funzione
Dichiariamo chi ha vinto.
Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
*/

// PARTE DEL GIOCO PALINDROMO

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

const buttonOddOrEven = document.querySelector('.check-odd-or-even');

let OddOrEven = document.querySelector('.odd-or-even');

let number = document.querySelector('.number');

const result = document.getElementById('result');

let computerChoice = document.getElementById('computer-choice');

function getRandomNumber() {
    const randomNumber = (Math.floor(Math.random() * 4) + 1);
    return randomNumber;
}



buttonOddOrEven.addEventListener('click', function(){
    if (OddOrEven.value == 'pari' || OddOrEven.value == 'dispari'){
        result.innerHTML = OddOrEven.value + ' e il numero ' + number.value;
    } else {
        result.innerHTML = "Per favore ricontrolla i dati!";
    }

    computerChoice.innerHTML = getRandomNumber();
    
})





























