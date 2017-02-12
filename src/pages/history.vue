<template lang="pug">
    el-row#history
        el-col(:span="12", :offset="6")
                el-row.history__title
                    el-col
                        h3.title_color hisotry
                el-table(:data="records", style="width:100%")
                    el-table-column(lable="index")
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

            }
        },
        methods:{
            formatter(row, column) {
                var date = new Date(row.time);
                var year = date.getFullYear();
                var month = (date.getMonth()+1)>10?(date.getMonth()+1):'0'+(date.getMonth()+1);
                var day = date.getDate(); 
                return [year, month, day].join('/');
            }
        },
        computed:mapGetters({
            records:'getHistory'
        })
    }
</script>