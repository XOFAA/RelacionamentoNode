const express = require('express')
const app = express()
const routes = require('./routes/routes')
const { engine } = require('express-handlebars')
require('dotenv').config()

app.engine('handlebars', engine({
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}))

app.set('view engine','handlebars')

app.use(express.urlencoded({extended:true}))

app.use('/', routes)

app.listen(process.env.PORT, ()=>{
    console.log('Servidor Ok!')
})