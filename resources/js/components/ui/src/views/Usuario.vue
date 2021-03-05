<template>
  <sign v-show="!sesion.status" />
</template>

<script>
import Sign from "../components/Sign";
import { mapState } from "vuex";

export default {
  name: "Usuario",
  components: {
    Sign,
  },
  computed: {
    ...mapState(["sesion"]),
  },
  created() {
    if (this.sesion.status) this.$router.push({ name: "home" });
  },
};
</script>