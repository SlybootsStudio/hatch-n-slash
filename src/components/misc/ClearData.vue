<template>
  <button @click="clearData()" class="btn text-danger btn-link fw-bold">
    Clear Data
  </button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ClearData",
  methods: {
    ...mapActions(["reset"]),
    clearData() {
      if (confirm("Are you sure?")) {
        this.reset();
        window.localStorage.clear();
        window.localStorage.removeItem("store");
        window.location.reload();
      }
    }
  }
};
</script>