module.exports = options => {
    //登录校验 中间件      const authMiddleWare 
    const jwt = require('jsonwebtoken');
    const assert = require('http-assert');
    const adminuser = require('../models/adminuser');
    return async (req, res, next) => {
        const token = String(req.headers.authorization || '').split(' ').pop()
        assert(token, 401, '请先登录')
        const {id} = jwt.verify(token, req.app.get('secret'))
        assert(id, 401, '请先登录')
        req.user = await adminuser.findById(id)
        assert(req.user, 401, '请先登录')
        // console.log(req.user)
        await next()
    } 
}