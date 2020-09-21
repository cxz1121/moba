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
            model:null
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
.page-hero{
    .top{
        height: 50vw;
    }
}
</style>