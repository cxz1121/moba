const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name : {type:String},
    avatar : {type:String},
    banner : {type:String},
    title : {type:String},
    categories : [{type:mongoose.SchemaTypes.ObjectId,ref:'category'}],//英雄分类
    scores : { //难度，技能，攻击，生存
        difficult:{type:Number},
        skill:{type:Number},
        attack:{type:Number},
        survive:{type:Number},
    },
    skills : [{ //技能 ,有多个，是个数组 
        icon :{type:String}, //技能图标
        name :{type:String}, //技能名称
        desc :{type:String}, //技能介绍
        tips :{type:String}, //技能小提示
        cd :{type:String}, // cd
        cost :{type:String}, //消耗
    }],
    items1 :[{type: mongoose.SchemaTypes.ObjectId,ref:'item'}], //顺风推荐出装
    items2 :[{type: mongoose.SchemaTypes.ObjectId,ref:'item'}], //逆风推荐出装
    usageTips :{type:String}, //使用技巧
    battleTips :{type:String}, //对战技巧
    teamTips :{type:String}, //团战技巧
    partners :[{ //搭档
        hero:{type:mongoose.SchemaTypes.ObjectId,ref:'hero'},
        desc:{type:String},
    }],


})

module.exports = mongoose.model('hero',schema)