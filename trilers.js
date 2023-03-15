// crearem el taulell amb els trilers seqons la dificultad i multiplicadors des d'una matriu

// les files son la dificultat, columna 0 representen els trilers (0 , 1 , 2) | la columna 1 els multiplicadors
var trilersIMultiplicadors = [[3, 2], [5, 5], [7, 10]];

var nomUsuari;

var dificultatEscollida;

do {

    nomUsuari = prompt('Benvingut al casino IBC\n\nIntrodueix el teu nom:', 'Player');

    dificultatEscollida = parseInt(prompt('Escolleix la dificultat:\n\n0. Fàcil         [ 3 Trilers & Beneficis X 2 ]\n\n1. Intermig  [ 5 Trilers & Beneficis X 5 ]\n\n2. Difícil      [ 7 Trilers & Beneficis X 10 ]\n\n', 0));

} while (!(dificultatEscollida >= 0 && dificultatEscollida <= 2));

// CARREGUEM LA PART VISUAL
// iniciem el primer div board

document.write('<div id="board">');
document.write('<div id="board">');

// imprimim cubilets segons la dificultat (qtat de cubilets guardada al array a les columnes 0)
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

    numRandom = crearAleatori(1, (trilersIMultiplicadors[dificultatEscollida][0]) - 1);

    // probes pel desenvolupador
    console.log('La boleta està al cubilet ' + numRandom);

    numUsuari = parseInt(prompt('En que cubilet creus que està la boleta?'));

    while ((numUsuari < 0 && numUsuari > trilersIMultiplicadors[dificultatEscollida][0]) || isNaN(numUsuari)) {

        numUsuari = parseInt(prompt("Siusplau\nDiga'm un cubilet entre 0 i " + trilersIMultiplicadors[dificultatEscollida][0] + '!'));

    }

    if (numRandom == numUsuari) {

        alert('Enhorabona ' + nomUsuari + ', has encertat!\nLa boleta estava al cubilet ' + numRandom);

        dinersApostats = dinersApostats * trilersIMultiplicadors[dificultatEscollida][1];

        saldoRestant += dinersApostats;

    } else {

        saldoRestant = saldoRestant - dinersApostats;

        alert('Has perdut!\nLa boleta estava al cubilet ' + numRandom + ' i apostat al ' + numUsuari);

    }

    // juguem de nou o reiniciem per així poder cambiar la dificultat
    confirmJugar();

}

// per a poder crear randoms entre min inclosos i max inclosos
function crearAleatori(min, max) {
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

