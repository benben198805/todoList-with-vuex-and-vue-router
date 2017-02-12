<template lang="pug">
    el-row#history
        el-col(:span="12", :offset="6")
                el-row.history__title
                    el-col
                        h3.title_color hisotry
                el-row.history__filter
                    el-col(:span="6")
                        el-select(v-model="selectType", multiple, placeholder="select action", @change="changeSelect()")
                            el-option(v-for="item in options",:label="item.label",:value="item.value")
                el-table(:data="records", style="width:100%", empty-text="empty")
                    el-table-column(prop="action", label="action")
                    el-table-column(prop="text", label="content")
                    el-table-column(label="time", :formatter="formatter")
</template>
<script>
    require("assets/history.scss");
    import {mapGetters} from 'vuex'
    export default {
        data(){
            return {
                selectType:[]
            }
        },
        methods:{
            formatter(row, column) {
                var date = new Date(row.time);
                var year = date.getFullYear();
                var month = (date.getMonth()+1)>10?(date.getMonth()+1):'0'+(date.getMonth()+1);
                var day = date.getDate(); 
                return [year, month, day].join('/');
            },
            changeSelect: function() {
                this.$store.dispatch('set_select_type', this.selectType.join(','));
            }
        },
        computed:mapGetters({
            records:'getHistory',
            options:'getSelectOptions'
        })
    }
</script>