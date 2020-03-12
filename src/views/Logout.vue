<template>
	<div>
        {{currentUser}}
	</div>
</template>

<script>
import { LOGOUT } from "@/store/actions.type";
import { mapGetters } from "vuex";

export default {
  name: "Header",

  computed: {
    ...mapGetters(["currentUser"])

  },
  mounted(){
        this.logout()

  },
  methods:{
      logout(){
          this.$store.dispatch(LOGOUT);
        this.$router.replace('/login');
      }
  }

};
</script>