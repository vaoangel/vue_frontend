import {GET_PDF} from './actions.type'
import {
    FETCH_START,
    FETCH_END,
   
  } from "./mutations.type";

//Se recojen las actions y las mutations que se van a utilizar
import {PdfService} from '../common/api.service'
//Se definen las variables del state que va a usar
  const state ={
      data:[],
      isLoading: true,
      pdfsCount: 0 
  }

  //en los getters se modifica la información del state desde las mutations
  const getters = {
      data(state){        
          return state.data;
      },
      isLoading(state){
          return state.isLoading;
      },
      pdfsCount(state){
          return state.pdfsCount;
      }
  }


//cuando se dispara el dispatch en los componentes de vue , este mismo va recorriendo todo el store vigilando donde se llama la acción designada
  const actions ={
     async  [GET_PDF]({commit}){
      // data recoje la información que viene del service con una promesa, una vez la información ha llegado ya se procesa
       const {data} = await PdfService.getAll()

       //En este caso por el tipo de información necesité crear un state secundario con un array para poder renderizar bien la información
       const state2 = {
         files: []
       }
        
       //Aqui renderizaba la información y la metia en un array nuevo
        for (const key in data) {
          state2.files.push(data[key])

        }

        //Finalmente se envia a una variable de las mutations para canviar el state del store
        commit(FETCH_END, state2);
       
      }
  }

  const mutations ={
    [FETCH_START](state) {
        state.isLoading = true;
      },
    [FETCH_END](state, { files,pdfsCount }) {
      //Aqui se recoje la información renderizada y se le aplica al state para que dicha información pueda ser vista por el componente de vue
        state.data = files;
        state.isLoading = false;
        state.pdfsCount = pdfsCount
      },
  }

  export default {
    state,
    getters,
    actions,
    mutations
}