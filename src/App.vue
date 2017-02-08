<template lang="pug">
  el-row
    el-col(:span="2")
        app-menu
    el-col(:span="22")
        router-view
</template>

<script>
import AppMenu from './components/template/menu.vue'
export default {
    created:function(){
      return this.$router.push('home')
    },
    components: {
        AppMenu
    }
}
</script>