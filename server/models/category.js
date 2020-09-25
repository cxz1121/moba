const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name : {type:String},
    parent: {type:mongoose.SchemaTypes.ObjectId,ref:'category'},
})

schema.virtual('children',{
    localField:'_id',
    foreignField:'parent',
    justOne:false,
    ref:'category'
})

schema.virtual('children',{
    localField:'_id',
    foreignField:'category',
    justOne:false,
    ref:'article'
})

module.exports = mongoose.model('category',schema)