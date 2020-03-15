<template>
  <div class="layout">
    <burgerMenu />
    <navMenu id="nav-right" />
    <navSocial id="nav-left" />
    <slot />
  </div>
</template>

<script>
import burgerMenu from "@/components/burgerMenu";
import navMenu from "@/components/navMenu";
import navSocial from "@/components/navSocial";

export default {
  components: {
    burgerMenu,
    navMenu,
    navSocial
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

#nav-left {
  position: fixed;
  top: 50%;
  left: 40px;
  transform: translate(-50%, -50%);
}
</style>
