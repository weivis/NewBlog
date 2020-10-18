<template>
    <div>
        <sidebar class="sidebar"/>
        <div class="asdkuahcvuionascv">
            <layout-header/>
            <layout-appmain/>
            <layout-footer/>
        </div>
    </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import header from './components/Header.vue'
import footer from './components/Footer.vue'
import appmain from './AppMain'
    export default {
        name:'Home',
        methods: { //事件处理器
        },
        components: { //定义组件
            'layout-header':header,
            'layout-footer':footer,
            'layout-appmain':appmain,
            Sidebar
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.sidebar{
    position: fixed;
    width: 220px;
    background-color: rgb(91, 140, 255);
    height: calc(100vh + 20px);
}
.asdkuahcvuionascv{
    width: calc(100% - 220px);
    margin-left: 220px;
}
</style>
