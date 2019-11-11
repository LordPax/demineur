class Partie {
    constructor() {
        this.pts = 0;
        this.map = null;
    }
    get getPts() { return this.pts; }
    get getMap() { return this.map; }
    setMap(map) { this.map = map; }
    event(canvas) {
        canvas.addEventListener('click', e => {
            this.map.gCases.map(elem => this.eventCase(canvas, e, elem));
        });
    }
    // public eventKey(canvas) {}
    eventCase(canvas, e, elem) {
        const x = e.clientX, y = e.clientY;
        if (x > elem.getX && x < elem.getX + elem.getT &&
            y > elem.getY && y < elem.getY + elem.getT) {
            if (e.ctrlKey === false && elem.getFlag === 0) {
                this.map.evaluerCase(elem);
                elem.toggleCase();
            }
            else if (e.ctrlKey === true)
                elem.toggleFlag();
        }
    }
    gagner() { } // a faire !!!
    perdue() { } // a faire !!!
}
