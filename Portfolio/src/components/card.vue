<template>
  <div class="card">
    <g-image class="cardImage" src="~/assets/images/starter_page2_rasterized.png" />
    <div class="cardContent">
      <h3>title of the prject</h3>
      <!-- Project type: Training, Professional -->
      <p>Project type:</p>
    </div>

    <div class="cardStack">
      <p>teste</p>
    </div>

    <div class="cardGithub">
      <githubCard class="giticon" />
    </div>
  </div>
</template>

<script>
import githubCard from "~/assets/icons/githubCard.svg";

export default {
  components: {
    githubCard
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 250px;
  height: 200px;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.9);
  white-space: nowrap;
  border-radius: 5px;
  margin-bottom: 30px;
}
.cardImage {
  width: 50%;
  height: 60%;
}

.cardContent {
  height: 30%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 15px;
  padding-right: 15px;
}

.cardStack {
  height: 12%;
  background: rgb(235, 235, 235);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 0 0 5px 5px;
}

.cardGithub {
  align-items: center;
  background: black;
  border-radius: 50%;
  display: flex;
  height: 40px;
  justify-content: center;
  position: absolute;
  transform: translate(200px, 100px);
  transition: 0.1s ease-in;
  width: 40px;
  .giticon {
    color: #66fcf1;
  }
  &:hover {
    background: #66fcf1;
    .giticon {
      color: black;
    }
  }
}
</style>