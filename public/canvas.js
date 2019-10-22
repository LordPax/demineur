const map = new MapDem(ctx, 3, 3, 5, 5)
map.initMap()
map.drawMap()

const draw = () => {
	ctx.clearRect(0, 0, width, height);
	
}
const update = () => {

}
const animate = () => {
	draw()
	update()
	requestAnimationFrame(animate)
}

animate()

// alert(map.getX)