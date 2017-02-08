<template lang="pug">
  el-row
    el-col(:span="2")
        el-menu(class="el-menu-vertical-demo", mode="vertical")
            el-menu-item
                router-link(to="/home") Home
            el-menu-item
                router-link(to="/history") History
    el-col(:span="22")
        router-view
</template>

<script>
export default {
    created:function(){
      return this.$router.push('home')
    }
}
</script>