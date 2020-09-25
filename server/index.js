const express = require('express')

const app = express()

app.set('secret','wduaihdiadoasjdo')

app.use(express.json())
app.use(require('cors')())

app.use('/upload',express.static(__dirname + '/upload'))
app.use('/admin',express.static(__dirname + '/admin'))
app.use('/',express.static(__dirname + '/web'))

require('./routes/admin')(app)
require('./routes/web')(app)
require('./plugins/db')(app)

app.listen(3000,()=>{
    console.log('http://localhost:3000')
})