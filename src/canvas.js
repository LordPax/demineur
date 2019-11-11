const part = new Partie();
part.setMap(new MapDem(ctx, mapx, mapy, ly, ly, t_case));
const map = part.getMap;
map.initMap();
part.event(canvas);
const draw = () => {
    ctx.clearRect(0, 0, width, height);
    map.drawMap();
};
const update = () => {
};
const main = () => {
    draw();
    update();
    requestAnimationFrame(main);
};
main();
