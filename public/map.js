class MapDem {
	t_case = 40
	matrice = []
	constructor(ctx, x, y, lx, ly) {
		this.x = x
		this.y = y
		this.lx = lx
		this.ly = ly
		this.ctx = ctx
	}

	get getX() { return this.x }
	get getY() { return this.y }

	initMap() {
		this.matrice = superfor(this.lx, (i, r) => {
			return superfor(this.ly, (j, r2) => {
				return [...r2, new Case(ctx, this.lx, this.ly, i, j, this.t_case, 0)]
			}, 0, r)
		}, 0, [])
	}

	drawMap() {
		superfor(this.lx * this.ly, (i, r) => this.matrice[i].drawCase())
	}
	
	// update() {
	// }
}