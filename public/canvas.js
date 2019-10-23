const map = new MapDem(ctx, 20, 20, 10, 10)
map.initMap()


const draw = () => {
	ctx.clearRect(0, 0, width, height);
	map.drawMap()
}
const update = () => {

}
const main = () => {
	draw()
	update()
	requestAnimationFrame(main)
}

main()

// alert(map.getX)