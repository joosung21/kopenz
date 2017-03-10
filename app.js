var express = require('express')
var app = express()
var pug = require('pug')
app.set('views', './views')
app.set('view engine', 'pug')
app.locals.pretty = true
app.use('/', express.static('public'))
app.use('/css/', express.static('css'))
app.use('/js/', express.static('js'))
app.use('/fonts/', express.static('fonts'))

app.get('/', function (req, res) {
  res.render('index')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
