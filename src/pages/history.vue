<template>
    <div id="history">
        <h3 class="title_color">hisotry</h3>
        <table>
            <tr>
                <td></td>
                <td>action</td>
                <td>content</td>
                <td>time</td>
            </tr>
             <tr v-for="(item, index) in records">
                <td>{{index+1}}</td>
                <td>{{item.action}}</td>
                <td>{{item.text}}</td>
                <td>{{item.time}}</td>
            </tr>
        </table>
       
    </div>
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