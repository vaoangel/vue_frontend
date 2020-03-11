import {GET_PDF} from './actions.type'
import {
    FETCH_START,
    FETCH_END,
   
  } from "./mutations.type";
import {PdfService} from '../common/api.service'
  const state ={
      data:[],
      isLoading: true,
      pdfsCount: 0 
  }

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



  const actions ={
     async  [GET_PDF]({commit}){
       
       const {data} = await PdfService.getAll()
       const state2 = {
         files: []
       }
        
        for (const key in data) {
          state2.files.push(data[key])

        }
        commit(FETCH_END, state2);
       
      }
  }

  const mutations ={
    [FETCH_START](state) {
        state.isLoading = true;
      },
    [FETCH_END](state, { files,pdfsCount }) {
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