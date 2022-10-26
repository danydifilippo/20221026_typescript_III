"use strict";
class LavoratoreTax {
    constructor(codRedd, coeffRedd, percTasseIrpef) {
        this.codRedd = codRedd;
        this.coeffRedd = coeffRedd;
        this.percTasseInps = 26;
        this.percTasseIrpef = percTasseIrpef;
    }
    getUtileTasse() {
        return this.utileTasse;
    }
    getTasseInps() {
        return this.tasseInps;
    }
    getTasseIrpef() {
        return this.tasseIrpef;
    }
    getRedditoAnnuoNetto() {
        return this.redditoAnnuoNetto;
    }
}
class Commerciante extends LavoratoreTax {
    constructor(redditoAnnuoLordo) {
        super(45, 40, 23);
        this.redditoAnnuoLordo = redditoAnnuoLordo;
    }
    getUtileTasse() {
        return this.redditoAnnuoLordo * 0.4;
    }
    getTasseInps() {
        return this.getUtileTasse() * 0.26;
    }
    getTasseIrpef() {
        return this.getUtileTasse() * 0.23;
    }
    getRedditoAnnuoNetto() {
        return this.redditoAnnuoLordo - this.getTasseInps() - this.getTasseIrpef();
    }
}
let comm1 = new Commerciante(40000);
console.log(comm1);
console.log(comm1.getUtileTasse());
console.log(comm1.getTasseInps());
console.log(comm1.getTasseIrpef());
console.log(comm1.getRedditoAnnuoNetto());
