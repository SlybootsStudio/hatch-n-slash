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

    <h5 class="mt-5">Dragon cycle</h5>
    <li>Hatch the egg.</li>
    <li>Dragon grows.</li>
    <li>Dragon can 'reincarnate' into a soulstone, and become a new egg.</li>
    <li>The dragon has a multiplier.</li>
  </ul>

  <br />

  <table class="table table-bordered">
    <tr>
      <td class="align-middle" rowspan="4">
        <button class="btn btn-outline-secondary w-100">T1</button>
      </td>
    </tr>
    <tr>
      <td class="align-middle" rowspan="2">
        <button class="btn btn-outline-secondary w-100">T2</button><br />
      </td>
      <td class="align-middle" rowspan="2">
        <button class="btn btn-outline-secondary w-100">T2</button>
      </td>
    </tr>
    <tr rowspan="4">
      <td>
        <button class="btn btn-outline-secondary w-100">T3</button><br />
        <button class="btn btn-outline-secondary w-100">T3</button>
      </td>
    </tr>
    <tr rowspan="4">
      <td>
        <button class="btn btn-outline-secondary w-100">T3</button><br />
        <button class="btn btn-outline-secondary w-100">T3</button>
      </td>
    </tr>
    <tr>
      <td class="align-middle" rowspan="4">
        <button class="btn btn-outline-secondary w-100">T1</button>
      </td>
    </tr>
    <tr>
      <td class="align-middle" rowspan="3">
        <button class="btn btn-outline-secondary">T2</button><br />
        <button class="btn btn-outline-secondary">T2</button>
      </td>
    </tr>
    <tr>
      <td>
        <button class="btn btn-outline-secondary">T3</button><br />
        <button class="btn btn-outline-secondary">T3</button>
      </td>
    </tr>
    <tr>
      <td>
        <button class="btn btn-outline-secondary">T3</button><br />
        <button class="btn btn-outline-secondary">T3</button>
      </td>
    </tr>
  </table>
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
