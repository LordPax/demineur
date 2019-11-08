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

const superfor = (compt:number, f:any, acc:number = 0, r:any = null):any => {
    const re:any = acc < compt ? f(acc, r) : r
    return acc < compt ? superfor(compt, f, acc + 1, re) : re
}

const rand = (min:number, max:number):number => Math.floor(Math.random() * (max - min + 1) + min)

const str_rand = (taille:number, f:any, char:string = ''):string => {
    const char_rand:number = f(0, 1) === 1 ? f(65, 90) : f(97, 122)
    const tmp:string = String.fromCharCode(char_rand)

    return taille > 0 ? str_rand(taille - 1, f, char + tmp) : char
}

const aleaMine = n => rand(0, n) === 0 ? 1 : 0

const vCase:any[] = [
    {x : 1, y : 0},
    {x : 1, y : 1},
    {x : 0, y : 1},
    {x : -1, y : 1},
    {x : -1, y : 0},
    {x : -1, y : -1},
    {x : 0, y : -1},
    {x : 1, y : -1}
]

// module.exports = {
//     data : {
//         canvas : canvas,
//         ctx : ctx,
//         lx : lx,
//         t_case : t_case,
//         mapx : mapx,
//         mapy : mapy,
//         vCase : vCase
//     },
//     superfor : superfor,
//     rand : rand,
//     aleaMine : aleaMine
// }

// console.log(str_rand(5, rand))

// superfor(5, (i, r) => {
// 	console.log('i :', i, 'r :', r)
// 	return i + r
// })