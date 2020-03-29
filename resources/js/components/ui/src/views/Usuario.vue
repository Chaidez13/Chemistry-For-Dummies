<template>
  <sign v-if="!sesion" />
</template>

<script>
import Sign from "../components/Sign";
import { mapState } from "vuex";

export default {
  name: "Usuario",
  components: {
    Sign
  },
  computed: {
    ...mapState(["sesion"])
  },
  beforeCreate() {
    if(this.sesion)
      this.$router.push({ name: "home" });
  }
};
</script>