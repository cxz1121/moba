<template>
        <div class="card bg-white p-3 mt-3"> 
            <div class=" d-flex jc-between " :class="{'border-bottom pb-3':!plain}">
                <i class="iconfont" :class="'icon-'+icon"></i>
                <div class="flex-1 fs-xl px-2"><strong>{{title}}</strong></div>
                <i class="iconfont icon-menu" v-if="!plain"></i>
            </div>
            <div class="card-body pt-3">
                <slot></slot>
            </div>
        </div>
</template>

<script>
export default {
    props:{
        title:{type:String,required:true},
        icon:{type:String,required:true},
        plain:{type:Boolean},
    }
}
</script>

<style lang="scss">
.card{
    border-bottom: 1px solid #d4d9de;
}
</style>