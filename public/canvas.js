const map = new MapDem(ctx, mapx, mapy, ly, ly, t_case)
map.initMap()
map.eventCase(canvas)

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