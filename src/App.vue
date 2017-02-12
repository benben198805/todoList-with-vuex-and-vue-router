<template lang="pug">
    .index
        app-menu
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