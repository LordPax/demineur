class MapDem {
    constructor(ctx, x, y, lx, ly, t) {
        this.cases = [];
        this.x = x;
        this.y = y;
        this.lx = lx;
        this.ly = ly;
        this.ctx = ctx;
        this.t_case = t;
    }
    get getX() { return this.x; }
    get getY() { return this.y; }
    get gCases() { return this.cases; }
    getCase(x, y) { return this.cases[y * this.lx + x]; }
    initMine() { return aleaMine(5); } // methode temporaire
    initMap() {
        this.cases = superfor(this.lx, (i, r) => {
            return superfor(this.ly, (j, r2) => {
                return [...r2, new Case(ctx, this.x, this.y, j, i, this.t_case, this.initMine())];
            }, 0, r);
        }, 0, []);
    }
    drawMap() { this.cases.map(x => x.drawCase()); }
    evaluerCase(elem) {
        if (elem.getMine !== 1)
            elem.setNbMine(this.chercheMine(elem));
        else
            alert('mine');
    }
    chercheMine(elem, nbm = 0, acc = 0) {
        const x = elem.getNbX + vCase[acc].x, y = elem.getNbY + vCase[acc].y;
        const cond = x >= 0 && x < this.lx && y >= 0 && y < this.ly;
        const altX = cond ? x : elem.getNbX, altY = cond ? y : elem.getNbY;
        const nbMine = this.getCase(altX, altY).getMine === 1 ? nbm + 1 : nbm;
        return acc < 7 ? this.chercheMine(elem, nbMine, acc + 1) : nbMine;
    }
}
