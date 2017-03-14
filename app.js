var express = require('express')
var app = express()
var pug = require('pug')
var bodyParser = require('body-parser')
app.set('views', './views')
app.set('view engine', 'pug')
app.locals.pretty = true
app.use('/', express.static('public'))
app.use('/css/', express.static('css'))
app.use('/js/', express.static('js'))
app.use('/fonts/', express.static('fonts'))
app.use('/vendor/', express.static('vendor'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Temporary DATA
var pension = require( "./temp_pension_data.js")
var pension = pension.getlist()

app.get('/', function (req, res) {
  res.render('index',{
    pension: pension
  })
})
app.get('/member', function (req, res) {
  res.render('member')
})
app.get('/channel', function (req, res) {
  res.render('channel')
})
app.get('/map', function (req, res) {
  res.render('map')
})
app.get('/contact', function (req, res) {
  res.render('contact')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
