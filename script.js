console.log('JS OK')

// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


//* Funzioni

const getDifferentRandomNumbers = (min, max , tot) => {
    const numbers = [];
    while(numbers.length < tot){
        const randomNumber = Math.floor(Math.random() * (max - min + 1))
        + min;
        if(!numbers.includes(randomNumber)) numbers.push(randomNumber);
    }
    return numbers;
}

//* DOM
const countdown = document.getElementById('countdown')

// * Impostazoni iniziali
const min = 1;
const max = 50;
const totalNumbers = 5;
let time = 30;

countdown.innerText = time;

//* Fase di Elaborazione

// Genero 5 numero random
const numbers = getDifferentRandomNumbers(min , max , totalNumbers);