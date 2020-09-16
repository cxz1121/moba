module.exports = app =>{
    const router = require('express').Router()
    const mongoose = require('mongoose')

    // const article = mongoose.model('article',schema)
    // const category = mongoose.model('category',schema)
    const article = require('../../models/article')
    const category = require('../../models/category')
    router.get('/news/init',async(req,res)=>{
        const parent = await category.findOne({
            name:"新闻分类"
        })
        const cats = await category.find().where({
            parent: parent
        }).lean()
        const newsTitles = ["【皮肤爆料】狂想玩偶喵！是你要的蒙犽皮肤吗~", "露娜英雄及皮肤特效优化&amp;最新bug修复进展【老亚瑟的答疑时间】", "郑爽张继科空降QQ名人赛，互动观赛赢好礼", "《天天酷跑》七周年福利嗨翻，初心不改、携跑未来！", "王者零距离 | 满满都是“料”！你关注的问题，策划现场回复了！", "9月15日全服不停机更新公告", "9月14日体验服停机更新公告", "9月12日体验服停机更新公告", "9月11日体验服停机更新公告", "9月9日净化游戏环境声明及处罚公告", "2020年秋冬赛事战令全新升级，终极奖励韩信星元皮肤等你拿！", "赛末冲刺享回馈，秋分登录领好礼", "时隔五年，廉颇再出皮肤，限时秒杀不容错过！", "99公益日参与活动送好礼，廉颇新皮肤限时秒杀", "【99公益日-集合，一块做好事！】活动公告", "2020年秋冬赛事战令全新升级，终极奖励韩信星元皮肤等你拿！", "2020年KPL秋季赛9月16日热血开赛，主场地域化全面升级", "2020年KPL秋季赛热血来袭，线下售票9月7日12:00开启！", "2020年KGL秋季赛选手大名单公布，9月13日该我上场！", "2020年KPL秋季赛大名单公布"]
        const newLists = newsTitles.map(title => {
            const randomCats = cats.slice(0).sort((a,b) => Math.random() - 0.5)
            return{
                categories:randomCats.slice(0,2),
                title:title
            }
        })
        await article.deleteMany({})
        await article.insertMany(newLists)
        res.send(newLists)
    })


    router.get('/news/list',async (req,res)=>{
        // const cats = await category.findOne({
        //     name:"新闻分类"
        // }).populate({
        //     path:"children"
        // })
        const parent = await category.findOne({
            name:"新闻分类"
        })
        const cats = await category.aggregate([
            {$match:{parent:parent._id}},
            {
                $lookup:{
                    from:'articles',
                    localField:'_id',
                    foreignField:'categories',
                    as:'newsList'
                }
            },
            {
                $addFields:{
                    newsList:{$slice:['$newsList',5]}
                }
            }
        ])
        const subCats = cats.map(v => v._id)
        cats.unshift({
            name:'热门',
            newsList:await article.find().where({
                categories:{$in:subCats}
            }).populate('categories').limit(5).lean()
        })

        cats.map(cat => {
            cat.newsList.map(news => {
                news.categoryName = cat.name === '热门' ? news.categories[0].name : cat.name
                return news
            })
            return cat
        })

        res.send(cats)
    })


    app.use('/web/api',router)
}