
module.exports = (app) => {
    const express = require('express');
    const jwt = require('jsonwebtoken');
    const assert = require('http-assert');
    const adminuser = require('../../models/adminuser');

    const router = express.Router({
        mergeParams: true,
    });
    // const category = require('../../models/category')

    //新增
    router.post('/', async (req, res) => {
        const model = await req.Model.create(req.body);
        res.send(model);
    });
    //查询限定数据limit
    router.get('/',   async (req, res) => {
        const queryOptions = {};
        if (req.Model.modelName === 'category') {
            queryOptions.populate = 'parent';
        }
        const items = await req.Model.find().setOptions(queryOptions).limit(100);
        res.send(items);
    });

    //查询单个数据
    router.get('/:id', async (req, res) => {
        const model = await req.Model.findById(req.params.id);
        res.send(model);
    });

    //修改 put
    router.put('/:id', async (req, res) => {
        const model = await req.Model.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        res.send(model);
    });

    //删除某个数据
    router.delete('/:id', async (req, res) => {
        await req.Model.findByIdAndDelete(req.params.id, req.body);
        res.send({ success: true });
    });

    //显示数据库所有数据
    router.get('/show', async (req, res) => {
        const model = await req.Model.find();
        res.send(model);
    });
    //登录校验 中间件     
    const authMiddleWare = require('../../middleware/auth')
    //资源 中间件
    const resourceMiddleWare = require('../../middleware/resource')


    app.use('/admin/api/rest/:resource', authMiddleWare(), resourceMiddleWare(), router);


    //上传
    const multer = require('multer');
    const upload = multer({ dest: __dirname + '/../../upload' });
    app.post('/admin/api/upload', authMiddleWare() , upload.single('file'), async (req, res) => {
        const file = req.file;
        file.url = 'http://localhost:3000/upload/' + file.filename;
        res.send(file);
    });

    //登录
    app.post('/admin/api/login', async (req, res) => {
        const { username, password } = req.body;
        //1.根据用户名找用户
        const user = await adminuser.findOne({ username }).select('+password');
        assert(user, 422, '用户不存在')
        // if (!user) {
        //     return res.status(422).send({
        //         msg: '用户不存在',
        //     });
        // }
        //2.校验密码
        const isValid = require('bcrypt').compareSync(password, user.password);
        assert(isValid, 422, '密码错误')
        // if (!isValid) {
        //     return res.status(422).send({
        //         message: '密码错误',
        //     });
        // }
        //3.返回token
        const token = jwt.sign({ id: user._id }, app.get('secret'));
        res.send({ token });
    });

    //错误处理函数
    app.use(async(err,req,res,next)=>{
        res.status(err.status || 500).send({
            message: err.message
        })
    })
};
