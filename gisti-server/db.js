const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.DATABASE_URL)

const gistSchema = new mongoose.Schema({
    codeData:{
        type:String,
        required:true
    },
    codeTitle:{
        type:String,
        required:true
    },
    isPrivate:{
        type:Boolean,
        default:false
    }
})

const CodeData = mongoose.model('CodeData', gistSchema);

module.exports = {CodeData}