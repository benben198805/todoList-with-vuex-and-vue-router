<template lang="pug">
    el-row#menu
        el-col(:span="12", offset="6")
            el-menu(default-active="0" class="el-menu-demo" mode="horizontal")
                    el-menu-item(index="0")
                        router-link(to="/home") 
                            i.el-icon-date Home
                    el-menu-item(index="1")
                        router-link(to="/history") 
                            i.el-icon-document History 
</template>
<script>
    require("assets/menu.scss");
    export default {
        data(){
            return {

            }
        }
    }
</script>