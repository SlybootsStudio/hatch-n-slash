<template>
  <nav
    class="navbar navbar-expand navbar-dark text-light border-bottom border-secondary border-2"
  >
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar">
        <div class="navbar-nav py-1"></div>
        <router-link :to="{ name: 'Main' }" class="btn btn-secondary me-3"
          >Main</router-link
        >
        <router-link :to="{ name: 'Dragon' }" class="btn btn-secondary me-3"
          >My Dragon</router-link
        >
        <router-link :to="{ name: 'Cave' }" class="btn btn-secondary me-3"
          >My Cave</router-link
        >

        <router-link :to="{ name: 'Egg' }" class="btn btn-secondary me-2"
          >My Egg</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TheNavbar",
  computed: {
    ...mapGetters(["points", "story"]),
    tavernUpgradeAvailable() {
      return this.points > 0 ? 1 : 0;
    },
    questNotification() {
      return this.story.isComplete;
    }
  }
};
</script>

<style scoped>
.badge {
  z-index: 100;
}
</style>
