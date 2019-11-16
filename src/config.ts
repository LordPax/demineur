const canvas:any = document.getElementById('canvas')
const ctx:any = canvas.getContext('2d')
const width:number = window.innerWidth - 10
const height:number = window.innerHeight - 10
const ratio:number = window.devicePixelRatio

canvas.width = width * ratio
canvas.height = height * ratio
canvas.style.width = width + 'px'
canvas.style.height = height + 'px'
ctx.scale(ratio, ratio)

const lx:number = 10, ly:number = 10
const t_case:number = 40
const mapx:number = width / 2 - (lx * t_case) / 2
const mapy:number = height / 2 - (ly * t_case) / 2

interface Coord {
    x:number,
    y:number
}

const superfor = (compt:number, f:(i:number, r:any) => any, acc:number = 0, r:any = null):any => {
    const re:any = acc < compt ? f(acc, r) : r
    return acc < compt ? superfor(compt, f, acc + 1, re) : re
}

const rand = (min:number, max:number):number => Math.floor(Math.random() * (max - min + 1) + min)
const aleaMine = (n:number):number => rand(0, n) === 0 ? 1 : 0

const match = (test:any, acc:any = null):any => {
    return {
        case : (val:any, act:()=>any):any => match(test, val === test ? act() : acc),
        default : (act:()=>any):any => acc === null ? act() : acc
    }
}

// const test = match(4)
// .case(1, () => 'test1')
// .case(2, () => 'test2')
// .case(3, () => 'test3')
// .case(4, () => 'test4')
// .default(() => {})

// alert(test)

const vCase:Coord[] = [
    {x : 1, y : 0},
    {x : 1, y : 1},
    {x : 0, y : 1},
    {x : -1, y : 1},
    {x : -1, y : 0},
    {x : -1, y : -1},
    {x : 0, y : -1},
    {x : 1, y : -1}
]