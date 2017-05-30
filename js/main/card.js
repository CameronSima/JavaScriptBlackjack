
class Card { 
    constructor(value, rank) {
        this.value = value;
        this.rank = rank;
    }
    
    toString() {
        return this.value + ' of ' + this.rank;
    }
}
