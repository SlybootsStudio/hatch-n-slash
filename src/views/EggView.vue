<template>
  Egg
  <!-- Hatchery-->
  <!-- -->
  <!-- Current Stats-->
  <!--
    STR  min max
    DEX  min max
    CON  min max
    INT  min max
    WIS  min max
    Resistances
    Gold Find Boost
    Magic Find Boost
    TYPE
  -->
  <hr />
  <UpgradeCard v-bind="getItem('minstr')" />
  <UpgradeCard v-bind="getItem('maxstr')" />
  <hr />
  <div class="text-start">
    <pre>{{ getAll }}</pre>
  </div>

  <!-- Invested Materials -->
  <!-- Invest over time.-->
  <!-- List of items -->

  <button class="btn btn-primary" @click="hatchEgg">Hatch Egg</button>
</template>

<script>
// @ is an alias to /src
import UpgradeCard from "@/components/UpgradeCard.vue";

import { mapGetters } from "vuex";

export default {
  name: "Main",
  components: {
    UpgradeCard
  },
  computed: {
    ...mapGetters("eggModule", ["getAll", "getItem"])
  },
  methods: {
    hatchEgg() {
      if (confirm("Are you sure?")) {
        //todo - make a better confirmation
        console.log("Hatched!");
        //reset all dragon stats.
        // reset dragon upgrades
        // generate new dragon starting stats from egg upgrade
        // reset egg upgrades
        // generate the new random egg.
      }
    }
  }
};
</script>
