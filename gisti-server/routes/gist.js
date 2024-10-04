const express = require('express')
const router = express.Router();
const {CodeData} = require('../db')


router.post('/' ,async (req,res) => {
    const {codeTitle , codeData}  = req.body
    console.log(codeData + codeTitle)
    if(!req.body){
        res.json({message:'no body received'})
    }
    try{
        console.log(CodeData)
    const gist = await CodeData.create({
        codeTitle,
        codeData
    })
    const gistId = gist._id
    res.json({message:"recieved" , gistId})
}catch(err){
    console.log(err)
}
})

router.get('/',async (req,res)=>{
    // const gists = await CodeData.find();
    // console.log(gists)
    // res.json({gists})
    const filter = req.query.filter || "" ;
    const fusers = await CodeData.find({
        $or: [{
                codeTitle:{
                    "$regex":filter
                }}
            ]
    })
    const publicGists = fusers.filter((gist)=> gist.isPrivate === false  )
    console.log(publicGists)
    // const users = fusers.filter((users)=>{
    //     return req.userId != users._id
    // console.log(fusers)
    res.json({
        gisti:publicGists
 })   })

module.exports =router