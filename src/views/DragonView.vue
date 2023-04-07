<template>
  <div class="fs-3 fw-bold">Dragon</div>
  
  <div class="alert alert-info">Welcome to the cave. Upgrades here are expensive, but last many generations.</div>
  
  
  <!-- UpgradeComponent -->
    <!-- Tooltip -->
  <div class="d-flex justify-content-between border border-secondary rounded p-3">
    <div class="">Upgrade 1</div>
    <div class="d-flex">
    <div class=" me-3">Cost</div>
    <div class=""><button class="btn btn-link m-0 p-0">Upgrade</button></div>
    </div>
    </div>
</template>

<script>
// @ is an alias to /src
//import comp from "@/components/comp.vue";

export default {
  name: "Main",
  components: {
    //    comp,
  }
};
</script>
