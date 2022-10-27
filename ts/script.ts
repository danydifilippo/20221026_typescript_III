abstract class LavoratoreTax {
    codRedd: number
    coeffRedd: number
    percTasseInps: number
    percTasseIrpef: number
    redditoAnnuoLordo: number 
    protected tasseInps: number
    protected tasseIrpef: number

    
    constructor (codRedd: any, coeffRedd: number, percTasseInps: number, percTasseIrpef: number, redditoAnnuoLordo: number, tasseInps: number, tasseIrpef: number){
        this.codRedd = codRedd
        this.coeffRedd = coeffRedd
        this.percTasseInps = 26
        this.percTasseIrpef = percTasseIrpef
        this.redditoAnnuoLordo = redditoAnnuoLordo
        this.tasseInps = tasseInps
        this.tasseIrpef = tasseIrpef
    }
    
    getCodRedd(){
        return this.codRedd
    }
    getCoeffRedd(){
        return this.coeffRedd
    }
    getPercInps(){
        return this.percTasseInps
    }
    getPercIrpef(){
        return this.percTasseIrpef
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

 }

class Commerciante extends LavoratoreTax {
    protected utileTasse?: number
    protected redditoAnnuoNetto?: number

    constructor (redditoAnnuoLordo:number){
        super (45,40,26,23,redditoAnnuoLordo,0.26,0.23)
    }
       
    getUtileTasse(): number {
        return this.redditoAnnuoLordo * 0.4
    } 
    getTasseInps(): number {
        return this.getUtileTasse() * this.tasseInps
    }
     getTasseIrpef(): number {
        return this.getUtileTasse() * this.tasseIrpef
     }
     getRedditoAnnuoNetto(): number {
        return this.redditoAnnuoLordo - this.getTasseInps() - this.getTasseIrpef()
     }
 }

 class Intermediario extends LavoratoreTax {
    protected utileTasse?: number
    protected redditoAnnuoNetto?: number

    constructor (redditoAnnuoLordo:number){
        super (46,62,26,25,redditoAnnuoLordo,0.26,0.25)
    }
       
    getUtileTasse(): number {
        return this.redditoAnnuoLordo * 0.62
    } 
    getTasseInps(): number {
        return this.getUtileTasse() * this.tasseInps
    }
     getTasseIrpef(): number {
        return this.getUtileTasse() * this.tasseIrpef
     }
     getRedditoAnnuoNetto(): number {
        return this.redditoAnnuoLordo - this.getTasseInps() - this.getTasseIrpef()
     }
 }

 class Forfettario extends LavoratoreTax {
    protected utileTasse?: number
    protected redditoAnnuoNetto?: number

    constructor (redditoAnnuoLordo:number){
        super ('tutte',78,26,15,redditoAnnuoLordo,0.26,0.15)
    }
       
    getUtileTasse(): number {
        return this.redditoAnnuoLordo * 0.78
    } 
    getTasseInps(): number {
        return this.getUtileTasse() * this.tasseInps
    }
     getTasseIrpef(): number {
        return this.getUtileTasse() * this.tasseIrpef
     }
     getRedditoAnnuoNetto(): number {
        return this.redditoAnnuoLordo - this.getTasseInps() - this.getTasseIrpef()
     }
 }
 class Immobiliare extends LavoratoreTax {
    protected utileTasse?: number
    protected redditoAnnuoNetto?: number

    constructor (redditoAnnuoLordo:number){
        super (68,86,26,35,redditoAnnuoLordo,0.26,0.35)
    }
       
    getUtileTasse(): number {
        return this.redditoAnnuoLordo * 0.86
    } 
    getTasseInps(): number {
        return this.getUtileTasse() * this.tasseInps
    }
     getTasseIrpef(): number {
        return this.getUtileTasse() * this.tasseIrpef
     }
     getRedditoAnnuoNetto(): number {
        return this.redditoAnnuoLordo - this.getTasseInps() - this.getTasseIrpef()
     }
 }
 class Professionisti extends LavoratoreTax {
    protected utileTasse?: number
    protected redditoAnnuoNetto?: number

    constructor (redditoAnnuoLordo:number){
        super (64,78,26,23,redditoAnnuoLordo,0.26,0.23)
    }
       
    getUtileTasse(): number {
        return this.redditoAnnuoLordo * 0.78
    } 
    getTasseInps(): number {
        return this.getUtileTasse() * this.tasseInps
    }
     getTasseIrpef(): number {
        return this.getUtileTasse() * this.tasseIrpef
     }
     getRedditoAnnuoNetto(): number {
        return this.redditoAnnuoLordo - this.getTasseInps() - this.getTasseIrpef()
     }
 }
 class AltriLavoratori extends LavoratoreTax {
    protected utileTasse?: number
    protected redditoAnnuoNetto?: number

    constructor (redditoAnnuoLordo:number){
        super ('tutti',67,26,25,redditoAnnuoLordo,0.26,0.25)
    }
       
    getUtileTasse(): number {
        return this.redditoAnnuoLordo * 0.67
    } 
    getTasseInps(): number {
        return this.getUtileTasse() * this.tasseInps
    }
     getTasseIrpef(): number {
        return this.getUtileTasse() * this.tasseIrpef
     }
     getRedditoAnnuoNetto(): number {
        return this.redditoAnnuoLordo - this.getTasseInps() - this.getTasseIrpef()
     }
 }

 window.onload = () => {
    let cod = document.getElementById('cod') as HTMLSelectElement
    let reddito = document.getElementById('reddito') as HTMLInputElement
    let btn = document.getElementById('btn') as HTMLButtonElement
    btn.addEventListener('click', function() {
        let risultato: any;
        switch (cod.value){
        case 'Commer':
        risultato = new Commerciante (Number(reddito?.value));
        break;
        case 'Interm':
        risultato = new Intermediario (Number(reddito?.value));
        break;
        case 'Immob':
        risultato = new Immobiliare (Number(reddito?.value));
        break;
        case 'Profes':
        risultato = new Professionisti (Number(reddito?.value));
        break;
        case 'Forfet':
        risultato = new Forfettario (Number(reddito?.value));
        break;
        case 'Altro':
        risultato = new AltriLavoratori (Number(reddito?.value));
        break;
        }
        let result = document.getElementById('result') as HTMLElement
        result.innerHTML = `<p><strong>Cod. Lavoratore: </strong>${risultato.getCodRedd()}</p>
        <p><strong>Coefficiente di redditività: </strong>${risultato.getCoeffRedd()}</p>
        <p><strong>Percentuale Tasse Inps: </strong>${risultato.getPercInps()}%</p>
        <p><strong>Percentuale Tasse Irpef: </strong>${risultato.getPercIrpef()}%</p>
        <p><strong>Imponibile Tasse: </strong>${risultato.getUtileTasse()}</p>
        <p><strong>Totale Tasse Inps: </strong>${risultato.getTasseInps()}</p>
        <p><strong>Totale Tasse Irpef: </strong>${risultato.getTasseIrpef()}</p>
        <p><strong>Reddito Annuo Netto: </strong>${risultato.getRedditoAnnuoNetto()}</p>`
        console.log(risultato.getPercIrpef());
        
    });
 }







