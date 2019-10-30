const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const width = window.innerWidth - 10
const height = window.innerHeight - 10
const ratio = window.devicePixelRatio

canvas.width = width * ratio
canvas.height = height * ratio
canvas.style.width = width + 'px'
canvas.style.height = height + 'px'
ctx.scale(ratio, ratio)

const lx = 10, ly = 10
const t_case = 40
const mapx = width / 2 - (lx * t_case) / 2
const mapy = height / 2 - (ly * t_case) / 2

const superfor = (compt, f, acc = 0, r = null) => {
    const re = acc < compt ? f(acc, r) : r
    return acc < compt ? superfor(compt, f, acc + 1, re) : re
}

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const str_rand = (taille, f, char = '') => {
    const char_rand = f(0, 1) === 1 ? f(65, 90) : f(97, 122)
    const tmp = String.fromCharCode(char_rand)

    return taille > 0 ? str_rand(taille - 1, f, char + tmp) : char
}

const aleaMine = n => rand(0, n) === 0 ? 1 : 0

const vCase = [
    {x : 1, y : 0},
    {x : 1, y : 1},
    {x : 0, y : 1},
    {x : -1, y : 1},
    {x : -1, y : 0},
    {x : -1, y : -1},
    {x : 0, y : -1},
    {x : 1, y : -1}
]

// console.log(str_rand(5, rand))

// superfor(5, (i, r) => {
// 	console.log('i :', i, 'r :', r)
// 	return i + r
// })