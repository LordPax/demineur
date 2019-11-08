// import { Partie } from './partie'
// import { MapDem } from './map'

// const conf:any = require('./config')
// const data:any = conf.data

const part:Partie = new Partie()
// part.setMap(new MapDem(data.ctx, data.mapx, data.mapy, data.ly, data.ly, data.t_case))
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