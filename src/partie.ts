class Partie {
    private pts:number = 0
    private map:MapDem = null

    constructor() {}

    public get getPts():number { return this.pts }
    public get getMap():MapDem { return this.map }

    public setMap(map:MapDem):void { this.map = map }

    public event(canvas:any):void {
        canvas.addEventListener('click', e => {
            this.map.gCases.map(elem => this.eventCase(canvas, e, elem))
        })
    }

    public eventCase(canvas:any, e:any, elem:Case):void {
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

    public gagner():void {} // a faire !!!

    public perdue():void {} // a faire !!!
}