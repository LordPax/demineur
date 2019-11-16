class MapDem {
    private cases:Case[] = []
    private x:number
    private y:number
    private lx:number
    private ly:number
    private ctx:any
    private t_case:number
    
    constructor(ctx:any, x:number, y:number, lx:number, ly:number, t:number) {
        this.x = x
        this.y = y
        this.lx = lx
        this.ly = ly
        this.ctx = ctx
        this.t_case = t
    }

    public get getX():number { return this.x }
    public get getY():number { return this.y }
    public get getLx():number { return this.lx }
    public get getLy():number { return this.ly }
    public get gCases():Case[] { return this.cases }
    public getCase = (x:number, y:number):Case => this.cases[y * this.lx + x]

    public initMine = ():number => aleaMine(3)  // methode temporaire

    public initMap = ():void => {
        this.cases = superfor(this.lx, (i, r) => {
            return superfor(this.ly, (j, r2) => {
                return [...r2, new Case(this.ctx, this.x, this.y, j, i, this.t_case, this.initMine())]
            }, 0, r)
        }, 0, [])
    }

    public drawMap = ():void => { this.cases.map(x => x.drawCase()) }

    public evaluerCase = (elem:Case):void => {
        if (elem.getMine === 0){
            elem.setNbMine(this.chercheMine(elem))
            if ( elem.getNbMine === 0 ) this.etandCase(elem)
        }
        else
            alert('mine')
    }

    public chercheMine = (elem:Case, nbm:number = 0, acc:number = 0):number => {
        const {x, y}:Coord = this.chercheCoord(elem, acc)
        const nbMine:number = this.getCase(x, y).getMine === 1 ? nbm + 1 : nbm

        return acc < 7 ? this.chercheMine(elem, nbMine, acc + 1) : nbMine
    }

    public etandCase = (elem:Case, acc:number = 0):number => {
        const {x, y}:Coord = this.chercheCoord(elem, acc)
        const elemSuiv:Case = this.getCase(x, y)
        elemSuiv.setNbMine(this.chercheMine(elemSuiv))
        elemSuiv.toggleCase()

        return acc < 7 ? this.etandCase(elem, acc + 1) : 0
    }

    public chercheCoord = (elem:Case, i:number):Coord => {
        const x:number = elem.getNbX + vCase[i].x, y:number = elem.getNbY + vCase[i].y
        const cond:boolean = x >= 0 && x < this.getLx && y >= 0 && y < this.getLy
        const altX:number = cond ? x : elem.getNbX, altY:number = cond ? y : elem.getNbY

        return {x : altX, y : altY}
    }

    public propagueCase = (elem:Case):void => {

    }
}