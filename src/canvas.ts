const part:Partie = new Partie()
part.setMap(ctx, mapx, mapy, ly, ly, t_case)
const map:MapDem = part.getMap

map.initMap()
part.event(canvas)

const draw = ():void => {
    ctx.clearRect(0, 0, width, height);
    map.drawMap()
}
const update = ():void => {
	part.analyse()
}
const main = ():void => {
    draw()
    update()
    requestAnimationFrame(main)
}

main()