const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const dotenv = require('dotenv')
const path = require('path')
dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.static('public'));
app.use(expressLayouts)

app.set('view engine', 'ejs')
app.set('layout', './layout/main') 

const routes = require('./app/routes/rutasRecetas.js')
app.use('/', routes)

app.listen(port, () => console.log('Proyecto ejectuandose por el puerto ' + port))