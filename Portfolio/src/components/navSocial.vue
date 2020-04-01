<template>
  <div>
    <ul>
      <li class="navLi">
        <a href="mailto:euricolcorreia@outlook.pt" rel="noopener">
          <email class="navIcon" />
          <div class="textNav navMenu1">Email</div>
        </a>
      </li>
      <li class="navLi">
        <a href="https://pt.linkedin.com/in/euricocorreia/" target="_blank" rel="noopener">
          <linkedin class="navIcon" />
          <div class="textNav navMenu5">Linkedin</div>
        </a>
      </li>
      <li class="navLi">
        <a href="https://github.com/sabrosa21" target="_blank" rel="noopener">
          <github class="navIcon" />
          <div class="textNav navMenu6">GitHub</div>
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