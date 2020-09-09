const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name : {type:String},
    avatar : {type:String},
    title : {type:String},
    herogory : [{type:mongoose.SchemaTypes.ObjectId,ref:'category'}],
    score : {
        difficult:{type:Number},
        skills:{type:Number},
        attack:{type:Number},
        survive:{type:Number},
    },
    skills : [{
        icon :{type:String},
        name :{type:String},
        desc :{type:String},
        tips :{type:String},
    }],
    items1 :[{type: mongoose.SchemaTypes.ObjectId,ref:'item'}],
    items2 :[{type: mongoose.SchemaTypes.ObjectId,ref:'item'}],

})

module.exports = mongoose.model('hero',schema)