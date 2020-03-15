<template>
  <div>
    <ul>
      <li>
        <g-link to="/">
          <home class="navIcon" />
        </g-link>
      </li>
      <li>
        <g-link to="/about/">
          <about class="navIcon" />
        </g-link>
      </li>
      <li>
        <g-link to="/portfolio/">
          <portfolio class="navIcon" />
        </g-link>
      </li>
      <li>
        <g-link to="/contact/">
          <contact class="navIcon" />
        </g-link>
      </li>
    </ul>
  </div>
</template>

<script>
import home from "~/assets/icons/home.svg";
import about from "~/assets/icons/about.svg";
import portfolio from "~/assets/icons/portfolio.svg";
import contact from "~/assets/icons/contact.svg";

export default {
  components: {
    home,
    about,
    portfolio,
    contact
  }
};
</script>

<style lang="scss">
</style>