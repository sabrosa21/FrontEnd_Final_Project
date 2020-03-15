<template>
  <div class="layout">
    <burgerMenu />
    <navMenu id="nav-right" />
    <slot />
  </div>
</template>

<script>
import burgerMenu from "@/components/burgerMenu";
import navMenu from "@/components/navMenu";

export default {
  components: {
    burgerMenu,
    navMenu
  }
};
</script>

<style>
body {
  overflow-x: hidden;
}

#nav-right {
  position: fixed;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
}
</style>
