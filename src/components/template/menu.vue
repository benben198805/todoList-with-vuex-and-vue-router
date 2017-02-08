<template lang="pug">
    el-menu(class="el-menu-vertical-demo", mode="vertical")
            el-menu-item(index="1")
                router-link(to="/home") Home
            el-menu-item(index="2")
                router-link(to="/history") History
</template>
<script>
    export default {
        data(){
            return {

            }
        }
    }
</script>