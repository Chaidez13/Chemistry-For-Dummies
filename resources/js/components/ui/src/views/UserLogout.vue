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
    ...mapMutations(["changeSesion"]),
    logout: async function(){
      await axios.get('/logout').then(() => {
        this.changeSesion()
         this.$router.push({ name: "home" });
      })
    }
  }
}
</script>
