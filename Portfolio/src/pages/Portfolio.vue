<template>
  <Layout>
    <h1 class="mainTitle">Portfolio</h1>
    <div class="allCards">
      <card />
      <card />
      <card />
      <card />
      <card />
      <card />
    </div>
  </Layout>
</template>

<script>
import card from "@/components/card";

export default {
  metaInfo: {
    title: "Portfolio"
  },
  components: {
    card
  }
};
</script>

<style lang="scss" scoped>
.allCards {
  width: 75%;
  margin: auto;
  display: flex;
  justify-content: space-between;

  flex-wrap: wrap;
}
</style>