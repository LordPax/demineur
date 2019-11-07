class Case {
    nbMine = 0
    police = 12
    toggle = 0
    flag = 0
    constructor(ctx, mapx, mapy, nbx, nby, t, mine) {
        this.ctx = ctx
        this.nbx = nbx
        this.nby = nby
        this.mapx = mapx
        this.mapy = mapy
        this.t = t
        this.mine = mine
    }

    get getNbX() { return this.nbx }
    get getNbY() { return this.nby }
    get getX() { return this.mapx + this.t * this.nbx }
    get getY() { return this.mapy + this.t * this.nby }
    get getT() { return this.t }
    get getMine() { return this.mine }
    get getNbMine() { return this.nbMine}
    get getFlag() { return this.flag }
    setNbMine(nb) { this.nbMine = nb}

    drawCase() {
        this.drawRect('#000000', '#EFEFEF')
        if (this.toggle === 1) {
            this.drawRect('#000000', '#FFFFFF')
            this.drawText(this.getMine === 1 ? "M" : this.getNbMine)
        }
        else if (this.flag === 1)
            this.drawText('F')
    }

    toggleCase() { if (this.toggle === 0) this.toggle = 1 }
    toggleFlag() { if (this.flag === 0) { this.flag = 1 } else { this.flag = 0 } }

    drawRect(border, bg) {
        this.ctx.strokeStyle = border
        this.ctx.fillStyle = bg
        this.ctx.strokeRect(this.getX, this.getY, this.t, this.t)
        this.ctx.fillRect(this.getX, this.getY, this.t, this.t)
    }

    drawText(txt) {
        const t2 = `${txt}`
        const x = this.getX + this.t / 2 - t2.length * this.police / 3
        const y = this.getY + this.t / 2 + this.police / 3
        this.ctx.font = `${this.police}px sans-serif`;
        this.ctx.fillStyle = '#000000';
        this.ctx.fillText(txt, x, y);
    }
}