const express = require('express');
const app = express();
const cors = require('cors')
const rootRouter = require('./routes/index.js')
require('dotenv').config();
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use('/v1/api',rootRouter)

// app.post('/postgist' ,(req,res) => {
//     const {codeTitle , codeData}  = req.body
//     console.log(codeData)
//     res.json({message:"recieved"})
// }
// )
app.listen(port, console.log("server is running in port: " + port))