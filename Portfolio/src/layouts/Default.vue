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

<style lang="scss">
.layout {
  margin: 0 8%;
}

#nav-right {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translate(-50%, -50%);
}

#nav-left {
  left: 40px;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
