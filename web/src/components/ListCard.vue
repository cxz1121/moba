<template>
        <m-card icon="menu1" title="新闻资讯">
            <div class="nav jc-between px-2">
                <div class="nav-item" :class="{active: active === i}" 
				v-for="(category,i) in categories" :key="i" 
                @click="$refs.list.swiper.slideTo(i)"> 
                    <div class="nav-link">{{category.name}}</div>
                </div>
            </div>
            <swiper class="mt-2" ref="list" @slide-change="() => active = $refs.list.swiper.realIndex">
                <swiper-slide v-for="(category,i) in categories" :key="i">
                    <slot name="items" :category="category"></slot>
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
    },
    data(){
        return{
            active:0,
        }
    }
}
</script>

<style>

</style>