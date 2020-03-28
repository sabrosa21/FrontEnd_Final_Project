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
  //******* Array with each card information
  data() {
    return {
      cards: [
        {
          id: 1,
          cardImg: "~/portfolio_img/starter_page2_rasterized.png",
          cardTitle: "Harry Potter",
          cardProjtype: "Training",
          cardStack: "HTML5 | CSS3",
          cardGitlink: "https://github.com/sabrosa21/Harry-Potter"
        },
        {
          id: 2,
          cardImg: "~/assets/images/starter_page2_rasterized.png",
          cardTitle: "Memmory Game",
          cardProjtype: "Training",
          cardStack: "HTML5 | SCSS | JS",
          cardGitlink: "https://github.com/sabrosa21/MemoryGame"
        },
        {
          id: 3,
          cardImg: "~/assets/images/starter_page2_rasterized.png",
          cardTitle: "Comming soon",
          cardProjtype: "Training",
          cardStack: "HTML5 | CSS3",
          cardGitlink: "github.com/sabrosa21/gulp-proj-starter"
        },
        {
          id: 4,
          cardImg: "~/assets/images/starter_page2_rasterized.png",
          cardTitle: "Teste4",
          cardProjtype: "Training",
          cardStack: "HTML5 | CSS3",
          cardGitlink: "https://github.com/sabrosa21/Testes3"
        },
        {
          id: 5,
          cardImg: "~/assets/images/starter_page2_rasterized.png",
          cardTitle: "Teste5",
          cardProjtype: "Training",
          cardStack: "HTML5 | CSS3",
          cardGitlink: "https://github.com/sabrosa21/Testes4"
        },
        {
          id: 6,
          cardImg: "~/assets/images/starter_page2_rasterized.png",
          cardTitle: "Teste6",
          cardProjtype: "Training",
          cardStack: "HTML5 | CSS3",
          cardGitlink: "https://github.com/sabrosa21/Testes5"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
//******* Styling the cards
.allCards {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  height: 80vh;
  justify-content: center;
  .eachCard {
    display: flex;
    flex-basis: 30%;
    justify-content: center;
    margin: 1%;
    .card {
      margin: 0;
    }
  }
}
</style>