<template>
  <div class="layout">
    <header class="header">
      <!-- <nav class="nav"> -->
      <burgerMenu />
      <!-- </nav> -->
    </header>
    <slot />
  </div>
</template>

<script>
import burgerMenu from "@/components/burgerMenu";

export default {
  components: {
    burgerMenu
  }
};
</script>

<style>
body {
  /* margin: 0;
  padding: 0;
  line-height: 1.5; */
  overflow-x: hidden;
}

/* .layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
} */
</style>
