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
const form = document.getElementById('numbers-answer')
const numberList = document.getElementById('list-numbers')
const inputValue = document.querySelectorAll('input')
const messageValue = document.getElementById('message')

// * Impostazoni iniziali
const min = 1;
const max = 50;
const totalNumbers = 5;
let time = 30;

countdown.innerText = time;

//* Fase di Elaborazione

// Genero 5 numero random
const numbers = getDifferentRandomNumbers(min , max , totalNumbers);
console.log(numbers);

// Inserisco i numeri in pagina
let items = '';
for(let i = 0;  i < numbers.length; i++ ){
    items += `<li>${numbers[i]}</li>`
}
numberList.innerHTML = items;

// Inizio il conto alla rovescia

const interval = setInterval(() =>{
    countdown.innerText = --time;
    if(time === 0){
        clearInterval(interval);
        form.classList.remove('d-none')
        numberList.classList.add('d-none')
    }
},1000)

form.addEventListener('submit' , event =>{
    event.preventDefault();

    const userGuess = [];

    for(let i = 0; i < inputValue.length; i++ ) {
        const input = inputValue[i];
        userGuess.push(input.value)
    }
    console.log(userGuess);
})

// Controlliamo quali numeri giusto abbiamo

const correctNumbers = [];
for (let guess of userGuess) {
    if(guess.includes(guess)) correctNumbers.push(guess);
}

// Fase output

if(correctNumbers.length === numbers.length) message.innerText = `Hai indovinato ${correctNumbers.length} numeri (${correctNumbers})`;
