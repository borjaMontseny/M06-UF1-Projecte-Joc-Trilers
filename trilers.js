// crearem el taulell amb els trilers seqons la dificultad i multiplicadors desd'una matriu

// les files representen la dificultat (0 , 1 , 2)
// i dins d'aquestes hi ha:
// columnes 0 = trilers |  columnes 1 = multiplicador
var trilersIMultiplicadors = [[3, 2], [5, 5], [7, 10]];

var nomUsuari = prompt('Benvingut al casino IBC\n\nIntrodueix el teu nom:', 'Player');

do {

    var dificultatEscollida = parseInt(prompt('Escolleix la dificultat:\n\n0. Fàcil         [ 3 Trilers & Beneficis X 2 ]\n\n1. Intermig  [ 5 Trilers & Beneficis X 5 ]\n\n2. Difícil       [ 7 Trilers & Beneficis X 10 ]\n\n', 0));

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
document.write('<button onclick="jocTrilers()">Remena i aposta!</button>');

// tanquem el div board de fora
document.write('</div>');

document.write('<div id="mobil-vertical">');
document.write('Si us plau, per jugar col·loca el mòbil en posició hotitzontal.');
document.write('</div>');

// aquesta funcio és joc del trilers en si, d'aquesta forma només s'activa al donar clic al botó
function jocTrilers() {

    let dinersApostats = Number(prompt('Quants diners vols apostar?'));

}

