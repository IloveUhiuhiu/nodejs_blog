const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const path = require('node:path/win32')
const app = express()
const port = 3000
// HTTP Logger
app.use(morgan('combined'))
// Static
app.use(express.static(path.join(__dirname,'public')))
// Template engine
app.engine('hbs', handlebars.engine({
    extname : '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources\\views'))

app.get('/', (req,res) => {
   
    res.render('home');
});

app.listen(port,() => console.log('Example app listening at http://localhost:' + port));