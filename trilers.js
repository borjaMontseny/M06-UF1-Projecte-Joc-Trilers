// crearem el taulell amb els trilers seqons la dificultad i multiplicadors des d'una matriu

// les files son la dificultat, columna 0 representen els trilers | la columna 1 els multiplicadors
var trilersIMultiplicadors = [[3, 2], [5, 5], [7, 10]];

var nomUsuari;

var dificultatEscollida;

// es demana nom (amb comprovació) i dificultat (amb comprovació), si es falla es torna a demanar desde nom
do {

    nomUsuari = prompt('Benvingut al casino IBC\n\nIntrodueix el teu nom:', 'Player');

    while (nomUsuari == "" || nomUsuari === null) {

        nomUsuari = prompt('Siusplau\nIntrodueix un nom vàlid:', 'Player');

    }

    dificultatEscollida = parseInt(prompt('Escolleix la dificultat:\n\n0. Fàcil         [ 3 Trilers & Beneficis X 2 ]\n\n1. Intermig  [ 5 Trilers & Beneficis X 5 ]\n\n2. Difícil      [ 7 Trilers & Beneficis X 10 ]\n\n', 0));

} while (!(dificultatEscollida >= 0 && dificultatEscollida <= 2));

// CARREGUEM LA PART VISUAL
// iniciem el primer div board

document.write('<div id="board">');
document.write('<div id="board">');

// imprimim cubilets segons la dificultat (qtat de cubilets guardada al array a les columnes 0 segons dificultat (fila))
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

let saldoRestant = 0; // per a poder sumar la inicialitzo en 0

let dinersApostats = 0;

let numRandom = 0;

let numUsuari = 0;

function jocTrilers() {

    // demanem els diners a apostar
    dinersApostats = Number(prompt('Quants diners vols apostar?'));

    // comprovant de que ho introïm una quantitat vàlida
    while (dinersApostats <= 0 || isNaN(dinersApostats)) {

        dinersApostats = Number(prompt('Introdueix una quantitat mínima, vàlida.', 1));

    }

    numRandom = crearAleatori(1, (trilersIMultiplicadors[dificultatEscollida][0] - 1));

    // probes per al desenvolupador, per saber acertar sempre (o no)
    console.log('La boleta està al cubilet ' + numRandom);

    // bucle per introduir num dins del rang de cubilets generats
    numUsuari = parseInt(prompt('En que cubilet creus que està la boleta?', 0));

    while ((numUsuari < 0 || numUsuari > (trilersIMultiplicadors[dificultatEscollida][0] - 1)) || isNaN(numUsuari)) {

        numUsuari = parseInt(prompt("Siusplau\nDiga'm un cubilet entre 0 i " + (trilersIMultiplicadors[dificultatEscollida][0] - 1) + '!'));

    }

    // comprobacions de si hem acertat
    if (numRandom == numUsuari) {

        alert('Enhorabona ' + nomUsuari + ', has encertat!\nLa boleta estava al cubilet ' + numRandom + ', i has apostat ' + dinersApostats + '€ al cubilet ' + numUsuari);

        dinersApostats = dinersApostats * trilersIMultiplicadors[dificultatEscollida][1];

        saldoRestant += dinersApostats;

    } else {

        saldoRestant = saldoRestant - dinersApostats;

        alert('Quina pena ' + nomUsuari + ', has perdut!\nLa boleta estava al cubilet ' + numRandom + ', i has apostat ' + dinersApostats + '€ al cubilet ' + numUsuari);

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

// el confirm que reinicia una altra aposta, o cancelar per reiniciar tot.
function confirmJugar() {
    let text = 'Tens ' + saldoRestant + '€.\nVols continuar jugant?';
    if (confirm(text) == true) {

        jocTrilers();

    } else {

        location.reload();

    }
}