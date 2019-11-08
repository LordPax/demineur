import { Case } from './case'

const conf:object = require('./config')
const superfor:any = conf.superfor
const aleaMine:any = conf.aleaMine

export class MapDem {
    private cases:object[] = []
    private x:number = x
    private y:number = y
    private lx:number = lx
    private ly:number = ly
    private ctx:any = ctx
    private t_case:number = t
    
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

    public initMine():number { return aleaMine(5) } // methode temporaire

    public initMap():void {
        this.cases = superfor(this.lx, (i, r) => {
            return superfor(this.ly, (j, r2) => {
                return [...r2, new Case(ctx, this.x, this.y, j, i, this.t_case, this.initMine())]
            }, 0, r)
        }, 0, [])
    }

    public drawMap():void { this.cases.map(x => x.drawCase()) }

    public evaluerCase(elem:object):void {
        if (elem.getMine !== 1)
            elem.setNbMine(this.chercheMine(elem))
        else
            alert('mine')
    }

    public getCase(x:number, y:number):object { return this.cases[y * this.lx + x] }

    public chercheMine(elem:object, nbm:number = 0, acc:number = 0):number {
        const x:number = elem.getNbX + vCase[acc].x, y = elem.getNbY + vCase[acc].y
        const cond:boolean = x >= 0 && x < this.lx && y >= 0 && y < this.ly

        const altX:number = cond ? x : elem.getNbX, altY:number = cond ? y : elem.getNbY
        const nbMine:number = this.getCase(altX, altY).getMine === 1 ? nbm + 1 : nbm

        return acc < 7 ? this.chercheMine(elem, nbMine, acc + 1) : nbMine
    }
}