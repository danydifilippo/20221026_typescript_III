abstract class LavoratoreTax {
    codRedd: number
    coeffRedd: number
    percTasseInps: number
    percTasseIrpef: number
    private tasseInps: number
    private tasseIrpef: number
    private utileTasse: number
    private redditoAnnuoNetto: number
    
    constructor (codRedd: number, coeffRedd: number, percTasseIrpef: number){
        this.codRedd = codRedd
        this.coeffRedd = coeffRedd
        this.percTasseInps = 26
        this.percTasseIrpef = percTasseIrpef
    }

    public getUtileTasse(): number {
        return this.utileTasse
    }
    public getTasseInps(): number {
        return this.tasseInps
    }
    public getTasseIrpef(): number{
        return this.tasseIrpef
    }
    public getRedditoAnnuoNetto(): number{
        return this.redditoAnnuoNetto
    }
 }

class Commerciante extends LavoratoreTax {
    redditoAnnuoLordo: number 

    constructor (redditoAnnuoLordo: number){
        super (45,40,23)
        this.redditoAnnuoLordo= redditoAnnuoLordo
    }
       
    getUtileTasse(): number {
        return this.redditoAnnuoLordo * 0.4
    } 
    getTasseInps(): number {
        return this.getUtileTasse() * 0.26
    }
     getTasseIrpef(): number {
        return this.getUtileTasse() * 0.23
     }
     getRedditoAnnuoNetto(): number {
        return this.redditoAnnuoLordo - this.getTasseInps() - this.getTasseIrpef()
     }
 }

let comm1 = new Commerciante (40000)
console.log(comm1)
console.log(comm1.getUtileTasse());
console.log(comm1.getTasseInps());
console.log(comm1.getTasseIrpef());
console.log(comm1.getRedditoAnnuoNetto());




