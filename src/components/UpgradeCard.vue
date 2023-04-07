<template>
  <div>
    <div class="" ref="card">
      <div
        class="d-flex"
        :class="{
          'justify-content-between': twoColumn,
          'justify-content-end': !twoColumn
        }"
      >
        <div class="d-flex">
          <div
            :class="`text-${rarity}`"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            :data-bs-title="getTitle()"
            data-bs-custom-class="custom-tooltip"
            data-bs-html="true"
            class="me-3"
          >
            [{{ label }}]
          </div>
          <div
            :class="{
              'ms-3': !twoColumn
            }"
          >
            {{ amount }}
          </div>
        </div>
        <div class="d-flex">
          <div
            class="me-3"
            :class="{
              'ms-3': !twoColumn
            }"
          >
            10 Gold
          </div>
          <div>
            [<button
              class="btn btn-link m-0 p-0 text-decoration-none"
              @click="upgradeEgg('minstr')"
            >
              Upgrade</button
            >]
          </div>
        </div>
      </div>
    </div>

    <!--  <div class="d-flex justify-content-between border border-secondary rounded p-3">
    <div class="d-flex">
    <div class=" me-3">Cost</div>
    <div class=""></div>
    </div>
    </div>-->
  </div>
</template>

<script>
import { Tooltip } from "bootstrap";

import { mapActions } from "vuex";
export default {
  name: "ItemCard",
  components: {},
  props: {
    label: String,
    description: String,
    amount: Number,
    rarity: String,
    twoColumn: {
      type: Boolean,
      default: true
    }
  },
  computed: {},
  methods: {
    ...mapActions({
      addEggItem: "eggModule/addItem",
      addGoldItem: "inventoryModule/addItem"
    }),
    getTitle() {
      return `<div class='text-start'><span class='fw-bold text-${this.rarity}'>${this.label}</span><br/><!---${this.description}.<br/>--><i>You have: ${this.amount}</i></div>`;
    },
    upgradeEgg(stat) {
      // todo -- rules engine
      // -- make sure you can afford the upgrade
      // style the button accordingly if you're missing the amount
      // cost to upgrade should scale.
      // cost should be calculated in vuex.
      this.addEggItem({ id: stat, amount: 1 });
      this.addGoldItem({ id: "gold", amount: -10 });
    }
  },
  mounted() {
    const tooltipTriggerList = this.$refs.card.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
    );
  }
};
</script>

<style>
.custom-tooltip * {
  text-align: left;
}
</style>
