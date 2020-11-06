class Smietnik {
    constructor(type, pietro=null, place=null) {
        // Typ śmietnika (papier, plastik, bio)
        this.type = type;
        // Piętro na którym śmietnik stoi
        this.pietro = pietro;
        // Numer miejsca, w którym śmietnik stoi
        this.place = place;
    }
}


const smietnikPapier = new Smietnik('papier');
const smietnikCombo = new Smietnik(['papier', 'bio', 'plastik']);

const infoDiv = document.getElementById('info');
const infoType = document.getElementById('smietnikTyp');
const infoPietro = document.getElementById('smietnikPietro');

const showInfo = (type, pietro) => {
    infoDiv.style.display = 'flex';
    infoType.innerText = type;
    infoPietro.innerText = pietro;
}