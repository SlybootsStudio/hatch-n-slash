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
        <div
          :class="`text-${rarity}`"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-custom-class="custom-tooltip"
          data-bs-html="true"
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
    </div>
  </div>
</template>

<script>
import { Tooltip } from "bootstrap";

export default {
  name: "ItemCard",
  components: {},
  data() {
    return {
      tooltips: []
    };
  },
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
  computed: {
    getTitle() {
      return `<div class='text-start'><span class='fw-bold text-${this.rarity}'>${this.label}</span><br/><!---${this.description}.<br/>--><i>You have: ${this.amount}</i></div>`;
    }
  },
  methods: {},
  mounted() {
    const tooltipTriggerList = this.$refs.card.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    [...tooltipTriggerList].map(
      (tooltipTriggerEl) =>
        new Tooltip(tooltipTriggerEl, { title: this.getTitle })
    );
  },
  updated() {
    //console.log(tooltipTriggerList);
    const tooltipTriggerList = this.$refs.card.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    [...tooltipTriggerList].map((tooltipTriggerEl) => {
      let tooltip = Tooltip.getOrCreateInstance(tooltipTriggerEl);
      tooltip.setContent({ ".tooltip-inner": this.getTitle });
    });
  }
};
</script>

<style>
.custom-tooltip * {
  text-align: left;
}
</style>
