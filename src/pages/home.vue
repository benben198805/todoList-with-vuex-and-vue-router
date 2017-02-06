<template>
    <div id="home">
        <h3 class="title_color">{{title}}</h3>
        <div>
            <ul>
                <li v-for="(item, index) in items" :class="{completed: item.isDone}" @dblclick="removeItem">
                    <div @click="complete(index)">{{item.text}}</div>
                    <div class="removeItem" @click="removeItem">x</div>
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
#home {
    width: 300px;
    margin: 0px auto;
    text-align: center;
    ul {
        list-style-type: none;
        li {
             border-bottom: 1px dashed #eee;
             cursor: pointer;
             padding: 4px;
             margin: 4px 0px;
             display: flex;
             justify-content: space-between;

             &::before {
                 content: ' ';
                 border: 2px solid green;
                 margin-right: 4px;
             }

             &.completed {
                 color: gray;
                 border-left: 0px;
             }
             
             &.removeItem {
                 color: red;
             }

             &.completed::before {
                 content: ' ';
                 border: 0px;
                 margin-right: 4px;
             }
         }
    }

     .summary {
         display: flex;
         justify-content: space-around;
         margin: 4px 0px;
     }
 }
</style>