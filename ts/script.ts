abstract class Calcolatore {
    codRedd: number
    redditoAnnuoLordo: number
    private tasseInps: number
    private tasseIrpef: number
    private utileTasse: number
    private redditoAnnuo: number
    
    constructor (codRedd: number, redditoAnnuoLordo: number){
        this.codRedd = codRedd;
        this.redditoAnnuoLordo = redditoAnnuoLordo;
    }

    abstract getUtileTasse: number
    abstract getTasseInps: number
    abstract getTasseIrpef: number
    abstract getRedditoAnnuo: number
 }

class Commerciante extends Calcolatore {
    codRedd: 
}