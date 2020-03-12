<template>
  <div>
    <h1>Login</h1>
    <b-form @submit.prevent="onSubmit(email, password)"><!--Formulario con un OnSubmit para procesat la información insertada-->
      <b-form-group>
        <b-input id="email" autocomplete="off" v-model="email" placeholder="Email" />
        <!--Los input van con el atributo v-model para que sea visible para el componente de vue-->
        <b-input
          id="password"
          type="password"
          autocomplete="off"
          v-model="password"
          placeholder="Password"
        />
        <b-button type="submit" variant="outline-light" class="btn-block">Login</b-button><!--Botón de tipo submit que activa en onSubmit del formulario-->
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import { LOGIN } from "@/store/actions.type.js";
export default {
  name: "Login",
  data() {
    //Estos datos se pintan como defaults en los v-model
    return {
      email: 'aa@aa.com',
      password: '12345678'
    };
  },
  methods: {
    //Aqui tenemos el onSubmit del formulario donde procesa toda la información
    async onSubmit(email, password) {
      try {
        await this.$store.dispatch(LOGIN, {email, password});//Esta accion realiza el dispatch a donde quiera que se esté llamando en la store
        this.$router.replace('/');
      } catch (error) {
        // console.log(error);
        alert(error)
      }
    }
  }
};
</script>