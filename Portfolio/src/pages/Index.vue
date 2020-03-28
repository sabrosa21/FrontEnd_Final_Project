<template>
  <Layout>
    <g-image class="mainImage" src="~/assets/images/starterPage.png"></g-image>
  </Layout>
</template>

<script>
import burgerMenu from "@/components/burgerMenu";

export default {
  metaInfo: {
    title: "Home"
  },
  components: {
    burgerMenu
  }
};
</script>

<style>
.mainImage {
  height: auto;
  left: 50%;
  position: fixed;
  top: 55%;
  transform: translate(-50%, -50%);
  width: 80%;
}
</style>
