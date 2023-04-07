<template>
  <div class="row justify-content-center text-center">
    <div class="col-lg-6 col-md-8 mt-5">
      <div class="footer border-top border-secondary mb-5 pt-3">
        <p class="m-0">
          <strong>{{ title }}</strong> is
          <a
            rel="noopener"
            target="_blank"
            href="https://github.com/SlybootsStudio/hack-n-slash"
            >open-source</a
          >
          and developed by
          <a rel="noopener" target="_blank" href="https://slyboots.studio"
            >Slyboots Studio</a
          >.
        </p>
        <p class="m-0">
          You can support with
          <a
            rel="noopener"
            target="_blank"
            href="https://www.patreon.com/slybootsstudio"
            >Patreon</a
          >
          or
          <a
            rel="noopener"
            target="_blank"
            href="https://ko-fi.com/slybootsstudio"
            >Ko-Fi</a
          >.
        </p>
        <ClearData />
      </div>
    </div>
  </div>
</template>
<script>
import ClearData from "@/components/misc/ClearData";
export default {
  name: "TheFooter",
  components: { ClearData },
  data() {
    return {
      title: process.env.VUE_APP_TITLE
    };
  }
};
</script>
