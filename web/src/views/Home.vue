<template>
    <div>
        <!-- swiper start -->
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide>
                <img class="w-100" src="../assets/images/210794580bb9303653804bb7b482f2a4.jpeg">
            </swiper-slide>
            <swiper-slide>
                <img class="w-100" src="../assets/images/b9905b35bb0afa9050d9ddbe04d82d29.jpeg">
            </swiper-slide>
            <swiper-slide>
                <img class="w-100" src="../assets/images/ddc8c8922cbb694dfb73c86bb03fce22.jpeg">
            </swiper-slide>
            <div class="swiper-pagination pagination-home " 
            slot="pagination">
            </div>
        </swiper>
        <!-- swiper end -->

        <!-- nav-icons start -->
        <div class="nav-icons bg-white mt-3 pt-3 text-grey text-center">
            <div class="d-flex flex-wrap">
                <div class="nav-item mb-4">
                    <i class="sprite sprite-blz"></i>
                    <div>爆料站</div>
                </div>
                <div class="nav-item mb-4">
                    <i class="sprite sprite-gsz"></i>
                    <div>故事站</div>
                </div>
                <div class="nav-item mb-4">
                    <i class="sprite sprite-zbsc"></i>
                    <div>周边商城</div>
                </div>
                <div class="nav-item mb-4">
                    <i class="sprite sprite-tyf"></i>
                    <div>体验服</div>
                </div>
                <div v-if="isShow" class="nav-item mb-4">
                    <i class="sprite sprite-xrzq"></i>
                    <div>新人专区</div>
                </div>
                <div v-if="isShow" class="nav-item mb-4 ">
                    <i class="sprite sprite-rycc"></i>
                    <div>荣耀·传承</div>
                </div>
                <div v-if="isShow" class="nav-item mb-4 ">
                    <i class="sprite sprite-wzyd"></i>
                    <div>王者营地</div>
                </div>
                <div v-if="isShow" class="nav-item mb-4 ">
                    <i class="sprite sprite-gzh"></i>
                    <div>公众号</div>
                </div>
                <div v-if="isShow" class="nav-item mb-4 ">
                    <i class="sprite sprite-bbjs"></i>
                    <div>版本介绍</div>
                </div>
                <div v-if="isShow" class="nav-item mb-4 ">
                    <i class="sprite sprite-djhj"></i>
                    <div>对局环境</div>
                </div>
                <div v-if="isShow" class="nav-item mb-4 ">
                    <i class="sprite sprite-wxwzt"></i>
                    <div>无限王者团</div>
                </div>
                <div v-if="isShow" class="nav-item mb-4 ">
                    <i class="sprite sprite-cyhdy"></i>
                    <div>创意互动营</div>
                </div>
            </div>
            <div v-if="isShow" class="bg-light py-2">
                <i class="sprite sprite-arrow mr-1"></i>
                <span @click="close_open">收起</span>
            </div>
            <div v-if="!isShow" class="bg-light py-2">
                <i class="sprite sprite-open mr-1"></i>
                <span @click="close_open">展开</span>
            </div>
        </div>
        <!-- nav-icons end  -->


        <m-list-card icon="menu1" title="新闻资讯" :categories="newsCats">
            <template #items="{category}">
                <div v-for="(newslist,index) in category.newsList" :key="index" class="py-2 d-flex jc-between px-1">
                        <span class="text-primary"> [{{newslist.categoryName}}] </span>
                        <span class="ml-1"> | </span>
                        <span class="news-title ml-1 flex-1"> {{newslist.title}} </span>
                        <span> {{newslist.updatedAt}} </span>
                </div>
            </template>
        </m-list-card>

        <m-card icon="" title="英雄列表">
            
        </m-card>
        <m-card icon="" title="精彩视频">
            
        </m-card>
    </div>
</template>

<script>

import dayjs from "dayjs";

export default {
    filters:{
        date(val){
            return dayjs(val).format('MM/DD')
        }
    },
    data() {
        return {
			newsCats:[],
            isShow:true,
            swiperOptions: {
                //loop: true, // 开启循环
                //autoplay: true, // 开启自动播放
                pagination: {
                    el: '.pagination-home',
                    clickable: true
                },
            // Some Swiper option/callback...
            }
        }
    },
    methods:{
        close_open(){
            if(this.isShow){
                this.isShow = false;
            }else{
                this.isShow =true
            }
        },
        async fetchNewsCats(){
            const res = await this.$http.get('news/list')
            console.log(res.data)
            this.newsCats = res.data
        }
    },
    created(){
        this.fetchNewsCats()
    }
}
</script>

<style lang="scss">
.news-title{
    // overflow: hidden;
    // white-space: nowrap;
    // text-overflow: ellipsis;
}
.show{
    display: block;
}
.pagination-home{
    text-align: right !important;
    padding-right: 1rem;
    padding-bottom: 0.5rem;
    .swiper-pagination-bullet{
        opacity: 1;
        border-radius: 0.153846rem;
        background: #fff;
        &.swiper-pagination-bullet-active{
            background: #4b67af ;
        }
    }
}
.nav-icons{
    border-top: 1px solid #d4d9de;
    border-bottom: 1px solid #d4d9de;
    .nav-item{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 25%;
        height: 3.846154rem;
        border-right: 1px solid #d4d9de;
        &:nth-child(4n){
            border-right: none;
        }
    }
}
//sprite
.sprite{
    background: url(../assets/images/index.png) no-repeat 0 0;
    background-size: 28.846154rem;
    display: inline-block;
    &.sprite-blz{
        width: 1.846154rem;
        height: 1.846154rem;
        background-position: 63.546% 15.517%;
    }
    &.sprite-gsz{
        width: 1.846154rem;
        height: 1.846154rem;
        background-position: 90.483% 15.614%;
    }
    &.sprite-zbsc{
        width: 1.846154rem;
        height: 1.846154rem;
        background-position: 36.746% 0.924%;
    }
    &.sprite-tyf{
        width: 1.846154rem;
        height: 1.846154rem;
        background-position: 10.408% 15.517%;
    }
    &.sprite-xrzq{
        width: 1.846154rem;
        height: 1.846154rem;
        background-position: 90.483% 15.614%;
    }
    &.sprite-rycc{
        width: 1.846154rem;
        height: 1.846154rem;
        background-position: 36.467% 15.287%;
    }
    &.sprite-wzyd{
        width: 1.846154rem;
        height: 1.846154rem;
        background-position: 63.3% 0.927%;
    }
    &.sprite-gzh{
        width: 1.846154rem;
        height: 1.846154rem;
        background-position: 0 96.207%;
    }
    &.sprite-bbjs{
        width: 2rem;
        height: 2rem;
        background: url(../assets/images/version-icon.png) no-repeat 0 0;
        background-size: 100%;
    }
    &.sprite-djhj{
        width: 3.3rem;
        height: 2rem;
        background: url(../assets/images/djhj.png) no-repeat 0 0;
        background-size: 100%;
    }
    &.sprite-wxwzt{
        width: 4.4rem;
        height: 2rem;
        background: url(../assets/images/wxwzt.png) no-repeat center center;
        background-size: 100%;
    }
    &.sprite-cyhdy{
        width: 2.5em;
        height: 2rem;
        background: url(../assets/images/cyhdy.png) no-repeat center center;
        background-size: 100%;
    }

    &.sprite-arrow{
        width: 0.769231rem;
        height: 0.769231rem;
        background-position: 38.577% 52.076%;
    }
    &.sprite-open{
        width: 0.769231rem;
        height: 0.769231rem;
        transform: rotate(180deg);
        background-position: 38.577% 52.076%;
    }
}
</style>