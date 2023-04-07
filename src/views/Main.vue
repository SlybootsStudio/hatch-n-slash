<template>
  <ul>
    <h5 class="mt-5">Single player game.</h5>
    <li>No authentication.</li>
    <li>Free. Completely. No ads. No data collection.</li>
    <li>Patreon or Ko Fi support.</li>
    <li>No turns.</li>
    <li>Offline play. Maybe a fatigue system.</li>

    <h5 class="mt-5">Main Game Loop</h5>
    <li>You are a dragon.</li>
    <li>You collect treasure.</li>
    <li>You battle.</li>
    <li>You can select different battle regions/mobs.</li>
    <li>Different regions/mobs have different drop tables.</li>
    <h5 class="mt-5">Upgrades</h5>
    <li>You can upgrade your Cave (most expensive)</li>
    <li>Cave is persistent throughout generations.</li>
    <li>
      You can upgrade yourself (these are cheaper, but only last one
      generation).
    </li>
    <li>
      You can upgrade the egg (these invest over time, and influence the next
      generation).
    </li>

    <h5 class="mt-5">Prestige</h5>
    <li>We have an egg.</li>
    <li>Egg is generated randomly.</li>
    <li>Common, Rare types. Add more types in the future.</li>
    <li>The egg is the prestige system.</li>
    <li>Hatching the egg retires your current dragon.</li>
  </ul>
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
