const express = require('express')
const app = express()
let cors = require('cors')

const serviceRoute = require('./routes/serviceRoute')

var corsOptions = {
    origin: '*'

};

app.use(cors(corsOptions))

app.use('/api', serviceRoute)

app.get('/', (req, res) => {
    res.send('Hello world!!!')
})

app.listen(8686, () => {
    console.log('Server is running at 8686...');
})