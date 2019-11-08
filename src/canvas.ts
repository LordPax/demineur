const part:Partie = new Partie()
part.setMap(new MapDem(ctx, mapx, mapy, ly, ly, t_case))
const map:MapDem = part.getMap

map.initMap()
part.event(canvas)

const draw = ():void => {
    ctx.clearRect(0, 0, width, height);
    map.drawMap()
}
const update = ():void => {

}
const main = ():void => {
    draw()
    update()
    requestAnimationFrame(main)
}

main()