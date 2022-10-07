"user strict";

const btn = document.getElementById('calcola');

const calcolaBiglietto = function(){
    let km = document.getElementById("km").value;
    console.log("Numero di chilometri da percorrere :", km);

    let age = document.getElementById("age").value;
    console.log("Età del passeggero :", age);

    const prezzoKm = 0.21;
    const scontoUnder = 0.20;
    const prezzoOver = 0.40;
    let prezzoBiglietto = km * prezzoKm;
    console.log("Prezzo del biglietto :", prezzoBiglietto);
 
    if(age <= 18){
        prezzoBiglietto -= prezzoBiglietto * scontoUnder;
        console.log('Il prezzo con lo sconto under 18 è di : ' + prezzoBiglietto);

        let centesimi = prezzoBiglietto;
        centesimi = centesimi.toFixed(2);
        console.log('Il prezzo con i decimali : ' + centesimi);
    
        document.getElementById('prezzoFinale').innerHTML = centesimi + "€";
    } 
    else if(age >= 65){
        prezzoBiglietto -= prezzoBiglietto * prezzoOver;
        console.log('Il prezzo con lo sconto over 65 è di : ' + prezzoBiglietto);

        let centesimi = prezzoBiglietto;
        centesimi = centesimi.toFixed(2);
        console.log('Il prezzo con i decimali : ' + centesimi);
    
        document.getElementById('prezzoFinale').innerHTML = centesimi + "€";
    } 
    else{
        let centesimi = prezzoBiglietto;
        centesimi = centesimi.toFixed(2);
        console.log('Il prezzo in decimali senza sconto età è di : ' + centesimi);
    
        document.getElementById('prezzoFinale').innerHTML = centesimi + "€";
    } 
}

btn.addEventListener('click', calcolaBiglietto);