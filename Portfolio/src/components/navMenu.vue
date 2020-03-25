<template>
  <div>
    <ul>
      <li class="navLi">
        <g-link to="/">
          <home class="navIcon" />
          <div class="textNav navMenu1">Home</div>
        </g-link>
      </li>
      <li class="navLi">
        <g-link to="/about/">
          <about class="navIcon" />
          <div class="textNav navMenu2">About</div>
        </g-link>
      </li>
      <li class="navLi">
        <g-link to="/portfolio/">
          <portfolio class="navIcon" />
          <div class="textNav navMenu3">Portfolio</div>
        </g-link>
      </li>
      <li class="navLi">
        <g-link to="/contact/">
          <contact class="navIcon" />
          <div class="textNav navMenu4">Contact</div>
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

