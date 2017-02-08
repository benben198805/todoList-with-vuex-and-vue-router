<template lang="pug">
    #history
        h3.title_color hisotry
            table
                tr
                    td
                    td action
                    td content
                    td time
                tr(v-for="(item, index) in records")                    
                    td {{index+1}}
                    td {{item.action}}
                    td {{item.text}}
                    td {{item.time}}
</template>
<script>
    require("assets/history.scss");
    import {mapGetters} from 'vuex'
    export default {
        data(){
            return {

            }
        },
        computed:mapGetters({
            records:'getHistory'
        })
    }
</script>