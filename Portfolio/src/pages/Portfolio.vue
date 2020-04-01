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
          :cardAlt="item.cardAlt"
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
          cardImg: "/portfolio_img/starter_page2_rasterized.png",
          cardTitle: "Harry Potter",
          cardProjtype: "Training",
          cardStack: "HTML5 | CSS3",
          cardGitlink: "https://github.com/sabrosa21/Harry-Potter",
          cardAlt: "Harry Potter site"
        },
        {
          id: 2,
          cardImg: "/portfolio_img/starter_page2_rasterized.png",
          cardTitle: "HangMan",
          cardProjtype: "Training",
          cardStack: "HTML5 | SCSS | JQuery | Gulp",
          cardGitlink: "https://github.com/sabrosa21/HangMan",
          cardAlt: "Hangman game"
        },
        {
          id: 3,
          cardImg: "/portfolio_img/starter_page2_rasterized.png",
          cardTitle: "Memmory Game",
          cardProjtype: "Training",
          cardStack: "HTML5 | SCSS | JS | Gulp",
          cardGitlink: "https://github.com/sabrosa21/MemoryGame",
          cardAlt: "Memmory game"
        },
        {
          id: 4,
          cardImg: "/portfolio_img/starter_page2_rasterized.png",
          cardTitle: "Comming soon",
          cardProjtype: "Training",
          cardStack: "HTML5 | CSS3",
          cardGitlink: "https://github.com/sabrosa21/Testes3",
          cardAlt: "Coming soon"
        },
        {
          id: 5,
          cardImg: "/portfolio_img/starter_page2_rasterized.png",
          cardTitle: "Coming Soon",
          cardProjtype: "Training",
          cardStack: "HTML5 | CSS3",
          cardGitlink: "https://github.com/sabrosa21/Testes4",
          cardAlt: "Coming soon"
        },
        {
          id: 6,
          cardImg: "/portfolio_img/starter_page2_rasterized.png",
          cardTitle: "Coming Soon",
          cardProjtype: "Training",
          cardStack: "HTML5 | CSS3",
          cardGitlink: "https://github.com/sabrosa21/Testes5",
          cardAlt: "Coming soon"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
//******* Styling the cards
.allCards {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  height: 80vh;
  justify-content: center;
  margin: auto;
  //padding: 5% 0;
  .eachCard {
    display: flex;
    flex-basis: 30%;
    justify-content: center;
    .card {
      margin: 0;
    }
  }
}
</style>