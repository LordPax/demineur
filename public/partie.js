class partie {
    pts = 0
    map = null

    constructor() {}

    get getPts() { return this.pts }

    setMap(map) { this.map = map }

    eventCase(canvas) {
        canvas.addEventListener('click', e => {
            const x = e.clientX, y = e.clientY
            this.map.cases.map(elem => {
                if (x > elem.getX && x < elem.getX + elem.getT &&
                    y > elem.getY && y < elem.getY + elem.getT) {
                    this.map.evaluerCase(elem)
                    elem.toggleCase()
                }
            })
        })
    }

    gagner() {} // a faire !!!

    perdue() {} // a faire !!!
}