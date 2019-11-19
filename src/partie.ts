class Partie {
    private pts:number = 0
    private map:MapDem = null
    private etat:number = 0;

    constructor() {}

    public get getPts():number { return this.pts }
    public get getMap():MapDem { return this.map }

    public setMap = (ctx:any, mapx:number, mapy:number, lx:number, ly:number, t_case:number):void => { 
        this.map = new MapDem(ctx, mapx, mapy, ly, ly, t_case)
    }

    public event = (canvas:any):void => {
        canvas.addEventListener('click', e => {
            this.map.gCases.forEach(elem => this.eventCase(canvas, e, elem))
        })
    }

    public eventCase = (canvas:any, e:any, elem:Case):void => {
        const x:number = e.clientX, y:number = e.clientY
       
        if (x > elem.getX && x < elem.getX + elem.getT &&
            y > elem.getY && y < elem.getY + elem.getT) {
            if (e.ctrlKey === false && elem.getFlag === 0) {
                this.map.evaluerCase(elem)
                elem.toggleCase()
            }
            else if (e.ctrlKey === true)
                elem.toggleFlag()
        }   
    }

    public gagner = ():void => {}

    public perdue = ():void => {
        alert('perdue')
        this.map.initMap()
        this.etat = 0
    }

    public analyse = ():void => {
        this.map.gCases.forEach(elem => this.toggleAll(elem))
        if (this.etat === -1)
            this.perdue()
    }

    public toggleAll = (elem:Case) => {
        if (elem.getMine === 1 && elem.getToggle === 1) {
            this.map.gCases
            .filter(elem1 => elem1.getMine === 1 && elem1.getFlag === 0)
            .forEach(elem1 => elem1.toggleCase())
            this.etat = -1
        }
    }
}