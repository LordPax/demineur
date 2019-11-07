class partie {
    pts = 0
    map = null

    constructor() {}

    get getPts() { return this.pts }

    setMap(map) { this.map = map }

    event(canvas) {
        canvas.addEventListener('click', e => {
            this.map.cases.map(elem => this.eventCase(canvas, e, elem))
        })
    }

    eventKey(canvas) {

    }

    eventCase(canvas, e, elem) {
        const x = e.clientX, y = e.clientY
       
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

    gagner() {} // a faire !!!

    perdue() {} // a faire !!!
}