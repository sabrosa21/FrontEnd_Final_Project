<template>
  <Layout>
    <h1 class="mainTitle">About</h1>
    <div class="aboutText">
      Hello World, my name is
      <span class="colorText">Eurico Correia</span>, a Portuguese soon-to-be
      <span class="colorText">developer</span> who lives in
      <span class="colorText">Aveiro</span>. I developed my taste for
      <span class="colorText">coding</span> a few years ago, but only now I took the first steps into the marvellous world of coding. Striving to become great at
      <span class="colorText">frontend web development</span>, I work every day to reach this goal. I like to
      <span class="colorText">solve</span> problems,
      <span class="colorText">create</span> smart user interfaces with useful interaction and
      <span class="colorText">develop</span> rich
      <span class="colorText">web</span> experiences and
      <span class="colorText">applications</span>.
    </div>
  </Layout>
</template>

<script>
export default {
  //********* Titulo que aparece na tab *********
  metaInfo: {
    title: "About"
  }
};
</script>

<style lang="scss" scoped>
.aboutText {
  color: white;
  .colorText {
    color: #66fcf1;
  }
}
</style>
