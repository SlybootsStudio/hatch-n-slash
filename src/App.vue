<template>
  <div class="container-fluid p-0">
    <TheHeader />
    <TheNavbar />
    <div class="container">
      <router-view />
    </div>
    <TheFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from "@/components/layout/TheHeader.vue";
import TheNavbar from "@/components/layout/TheNavbar.vue";
import TheFooter from "@/components/layout/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheNavbar,
    TheFooter
  }
};
</script>
