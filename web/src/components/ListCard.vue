<template>
        <m-card icon="menu1" title="新闻资讯">
            <div class="nav jc-between px-2">
                <div class="nav-item" :class="{active:false}" 
				v-for="(category,i) in categories" :key="i"> 
                    <div class="nav-link">{{category.news}}</div>
                </div>
            </div>
            </div>
            <swiper class="mt-2">
                <swiper-slide v-for="m in 5" :key="m">
                    <div v-for="n in 5" :key="n" class="py-2 d-flex jc-between px-1">
                        <div>
                            <span> [新闻] </span>
                            <span> | </span>
                            <span> 郑爽张继科空降QQ名人赛，互动观赛赢好礼 </span>
                        </div>
                        <div>
                            <span> 06/06 </span>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </m-card>
</template>

<script>
export default {
props:{
    icon:{type:String,required:true},
    title:{type:String,required:true},
    categories:{}
}
}
</script>

<style>

</style>