class Case {
    private nbMine:number = 0
    private police:number = 12
    private toggle:number = 0
    private flag:number = 0
    private img:HTMLImageElement = new Image()
    private ctx:any
    private nbx:number
    private nby:number
    private mapx:number
    private mapy:number
    private t:number
    private mine:number

    constructor(ctx:any, mapx:number, mapy:number, nbx:number, nby:number, t:number, mine:number) {
        this.ctx = ctx
        this.nbx = nbx
        this.nby = nby
        this.mapx = mapx
        this.mapy = mapy
        this.t = t
        this.mine = mine
    }

    public get getNbX():number { return this.nbx }
    public get getNbY():number { return this.nby }
    public get getX():number { return this.mapx + this.t * this.nbx }
    public get getY():number { return this.mapy + this.t * this.nby }
    public get getT():number { return this.t }
    public get getMine():number { return this.mine }
    public get getNbMine():number { return this.nbMine}
    public get getFlag():number { return this.flag }
    public setNbMine = (nb:number):void => { this.nbMine = nb }

    public drawCase = ():void => {
        this.drawRect('#000000', '#EFEFEF')
        const mine:string|number = this.getNbMine === 0 ? ' ' : this.getNbMine

        if (this.toggle === 1) {
            this.drawRect('#000000', '#FFFFFF')
            this.drawText(this.getMine === 1 ? "M" : mine, this.getColorNbMine())
        }
        else if (this.flag === 1)
            this.drawImages('/assets/images/flag.png')
    }

    public toggleCase = ():void => { if (this.toggle === 0) this.toggle = 1 }
    public toggleFlag = ():void => { if (this.flag === 0) { this.flag = 1 } else { this.flag = 0 } }

    public drawRect = (border:string, bg:string):void => {
        this.ctx.strokeStyle = border
        this.ctx.fillStyle = bg
        this.ctx.strokeRect(this.getX, this.getY, this.t, this.t)
        this.ctx.fillRect(this.getX, this.getY, this.t, this.t)
    }

    public drawText = (txt:any, color:string = '#000000'):void => {
        const t2:string = `${txt}`
        const x:number = this.getX + this.t / 2 - t2.length * this.police / 3
        const y:number = this.getY + this.t / 2 + this.police / 3
        this.ctx.font = `${this.police}px sans-serif`;
        this.ctx.fillStyle = color;
        this.ctx.fillText(txt, x, y);
    }

    public drawImages = (img:string):void => {
        this.img.src = img
        this.ctx.drawImage(this.img, this.getX + 5, this.getY + 5, this.getT - 10, this.getT - 10)
    }

    public getColorNbMine = ():string => {
        return match(this.getNbMine)
        .case(1, () => '#0000FF')
        .case(2, () => '#298A08')
        .case(3, () => '#FF0000')
        .case(4, () => '#00FFFF')
        .case(5, () => '#FF00FF')
        .case(6, () => '#FFFF00')
        .case(7, () => '#FF8000')
        .case(8, () => '#08298A')
        .case(9, () => '#FF0000')
        .default(() => '')
    }
}