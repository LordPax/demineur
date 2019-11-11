const express:any = require('express')
const app:any = express()

const port:number = 8080
const domain:string = 'http://localhost:' + port + '/'

app.set('view engine', 'ejs')

app.use('/assets', express.static('public'))
app.use(express.urlencoded({extended : true}))

app.get('/', (req, res) => res.render('pages/index'))

app.listen(port, () => console.log('Ecoute le port', port, '...'))