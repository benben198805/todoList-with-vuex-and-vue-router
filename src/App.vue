<template lang="pug">
    .index
        app-menu
        transition(name='slide-fade')
            router-view
</template>

<script>
import AppMenu from './components/template/menu.vue'
require("assets/app.scss");
export default {
    created:function(){
      return this.$router.push('home')
    },
    components: {
        AppMenu
    }
}
</script>