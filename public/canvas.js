const part = new partie()
part.setMap(new MapDem(ctx, mapx, mapy, ly, ly, t_case))
const map = part.map

map.initMap()
part.eventCase(canvas)

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