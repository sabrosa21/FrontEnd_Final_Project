<template>
  <div>
    <ul>
      <li>
        <a href="mailto:euricolcorreia@outlook.pt">
          <email class="navIcon" />
        </a>
      </li>
      <li>
        <a href="https://pt.linkedin.com/in/euricocorreia/" target="_blank">
          <linkedin class="navIcon" />
        </a>
      </li>
      <li>
        <a href="https://github.com/sabrosa21" target="_blank">
          <github class="navIcon" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import email from "~/assets/icons/email.svg";
import linkedin from "~/assets/icons/linkedin.svg";
import github from "~/assets/icons/github.svg";

export default {
  components: {
    email,
    linkedin,
    github
  }
};
</script>

<style lang="scss">
</style>