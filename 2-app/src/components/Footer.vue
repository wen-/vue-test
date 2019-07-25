<template>
    <footer class="publicFooter">
        <div class="footerBg clearfix">
            <router-link to="/" exact class="logoBox lfloat">
                <img src="../assets/img/nav_logo.png" alt="" />
            </router-link>
            <div class="callme lfloat">
                <p>联系我们</p>
                <p>商务合作：{{mail}}</p>
                <p>Tel:{{tel}}</p>
            </div>
            <div class="media lfloat">
                <p>官方媒体</p>
                <div class="mediaM">
                    <img src="../assets/img/media1.png" alt="" />
                    <img src="../assets/img/media2.png" alt="" />
                    <img src="../assets/img/media3.png" alt="" />
                    <img src="../assets/img/media4.png" alt="" />
                </div>
            </div>
        </div>
        <div class="copyrightBg">
            <p>© 2013-2019</p>
        </div>
    </footer>
</template>

<style type="text/css" scoped>
    .footerBg{
        padding: 1rem;
        background-color: #f7f7f7;
    }
    .copyrightBg{
        height: 5rem;
        line-height: 5rem;
        text-align: center;
        background-color: #f2f2f2;
    }
    .logoBox,
    .callme,
    .media{
        width: 33%;
    }
</style>

<script>
import langs from '../mixins/langs';
export default {
    name: 'Footer',
    data() {
        return {
            mail: 'market@linkkt.com',
            tel: '020-38856162'
        }
    },
    mixins: [langs],
    computed: {

    },
    methods: {

    },
    watch: {

    },
}
</script>
