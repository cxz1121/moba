<template>
    <div>
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

        <div class="nav-icons bg-white mt-3 d-flex flex-wrap">
            <div class="nav-item text-center" v-for="n in 10" :key="n">
                <i class="sprite sprite-news"></i>
                <div>爆料站</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            swiperOptions: {
                loop: true, // 开启循环
                autoplay: true, // 开启自动播放
                pagination: {
                    el: '.pagination-home',
                    clickable: true
                },
            // Some Swiper option/callback...
            }
        }
    },
}
</script>

<style lang="scss">
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
    .nav-item{
        width: 25%;
    }
}
</style>