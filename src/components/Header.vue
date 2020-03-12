<template>
	<div>
		<div class="header">
			<img src="../assets/acabadosInsa.png" class="logo"/>
		</div>
		<b-navbar toggleable="lg" type="dark" class="navbar">
			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<b-nav-item href="/">Home</b-nav-item><!-- Link a la pàgina principal-->
					<b-nav-item href="/login">Login</b-nav-item><!-- Link a la pàgina de login-->
					<div id="logout" v-if="currentUser" class="in-line">
						<b-nav-item v-on:click="logout" href="/login">LogOut</b-nav-item><!--Comprueba si hay un usuario logueado y si es asi se muestra un botón para desloguearse-->
					</div>
					<div id="usuaris" v-if="currentUser">
						<b-nav-item href="http://127.0.0.1:8000/files/admin/" v-if="currentUser.is_staff == true">Upload Files</b-nav-item><!--Una ruta para un usuario de tipo is_staff y otra para usuarios normales, las cuales redirigen al backend para que puedan realizar sus respectivas acciones-->
						<b-nav-item :href="'http://127.0.0.1:8000/files/basic-upload/?username='+`${currentUser.username}`" v-else>Print</b-nav-item>

					</div>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script>
import { LOGOUT } from "@/store/actions.type";
import { mapGetters } from "vuex";

export default {
  name: "Header",
  methods: {
    logout(ev) {
	ev.preventDefault();
      this.$store.dispatch(LOGOUT);//funcion que llama al método logout, esto ira navegando por toda la Store hasta encontrar donde se llama este método
    }
  },
  computed: {
	//Aqui recojemos el usuario que esta logueado actualmente
    ...mapGetters(["currentUser"])
  }
};
</script>

<style scoped>
	.header {
		text-align: center;
	}

	.logo {
		display: inline-block;
	}

	.navbar {
		background-color: #487CB5;
	}
</style>