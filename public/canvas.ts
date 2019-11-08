import { Partie } from './partie'
import { MapDem } from './map'

const conf:object = require('./config')

const part:object = new Partie()
part.setMap(new MapDem(conf.data.ctx, conf.data.mapx, conf.data.mapy, conf.data.ly, conf.data.ly, conf.data.t_case))
const map:object = part.map

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

// alert(map.getX)