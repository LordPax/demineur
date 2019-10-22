class Case {
	constructor(ctx, x, y, t, mine) {
		this.x = x
		this.y = y
		this.t = t
		this.mine = mine
		this.ctx = ctx
	}
	creeCase() {
		this.ctx.strokeStyle = '#000000'
		this.ctx.strokeRect(x, y, t, t)
	}
}