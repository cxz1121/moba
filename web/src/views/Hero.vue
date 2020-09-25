<template>
    <div class="page-hero" v-if="model">
        <div class="topbar bg-black py-2 px-4 d-flex ai-center text-white">
            <img src="../assets/logo.png" height="30">
            <div class="px-3 flex-1">
                <span class="text-white">王者荣耀</span>
                <span class="fs-xs ml-2">团队成就更多</span>
            </div>
            <router-link to="/" tag="div">更多英雄 &gt;</router-link>
        </div>
        <div class="top" :style="{'background-image':'url('+model.banner+')'}">
            <div class="info text-white p-3 d-flex flex-column jc-end h-100">
                <div class="fs-sm">{{model.title}}</div>
                <div class="fs-xxl py-2">{{model.name}}</div>
                <div class="fs-sm">{{model.categories.map(v=>v.name).join('/')}}</div>
                <div class="d-flex jc-between pt-2">
                    <div class="scores" v-if="model.scores">
                        <span>难度</span><span class="bg-primary badge">{{model.scores.difficult}}</span>
                        <span>技能</span><span class="bg-blue badge">{{model.scores.skill}}</span>
                        <span>攻击</span><span class="bg-red badge">{{model.scores.attack}}</span>
                        <span>生存</span><span class="bg-dark-1 badge">{{model.scores.survive}}</span>
                    </div>
                    <router-link class="text-light-1" tag="span" to="">
                        皮肤: 2 &gt;
                    </router-link>
                </div>
            </div>
        </div>
        <!-- end of top -->
        <div>
            <div class="px-3 bg-white">
                <div class="nav d-flex pt-3 pb-2 jc-around border-bottom">
                    <div class="nav-item active">
                        <div class="nav-link">英雄初识</div>
                    </div>
                    <div class="nav-item">
                        <div class="nav-link">英雄初识</div>
                    </div>
                </div>
            </div>
            <swiper>
                <swiper-slide>
                    <div>
                        <div class="p-3 bg-white">
                                <div class="d-flex ">
                                    <router-link to="/" tag="button" class="btn btn-lg flex-1 bg-lighting">
                                        <i class="iconfont icon-menu1"></i>
                                            英雄介绍视频
                                    </router-link>
                                    <router-link to="/" tag="button" class="btn btn-lg flex-1 bg-lighting ml-2">
                                        <i class="iconfont icon-menu1"></i>
                                            英雄介绍视频
                                    </router-link>
                                </div>

                                <!-- skills -->
                                <div class="skills mt-3">
                                    <div class="d-flex jc-around">
                                        <img class="icon"
                                        @click="currentSkillIndex = i"
                                        :class="currentSkillIndex === i?'active':''"
                                        :src="item.icon" 
                                        v-for="(item,i) in model.skills" 
                                        :key="i"
                                        width="66"
                                        height="66">
                                    </div>
                                </div>
                                <div class="mt-4 mb-2" v-if="currentSkill">
                                    <div class="d-flex">
                                        <h3 class="mt-0 mb-2 text-bold">{{currentSkill.name}}</h3>
                                        <span class="text-grey ml-4">( 冷却值:{{currentSkill.cd}} 消耗:{{currentSkill.cost}} )</span>
                                    </div>
                                    <p class="mb-0">
                                        {{currentSkill.desc}}
                                    </p>
                                </div>
                        </div>  
                    
                        <m-card plain icon="menu1" title="出装推荐" class="hero-items">
                            <div class="fs-xl">顺风出装</div>
                            <div class="d-flex jc-around text-center mt-3 pb-3 border-bottom">
                                <div v-for="item in model.items1" :key="item.name">
                                    <img :src="item.icon">
                                    <div class="fs-xs mt-2">{{item.name}}</div>
                                </div>
                            </div>
                            <div class="fs-xl mt-3">顺风出装</div>
                            <div class="d-flex jc-around text-center mt-3">
                                <div v-for="item in model.items2" :key="item.name">
                                    <img :src="item.icon">
                                    <div class="fs-xs mt-2">{{item.name}}</div>
                                </div>
                            </div>
                        </m-card>

                        <m-card plain icon="menu1" title="使用技巧">
                            <p class="m-0">
                                {{model.usageTips}}
                            </p>
                        </m-card>
                        <m-card plain icon="menu1" title="对抗技巧">
                            <p class="m-0">
                                {{model.battleTips}}
                            </p>
                        </m-card>
                        <m-card plain icon="menu1" title="团战思路">
                            <p class="m-0">
                                {{model.teamTips}}
                            </p>
                        </m-card>
                        <m-card plain icon="menu1" title="英雄关系" >
                            <div class="fs-xl ">最佳搭档</div>
                            <div class="d-flex pt-3" v-for="(item,i) in model.partners" :key="i">
                                <img :src="item.hero.avatar" height="50">
                                <p class="ml-2 m-0">{{item.desc}}</p>
                            </div>
                            <div class="border-bottom mt-3"></div>
                        </m-card>
                    </div>
                </swiper-slide>
                <swiper-slide></swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        id:{required:true}
    },
    data(){
        return{
            model:null,
            currentSkillIndex:0
        }
    },
    computed:{
        currentSkill(){
            return this.model.skills[this.currentSkillIndex];
        }
    },
    methods:{
        async fetch(){
            const res = await this.$http.get('hero/'+this.id)
            this.model = res.data
            console.log(res.data)
        }
    },
    created(){
        this.fetch()
    }
}
</script>

<style lang="scss">
@import '../style.scss';
.page-hero{
    .top{
        background: #fff no-repeat top center;
        background-size: auto 100%;
        height: 50vw;
    }
    .info{
        background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.3));
        .scores{
            .badge{
                margin: 0 0.25rem;
                display: inline-block;
                width: 1rem;
                height: 1rem;
                line-height: 1rem;
                text-align: center;
                border-radius: 50%;
                font-size: 0.8rem;
                border: 1px solid rgba(255,255,255,0.3);
            }
        }
    }

    .skills{
        img.icon{
            border: 3px solid map-get($colors, 'white');
            &.active{
                border-color: map-get($colors, 'primary');
            }
            border-radius: 45%;
        }
    }
}
.hero-items{
    img{
        width: 45px;
        height: 45px;
        border-radius: 50%;
    }
}
</style>