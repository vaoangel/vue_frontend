<template>
  <div>
	<div id="header">
		<div id="home">
		<router-link to="/">Home</router-link> 
		</div>	
		<div id="login" >
		<router-link to="/login">login</router-link> 
		</div> 
		<div id="logout" v-if="currentUser" class="in-line">
		<a href="" v-on:click="logout">Logout</a>
		</div> 
		<div id="usuaris"  v-if="currentUser">

			<a href="http://127.0.0.1:8000/files/admin/" v-if="currentUser.is_staff == true">Upload Files</a>
			<a :href="'http://127.0.0.1:8000/files/basic-upload/?username='+`${currentUser.username}`" v-else>Print</a>
		</div>
	</div>
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
			this.$store.dispatch(LOGOUT)
		}
	},
	computed: {
		...mapGetters(["currentUser"])
	}
};
</script>

<style scoped>
#header{
	width: 100%;
	background:#087ab6;
	color: white;
	font-size: 30px;
	display: grid;
	grid-template-areas: "home login logout usuaris" ;
	justify-content: space-around;
	align-content: space-around;

}

#header>div{
	background-color: #333333;
	width: 200px;
	height: auto;
	text-align: center;
	border-radius: 7px;
}
#home{
	grid-area: home; 
}

body{
	background-color: #087ab6;
}
#login{grid-area: login;}
#logout{grid-area:logout;}
#usuaris{grid-area:usuaris;}

</style>