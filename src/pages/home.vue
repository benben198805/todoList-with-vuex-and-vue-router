<template>
    <div id="home">
        <h3 class="title_color">{{title}}</h3>
        <div>
            <ul>
                <li v-for="(item, index) in items" :class="{completed: item.isDone}" @dblclick="removeItem">
                    <div @click="complete(index)">{{item.text}}</div>
                    <div class="removeItem" @click="removeItem(index)">x</div>
                </li>
            </ul>
        </div>
         <div class="summary">
            <div>Done:{{doneItemsCount}}</div>
            <div>Doing:{{doingItemsCount}}</div>
        </div>
        <input type="text" name="" v-model="newItem" @keyup.enter="addItem">
        <input type="button" name="submit" @click="addItem" value="add">
    </div>
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