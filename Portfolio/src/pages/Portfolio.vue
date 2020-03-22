<template>
  <Layout>
    <h1 class="mainTitle">Portfolio</h1>
    <div class="allCards">
      <div class="eachCard" v-for="item in cards" :key="item.id">
        <card
          :cardImg="item.cardImg"
          :cardTitle="item.cardTitle"
          :cardProjtype="item.cardProjtype"
          :cardStack="item.cardStack"
          :cardGitlink="item.cardGitlink"
        />
      </div>
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
  },
  //******* Array with card information
  data() {
    return {
      cards: [
        {
          id: 1,
          cardImg: "~/assets/images/starter_page2_rasterized.png",
          cardTitle: "Teste1",
          cardProjtype: "Training",
          cardStack: "HTML | CSS",
          cardGitlink: "https://github.com/sabrosa21/Testes"
        },
        {
          id: 2,
          cardImg: "~/assets/images/starter_page2_rasterized.png",
          cardTitle: "Teste2",
          cardProjtype: "Training",
          cardStack: "HTML | CSS",
          cardGitlink: "https://github.com/sabrosa21/Testes1"
        },
        {
          id: 3,
          cardImg: "~/assets/images/starter_page2_rasterized.png",
          cardTitle: "Teste3",
          cardProjtype: "Training",
          cardStack: "HTML | CSS",
          cardGitlink: "https://github.com/sabrosa21/Testes2"
        },
        {
          id: 4,
          cardImg: "~/assets/images/starter_page2_rasterized.png",
          cardTitle: "Teste4",
          cardProjtype: "Training",
          cardStack: "HTML | CSS",
          cardGitlink: "https://github.com/sabrosa21/Testes3"
        },
        {
          id: 5,
          cardImg: "~/assets/images/starter_page2_rasterized.png",
          cardTitle: "Teste5",
          cardProjtype: "Training",
          cardStack: "HTML | CSS",
          cardGitlink: "https://github.com/sabrosa21/Testes4"
        },
        {
          id: 6,
          cardImg: "~/assets/images/starter_page2_rasterized.png",
          cardTitle: "Teste6",
          cardProjtype: "Training",
          cardStack: "HTML | CSS",
          cardGitlink: "https://github.com/sabrosa21/Testes5"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.allCards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .eachCard {
    display: flex;
    justify-content: center;
    flex-basis: 30%;
  }
}
</style>