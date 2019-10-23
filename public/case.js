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

	get getX() { return this.nbx }
	get getY() { return this.nby }

	drawCase() {
		const x = this.mapx + this.t * this.nbx
		const y = this.mapy + this.t * this.nby
		this.ctx.strokeStyle = '#000000'
		this.ctx.strokeRect(x, y, this.t, this.t)
	}

	eventCase(canvas) {
		canvas.addEventListenner((e) => {
			const x = e.clientX(), y = e.clientY()
			alert(x, ' ', y)
			//if () 
		})
	}
}