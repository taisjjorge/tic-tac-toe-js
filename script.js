var player, winner = null;
var playerSelected = document.getElementById('player-selected')
var winnerSelected = document.getElementById('winner-selected')
var quadrate = document.getElementsByClassName('quadrate');



function displayButton() {
    const buttonHighLight = document.getElementById('button--noclick');
    buttonHighLight.classList.toggle('button--click');

}

function displayQuadrate(id) {

    if (winner !== null) {
        return;
    }

    var quadrate = document.getElementById(id);
    if (quadrate.innerHTML !== '-') {
        return;
    }

    quadrate.innerHTML = player;
    quadrate.style.color = '#fff';
    quadrate.style.backgroundColor = '#7d38db';

    if (player === 'X') {
        player = 'O';
    } else {
        player = 'X'
    }

    displayPlayer(player);
    checkWinner();
}

function displayPlayer(value) {
    player = value;
    playerSelected.innerHTML = player;
}

displayPlayer('X');



function checkWinner() {
    var quadrate1 = document.getElementById(1)
    var quadrate2 = document.getElementById(2)
    var quadrate3 = document.getElementById(3)
    var quadrate4 = document.getElementById(4)
    var quadrate5 = document.getElementById(5)
    var quadrate6 = document.getElementById(6)
    var quadrate7 = document.getElementById(7)
    var quadrate8 = document.getElementById(8)
    var quadrate9 = document.getElementById(9)

    if (checkSequence(quadrate1, quadrate2, quadrate3)) {
        changeColorQuadrate(quadrate1, quadrate2, quadrate3);
        changeWinner(quadrate1);
    }

    if (checkSequence(quadrate4, quadrate5, quadrate6)) {
        changeColorQuadrate(quadrate4, quadrate5, quadrate6);
        changeWinner(quadrate4);
        return;
    }

    if (checkSequence(quadrate7, quadrate8, quadrate9)) {
        changeColorQuadrate(quadrate7, quadrate8, quadrate9);
        changeWinner(quadrate7);
        return;
    }

    if (checkSequence(quadrate1, quadrate4, quadrate7)) {
        changeColorQuadrate(quadrate1, quadrate4, quadrate7);
        changeWinner(quadrate1);
        return;
    }

    if (checkSequence(quadrate2, quadrate5, quadrate8)) {
        changeColorQuadrate(quadrate2, quadrate5, quadrate8);
        changeWinner(quadrate2);
        return;
    }
    if (checkSequence(quadrate3, quadrate6, quadrate9)) {
        changeColorQuadrate(quadrate3, quadrate6, quadrate9);
        changeWinner(quadrate3);
        return;
    }
    if (checkSequence(quadrate1, quadrate5, quadrate9)) {
        changeColorQuadrate(quadrate1, quadrate5, quadrate9);
        changeWinner(quadrate1);
        return;
    }

    if (checkSequence(quadrate3, quadrate5, quadrate7)) {
        changeColorQuadrate(quadrate3, quadrate5, quadrate7);
        changeWinner(quadrate3);
        return;
    }

}

function changeWinner(quadrate) {
    winner = quadrate.innerHTML;
    winnerSelected.innerHTML = winner;
}

function changeColorQuadrate(quadrate1, quadrate2, quadrate3) {
    quadrate1.style.backgroundColor = '#5df549';
    quadrate1.style.color = '#6505eb';
    quadrate2.style.backgroundColor = '#5df549';
    quadrate2.style.color = '#6505eb';
    quadrate3.style.backgroundColor = '#5df549';
    quadrate3.style.color = '#6505eb';
}



function checkSequence(quadrate1, quadrate2, quadrate3) {
    var isEqual = false;

    if (quadrate1.innerHTML !== '-' && quadrate1.innerHTML === quadrate2.innerHTML && quadrate2.innerHTML === quadrate3.innerHTML) {
        isEqual = true;
    }

    return isEqual;
}

function restart() {
    winner = null;
    winnerSelected.innerHTML = '';

    for (i = 1; i <= 9; i++) {
        var quadrate = document.getElementById(i);
        quadrate.style.backgroundColor = '#7BE26E';
        quadrate.style.color = '#7BE26E';
        quadrate.innerHTML = '-';
    }

    displayPlayer('X');
}