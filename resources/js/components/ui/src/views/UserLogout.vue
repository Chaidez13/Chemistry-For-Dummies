<template>
  <div>
    
  </div>
</template>

<script>
import axios from 'axios';
import { mapMutations } from 'vuex'

export default {
  created(){
    this.logout();
  },
  methods:{
    ...mapMutations(["logOut"]),
    logout: async function(){
      await axios.get('/logout').then(() => {
        this.logOut()
         this.$router.push({ name: "home" });
      })
    }
  }
}
</script>
