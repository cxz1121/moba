module.exports = app =>{
    const express = require('express')
    const router = express.Router({
        mergeParams:true
    })
    // const category = require('../../models/category')

    //新增
    router.post('/',async(req,res)=>{
        const model = await req.Model.create(req.body)
        res.send(model)
    })
    //查询限定数据limit
    router.get('/',async(req,res)=>{
        const queryOptions = {}
        if(req.Model.modelName === 'category'){
            queryOptions.populate = 'parent'
        }
        const items = await req.Model.find().setOptions(queryOptions).limit(10)
        res.send(items)
    })
    
    //查询单个数据
    router.get('/:id',async(req,res)=>{
        const model = await req.Model.findById(req.params.id)
        res.send(model)
    })

    //修改 put
    router.put('/:id',async(req,res)=>{
        const model = await req.Model.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })

    //删除某个数据
    router.delete('/:id',async(req,res)=>{
        await req.Model.findByIdAndDelete(req.params.id,req.body)
        res.send({success:true})
    })

    //显示数据库所有数据
    router.get('/show',async(req,res)=>{
        const model = await req.Model.find()
        res.send(model)
    })

    app.use('/admin/api/rest/:resource',async (req,res,next)=>{
        req.Model = require('../../models/'+req.params.resource)
        next()
    },router)

//上传

    const multer = require('multer')
    const upload = multer({dest:__dirname + '/../../upload'})
    app.post('/admin/api/upload',upload.single('file'),async (req,res)=>{
        const file =  req.file
        file.url = 'http://localhost:3000/upload/'+file.filename
        res.send(file)
    })
}