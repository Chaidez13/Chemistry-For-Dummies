<template>
  <div>
    
  </div>
</template>

<script>
import { logOutService } from '../../utils/services'
import { mapMutations } from 'vuex'

export default {
  created(){
    this.logout();
  },
  methods:{
    ...mapMutations(["logOut"]),
    logout: function(){
      logOutService().then(() => {
        this.logOut()
         this.$router.push({ name: "home" });
         location.reload();
      })
    }
  }
}
</script>
