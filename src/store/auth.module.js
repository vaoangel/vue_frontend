import ApiService, { Auth } from "../common/api.service";
import { destroyToken, getToken, saveToken } from "../common/jwt.service";
import { CHECK_AUTH, LOGIN, LOGOUT, REGISTER } from "./actions.type";
//Se recojen las actions y las mutations que se van a utilizar

//Se definen las variables del state que va a usar
const state = {
    errors: null,
    user: null
};
const actions = {
    async [LOGIN]({ commit }, login) {
        //Recojemos la información que vuelve del servidor
        const res = await Auth.login(login);
        // console.log('LOGIN', res);
        //Se llama a una mutation para que renderice la información en el state
        commit(LOGIN, res);
    },

    async [CHECK_AUTH]({ commit }) {
        //Se comprueba si existe un usuario logueado mendiante una función del jwtService
        if (getToken()) {
            ApiService.setHeader();
            //establecemos el token en los headers de la app para poder hacer peticiones autorizadas al servidor
            // console.log('GET CURRENT');
            
            let user = await Auth.current();
            // Recojemos el usuario logueado y lo enviamos a la mutation para que lo renderice
            commit(CHECK_AUTH, user)
        }
    },

    [LOGOUT]({ commit }) {
        commit(LOGOUT);
    },

    async [REGISTER]({ commit }, register) {
        const log = await Auth.register(register);
        console.log(REGISTER, log);
        commit(REGISTER, log);
    }
};



const mutations = {
    [LOGIN](state, result) {
        console.log(result);
        
        //Modificamos el state del componente con los datos provenientes de las actions
        state.user = {
            username: result.data.user.username,
            email: result.data.user.email,
            is_staff: result.data.user.is_staff
        };
        //se guarda el token proveniente de BDD y se aplica en el header 
        saveToken(result.data.user.token);
        ApiService.setHeader();

        console.log("state", state.user);
        console.log("res", result);
    },
    [LOGOUT](state) {
        //se destruye la sesión del usuario
        state.user = null;
        ApiService.destroyHeader();
        destroyToken();
    },
    [REGISTER](state, result) {
        //Modificamos el state del componente con los datos provenientes de las actions

        state.user = {
            username: result.data.user.username,
            email: result.data.user.email,
            is_staff: result.data.user.is_staff

        };
    },
    [CHECK_AUTH](state, result) {
        //Modificamos el state del componente con los datos provenientes de las actions
        state.user = {
            username: result.data.user.username,
            email: result.data.user.email,
            is_staff: result.data.user.is_active

        };
    }
};



const getters = {
    currentUser() {
         console.log(state.user);
        
        return state.user;
    }
};

export default {
    state,
    mutations,
    actions,
    getters,
};