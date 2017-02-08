<template lang="pug">
    el-row#home
        el-col(:span="12", :offset="6")
            el-row.home__title
                el-col
                    h3.title_color {{title}}
            el-row.home__notice
                el-col(:span="12", :offset="12")
                    el-button(type="primary",size="mini",icon="edit") {{doneItemsCount}}
                    el-button(type="primary",size="mini",icon="check") {{doingItemsCount}}
            el-row.home__content
                el-col(:span="12", :offset="6")
                    table
                        tr(v-for="(item, index) in items",@dblclick="removeItem(index)")
                            td(:class="{ isDone: item.isDone }")
                                el-checkbox(@change="complete(index)")
                                span(@click="complete(index)") {{item.text}}
                                el-button(type="primary", icon="circle-close", size="small", @click="removeItem(index)")
            el-row.home__actoin(type="flex", justify="center")
                el-col(:span="6")
                    el-input(type="text", name="", v-model="newItem")
                el-col(:span="2", :offset="1")
                    el-button(type="primary", @click="addItem") add
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