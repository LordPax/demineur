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

	initMine() {
		return 0 // A faire !!!
	}

	initMap() {
		this.cases = superfor(this.lx, (i, r) => {
			return superfor(this.ly, (j, r2) => {
				return [...r2, new Case(ctx, this.x, this.y, i, j, this.t_case, this.initMine())]
			}, 0, r)
		}, 0, [])
	}

	drawMap() {
		this.cases.map(x => x.drawCase())
	}

	eventCase(canvas) {
		canvas.addEventListener('click', e => {
			const x = e.clientX, y = e.clientY
			this.cases.map(elem => {
				if (x > elem.getX && x < elem.getX + elem.getT &&
					y > elem.getY && y < elem.getY + elem.getT) {
					alert(elem.getNbX + ' ' + elem.getNbY)
				}
			})
		})
	}
	
	// update() {
	// }
}