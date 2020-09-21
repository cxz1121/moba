<template>
    <div class="page-article" v-if="model">
        <div class="d-flex py-3 px-2 border-bottom">
            <div class="iconfont icon-Back text-blue"></div>
            <div class="flex-1 text-ellipsis text-blue">
                {{model.title}}
            </div>
            <div class="text-grey pl-3">  
                2020-06-06
            </div>
        </div>
        <div v-html="model.body" class="px-4 body fs-lg"></div>
        <div class="px-4 py-3">
            <div>
                <i style="font-size:1.5rem;" class="iconfont icon-news"></i>
                <strong class="text-blue ml-2">相关资讯</strong>
            </div>
            <div class="pt-2">
                <router-link class="py-2"
                tag="div"
                :to="/article/+item._id"
                v-for="item in model.related" :key="item._id">
                    {{item.title}}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        id:{required:true}
    },
    watch:{
        // id: 'fetch',
        id(){
            this.fetch()
        }
    },
    data(){
        return{
            model:null
        }
    },
    methods:{
        async fetch(){
            const res = await this.$http.get('article/'+this.id)
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

.page-article{
    .icon-Back{
        font-size: 1.5rem;
    }
    .body{
        img{
            width: 100%;
            height: auto;
        }
        iframe{
            width: 100%;
            height: auto;
        }
    }
}

</style>

