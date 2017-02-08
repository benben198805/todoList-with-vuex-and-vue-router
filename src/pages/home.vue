<template lang="pug">
    #home
        h3.title_color {{title}}
        div
            ul
                li(v-for="(item, index) in items", :class="{completed: item.isDone}",@dblclick="removeItem(index)")
                    div(@click="complete(index)") {{item.text}}
                    .removeItem(@click="removeItem(index)") x
        .summary
            div Done:{{doneItemsCount}}
            div Doing:{{doingItemsCount}}
        input(type="text", name="", v-model="newItem", @keyup.enter="addItem")
        input(type="button", name="submit", @click="addItem", value="add")
</template>
<script>
    require("assets/home.scss");
    import {mapGetters} from 'vuex'
    export default {
        data(){
            return {
                newItem: ''
            }
        },
        computed:mapGetters({
            items:'getItems',
            title:'getTitle',
            doneItemsCount:'getDoneItemsCount',
            doingItemsCount:'getDoingItemsCount'
        }),
        methods: {
            addItem: function() {
                if(this.newItem){
                    this.$store.dispatch('add_item', this.newItem);
                    this.newItem = '';
                }
            },
            removeItem: function(index) {
                this.$store.dispatch('remove_item', index)
            },
            complete: function(index) {
                this.$store.dispatch('complete_item', index)                
            }
        }
    }
</script>
<style lang="scss">

</style>