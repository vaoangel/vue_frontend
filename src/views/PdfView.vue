<template>
    <div>
        <registreViewer v-for="(data,index) in data"
        :data = data
        :key="data.id + index"/>
    </div>
</template>


<script>
import{GET_PDF} from "@/store/actions.type"
import { mapGetters } from "vuex";
import registreViewer from './registreViewer'
export default {
    name: 'PdfView',
    components:{
        registreViewer
    },

    computed:{
    ...mapGetters(["data"])

    },
    mounted(){
    this.$store.dispatch(GET_PDF)
    }
}
</script>

<style scoped>

</style>