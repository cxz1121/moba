const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    title : {type:String},
    categories : [{type:mongoose.SchemaTypes.ObjectId,ref:'category'}],
    body : {type:String}
})

module.exports = mongoose.model('article',schema)