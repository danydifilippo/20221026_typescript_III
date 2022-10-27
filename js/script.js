"use strict";
class LavoratoreTax {
    constructor(codRedd, coeffRedd, percTasseInps, percTasseIrpef, redditoAnnuoLordo, tasseInps, tasseIrpef) {
        this.codRedd = codRedd;
        this.coeffRedd = coeffRedd;
        this.percTasseInps = 26;
        this.percTasseIrpef = percTasseIrpef;
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
    }
    getCodRedd() {
        return this.codRedd;
    }
    getCoeffRedd() {
        return this.coeffRedd;
    }
    getPercInps() {
        return this.percTasseInps;
    }
    getPercIrpef() {
        return this.percTasseIrpef;
    }
    getTasseInps() {
        return this.tasseInps;
    }
    setTasseInps(tasseInps) {
        this.tasseInps = this.tasseInps;
    }
    getTasseIrpef() {
        return this.tasseIrpef;
    }
    setTasseIrpef(tasseIrpef) {
        this.tasseIrpef = this.tasseIrpef;
    }
}
class Commerciante extends LavoratoreTax {
    constructor(redditoAnnuoLordo) {
        super(45, 40, 26, 23, redditoAnnuoLordo, 0.26, 0.23);
    }
    getUtileTasse() {
        return this.redditoAnnuoLordo * 0.4;
    }
    getTasseInps() {
        return this.getUtileTasse() * this.tasseInps;
    }
    getTasseIrpef() {
        return this.getUtileTasse() * this.tasseIrpef;
    }
    getRedditoAnnuoNetto() {
        return this.redditoAnnuoLordo - this.getTasseInps() - this.getTasseIrpef();
    }
}
class Intermediario extends LavoratoreTax {
    constructor(redditoAnnuoLordo) {
        super(46, 62, 26, 25, redditoAnnuoLordo, 0.26, 0.25);
    }
    getUtileTasse() {
        return this.redditoAnnuoLordo * 0.62;
    }
    getTasseInps() {
        return this.getUtileTasse() * this.tasseInps;
    }
    getTasseIrpef() {
        return this.getUtileTasse() * this.tasseIrpef;
    }
    getRedditoAnnuoNetto() {
        return this.redditoAnnuoLordo - this.getTasseInps() - this.getTasseIrpef();
    }
}
class Forfettario extends LavoratoreTax {
    constructor(redditoAnnuoLordo) {
        super('tutte', 78, 26, 15, redditoAnnuoLordo, 0.26, 0.15);
    }
    getUtileTasse() {
        return this.redditoAnnuoLordo * 0.78;
    }
    getTasseInps() {
        return this.getUtileTasse() * this.tasseInps;
    }
    getTasseIrpef() {
        return this.getUtileTasse() * this.tasseIrpef;
    }
    getRedditoAnnuoNetto() {
        return this.redditoAnnuoLordo - this.getTasseInps() - this.getTasseIrpef();
    }
}
class Immobiliare extends LavoratoreTax {
    constructor(redditoAnnuoLordo) {
        super(68, 86, 26, 35, redditoAnnuoLordo, 0.26, 0.35);
    }
    getUtileTasse() {
        return this.redditoAnnuoLordo * 0.86;
    }
    getTasseInps() {
        return this.getUtileTasse() * this.tasseInps;
    }
    getTasseIrpef() {
        return this.getUtileTasse() * this.tasseIrpef;
    }
    getRedditoAnnuoNetto() {
        return this.redditoAnnuoLordo - this.getTasseInps() - this.getTasseIrpef();
    }
}
class Professionisti extends LavoratoreTax {
    constructor(redditoAnnuoLordo) {
        super(64, 78, 26, 23, redditoAnnuoLordo, 0.26, 0.23);
    }
    getUtileTasse() {
        return this.redditoAnnuoLordo * 0.78;
    }
    getTasseInps() {
        return this.getUtileTasse() * this.tasseInps;
    }
    getTasseIrpef() {
        return this.getUtileTasse() * this.tasseIrpef;
    }
    getRedditoAnnuoNetto() {
        return this.redditoAnnuoLordo - this.getTasseInps() - this.getTasseIrpef();
    }
}
class AltriLavoratori extends LavoratoreTax {
    constructor(redditoAnnuoLordo) {
        super('tutti', 67, 26, 25, redditoAnnuoLordo, 0.26, 0.25);
    }
    getUtileTasse() {
        return this.redditoAnnuoLordo * 0.67;
    }
    getTasseInps() {
        return this.getUtileTasse() * this.tasseInps;
    }
    getTasseIrpef() {
        return this.getUtileTasse() * this.tasseIrpef;
    }
    getRedditoAnnuoNetto() {
        return this.redditoAnnuoLordo - this.getTasseInps() - this.getTasseIrpef();
    }
}
window.onload = () => {
    let cod = document.getElementById('cod');
    let reddito = document.getElementById('reddito');
    let btn = document.getElementById('btn');
    btn.addEventListener('click', function () {
        let risultato;
        switch (cod.value) {
            case 'Commer':
                risultato = new Commerciante(Number(reddito === null || reddito === void 0 ? void 0 : reddito.value));
                break;
            case 'Interm':
                risultato = new Intermediario(Number(reddito === null || reddito === void 0 ? void 0 : reddito.value));
                break;
            case 'Immob':
                risultato = new Immobiliare(Number(reddito === null || reddito === void 0 ? void 0 : reddito.value));
                break;
            case 'Profes':
                risultato = new Professionisti(Number(reddito === null || reddito === void 0 ? void 0 : reddito.value));
                break;
            case 'Forfet':
                risultato = new Forfettario(Number(reddito === null || reddito === void 0 ? void 0 : reddito.value));
                break;
            case 'Altro':
                risultato = new AltriLavoratori(Number(reddito === null || reddito === void 0 ? void 0 : reddito.value));
                break;
        }
        let result = document.getElementById('result');
        result.innerHTML = `<p><strong>Cod. Lavoratore: </strong>${risultato.getCodRedd()}</p>
        <p><strong>Coefficiente di redditività: </strong>${risultato.getCoeffRedd()}</p>
        <p><strong>Percentuale Tasse Inps: </strong>${risultato.getPercInps()}%</p>
        <p><strong>Percentuale Tasse Irpef: </strong>${risultato.getPercIrpef()}%</p>
        <p><strong>Imponibile Tasse: </strong>${risultato.getUtileTasse()}</p>
        <p><strong>Totale Tasse Inps: </strong>${risultato.getTasseInps()}</p>
        <p><strong>Totale Tasse Irpef: </strong>${risultato.getTasseIrpef()}</p>
        <p><strong>Reddito Annuo Netto: </strong>${risultato.getRedditoAnnuoNetto()}</p>`;
        console.log(risultato.getPercIrpef());
    });
};
