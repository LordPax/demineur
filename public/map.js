class MapDem {
    cases = []
    constructor(ctx, x, y, lx, ly, t) {
        this.x = x
        this.y = y
        this.lx = lx
        this.ly = ly
        this.ctx = ctx
        this.t_case = t
    }

    get getX() { return this.x }
    get getY() { return this.y }

    initMine() { return aleaMine(5) } // methode temporaire

    initMap() {
        this.cases = superfor(this.lx, (i, r) => {
            return superfor(this.ly, (j, r2) => {
                return [...r2, new Case(ctx, this.x, this.y, i, j, this.t_case, this.initMine())]
            }, 0, r)
        }, 0, [])
    }

    drawMap() { this.cases.map(x => x.drawCase()) }

    evaluerCase(elem) {
        if (elem.getMine !== 1)
            elem.setNbMine(this.chercheMine(elem))
        else
            alert('mine')
    }

    chercheMine(elem, i = 1, j = 0, nbm = 0, acc = 0) {
        // const x = elem.getNbX + i, y = elem.getNbY + j
        // const nbMine = this.getCase(x, y).getMine === 1 ? nbm + 1 : nbm
        // const ivar = 0, jvar = 0
        // return acc < 8 ? chercheMine(elem, ivar, jvar, nbMine, acc + 1) : nbMine
        return 0 // a finir
    }

    getCase(x, y) {
        const id = y * 10 + x
        return this.cases[id]
    }

    eventCase(canvas) {
        canvas.addEventListener('click', e => {
            const x = e.clientX, y = e.clientY
            this.cases.map(elem => {
                if (x > elem.getX && x < elem.getX + elem.getT &&
                    y > elem.getY && y < elem.getY + elem.getT) {
                    this.evaluerCase(elem)
                    elem.toggleCase()
                }
            })
        })
    }

    // update() {
    // }
}