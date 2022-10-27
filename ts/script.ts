abstract class LavoratoreTax {
    codRedd: number
    coeffRedd: number
    percTasseInps: number
    percTasseIrpef: number
    private tasseInps: number
    private tasseIrpef: number
    private utileTasse: number
    private redditoAnnuoNetto: number
    
    constructor (codRedd: number, coeffRedd: number, percTasseIrpef: number, utileTasse: number, tasseInps: number, tasseIrpef: number, redditoAnnuoNetto: number){
        this.codRedd = codRedd
        this.coeffRedd = coeffRedd
        this.percTasseInps = 26
        this.percTasseIrpef = percTasseIrpef
        this.utileTasse = utileTasse
        this.tasseInps = tasseInps
        this.tasseIrpef = tasseIrpef
        this.redditoAnnuoNetto = redditoAnnuoNetto
    }
    
    public getUtileTasse(): number {
        return this.utileTasse
    }
    public setUtileTasse(utileTasse:number): void {
        this.utileTasse = utileTasse
    }

    public getTasseInps(): number {
        return this.tasseInps
    }
    public setTasseInps(tasseInps:number): void {
        this.tasseInps = this.tasseInps
    }

    public getTasseIrpef(): number{
        return this.tasseIrpef
    }
    public setTasseIrpef(tasseIrpef:number): void {
        this.tasseIrpef = this.tasseIrpef
    }

    public getRedditoAnnuoNetto(): number{
        return this.redditoAnnuoNetto
    }
    public setRedditoAnnuoNetto(redditoAnnuoNetto:number): void {
        this.redditoAnnuoNetto = this.redditoAnnuoNetto
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




