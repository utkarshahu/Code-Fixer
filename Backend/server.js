
require('dotenv').config()
const app = require('./src/app.js')


app.listen(3000,()=>{
    console.log(`Server is running at port http://localhost:3000.`)
})

