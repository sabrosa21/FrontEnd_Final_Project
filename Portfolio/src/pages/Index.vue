<template>
  <Layout>
    <g-image class="mainImage" src="~/assets/images/starterPage.png"></g-image>
  </Layout>
</template>

<script>
import burgerMenu from "@/components/burgerMenu";

export default {
  metaInfo: {
    //********* Titulo que aparece na tab
    title: "Home"
  },
  components: {
    burgerMenu
  }
};
</script>

<style>
.mainImage {
  width: 85%;
  height: auto;
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
