class Case {
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

	drawCase() {
		const x = this.getX
		const y = this.getY
		this.ctx.strokeStyle = '#000000'
		this.ctx.strokeRect(x, y, this.t, this.t)
	}
}