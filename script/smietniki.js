class Smietnik {
    constructor(type, pietro, place) {
        // Typ śmietnika (papier, szkło, mieszany)
        this.type = type;
        // Piętro na którym śmietnik stoi
        this.pietro = pietro;
        // Numer miejsca, w którym śmietnik stoi
        this.place = place;
    }
}


// Przykład jak stworzyć śmietnik
const smietnikParter = new Smietnik('papier', 0, 1);