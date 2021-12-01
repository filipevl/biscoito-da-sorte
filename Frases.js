class Frases {
    constructor(frases) {
        this.setFrases(frases);
    }
    
    setFrases(frases){
        this.frases = frases;
    }

    getFrase(id) {
        return this.frases[id];
    }
    getLength(){
        return this.frases.length;
    }
}

module.exports = Frases;