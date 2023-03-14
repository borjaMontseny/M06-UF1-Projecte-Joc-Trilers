// crearem el taulell amb els trilers seqons la dificultad i multiplicadors des d'una matriu

// les files de columna 0 representen la dificultat (0 , 1 , 2) | la columna 1 els multiplicadors
// i dins d'aquestes hi ha:
// columnes 0 = trilers |  columnes 1 = multiplicador
var trilersIMultiplicadors = [[3, 2], [5, 5], [7, 10]];

var nomUsuari = prompt('Benvingut al casino IBC\n\nIntrodueix el teu nom:', 'Player');

// mentres !(no sigui un numero), osigui: mentres sigui un numero. Preguntem en bucle
while (!(isNaN(nomUsuari))) {
    
    nomUsuari = prompt('Siusplau, introdueix un nom vàlid', 'Player');

}

do {

    var dificultatEscollida = parseInt(prompt('Escolleix la dificultat:\n\n0. Fàcil         [ 3 Trilers & Beneficis X 2 ]\n\n1. Intermig  [ 5 Trilers & Beneficis X 5 ]\n\n2. Difícil      [ 7 Trilers & Beneficis X 10 ]\n\n', 0));

} while (!(dificultatEscollida >= 0 && dificultatEscollida <= 2));

// CARREGUEM LA PART VISUAL
// iniciem el primer div board

document.write('<div id="board">');
document.write('<div id="board">');

for (let index = 0; index < trilersIMultiplicadors[dificultatEscollida][0]; index++) {

    document.write('<div class="beaker" id="' + index + '">' + index + '</div>');

}

// tanquem el div board de dins
document.write('</div>');

// creem el botó associat a la funcio que inicia el joc
document.write('<button class="glow-on-hover" onclick="jocTrilers()">JUGAR</button>');

// tanquem el div board de fora
document.write('</div>');

document.write('<div id="mobil-vertical">');
document.write('Si us plau, per jugar col·loca el mòbil en posició hotitzontal.');
document.write('</div>');

// aquesta funcio és joc del trilers en si, s'activa al donar clic al botó

let saldoRestant = 0;

let dinersApostats;

let numRandom;

let numUsuari;

function jocTrilers() {

    dinersApostats = Number(prompt('Quants diners vols apostar?'));

    while (dinersApostats <= 0) {

        dinersApostats = Number(prompt('Introdueix una quantitat vàlida.', 1));

    }

    numRandom = numAleatori(1, (trilersIMultiplicadors[dificultatEscollida][0]) - 1);

    numUsuari = parseInt(prompt('En que cubilet creus que està la boleta?'));

    if (numRandom == numUsuari) {

        alert('Enhorabona ' + nomUsuari +', has encertat!\nLa boleta estava al cubilet ' + numRandom);

        dinersApostats = dinersApostats * trilersIMultiplicadors[dificultatEscollida][1];

        saldoRestant += dinersApostats;

        confirmJugar();

    } else {

        saldoRestant = saldoRestant - dinersApostats;

        alert('Has perdut!\nLa boleta estava al cubilet ' + numRandom + ' i tu havies dit que era al ' + numUsuari);

        confirmJugar();

    }

}

// per a poder crear randoms entre min inclosos i max inclosos
function numAleatori(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function confirmJugar() {
    let text = 'Tens ' + saldoRestant + '€.\nVols continuar jugant?';
    if (confirm(text) == true) {

        jocTrilers();

    } else {

        location.reload();

    }
}

