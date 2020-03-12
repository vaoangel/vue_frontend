<template>
    <div>
        <registreViewer v-for="(data,index) in data"
        :data = data
        :key="data.id + index"/><!-- Aqui se recoje la información que llega del servidor mediante el mapGetters y se envia a otro componente con un v-for para poder ser renderizada-->
    </div>
</template>


<script>
import{GET_PDF} from "@/store/actions.type"
import { mapGetters } from "vuex";
import registreViewer from './registreViewer'
export default {
    name: 'PdfView',
    //Aqui se carga en este caso el componente externo en el cual se va a renderizar la información
    components:{
        registreViewer
    },

    computed:{
        //Aqui se recoje la info que viene del store
    ...mapGetters(["data"])

    },
    mounted(){
    //Al ser una simple recogida de datos sin ningún tipo de parámetros como filtro , se le indica al componente que ejecute la acción cuando se monte.
    this.$store.dispatch(GET_PDF)
    }
}
</script>

<style scoped>

</style>