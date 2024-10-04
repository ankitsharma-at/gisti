const express = require('express')
const router = express.Router();
const gistRouter = require('./gist.js')
router.use('/postgist', gistRouter );

module.exports =router