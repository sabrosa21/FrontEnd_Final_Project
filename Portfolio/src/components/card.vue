<template>
  <div class="card">
    <div class="imageContent">
      <g-image class="cardImage" :src="cardImg" />
    </div>

    <div class="cardContent">
      <h3>{{cardTitle}}</h3>
      <!-- Project type: Training, Professional -->
      <p>Project type: {{cardProjtype}}</p>
    </div>
    <div class="cardStack">
      <p>{{cardStack}}</p>
    </div>

    <div class="cardGithub">
      <a :href="cardGitlink" target="_blank" rel="noopener noreferrer">
        <githubCard class="giticon" />
      </a>
    </div>
  </div>
</template>

<script>
import githubCard from "~/assets/icons/githubCard.svg";

export default {
  components: {
    githubCard
  },
  props: {
    cardImg: {
      type: String,
      required: true
    },
    cardTitle: {
      type: String,
      required: true
    },
    cardProjtype: {
      type: String,
      required: true
    },
    cardStack: {
      type: String,
      required: true
    },
    cardGitlink: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  height: 200px;
  transition: box-shadow 0.5s ease-in-out;
  white-space: nowrap;
  width: 250px;

  &:hover {
    box-shadow: 0 0 20px rgba(101, 250, 239, 0.5);
  }
  .imageContent {
    height: 60%;
    text-align: center;
    .cardImage {
      height: 100%;
      width: 50%;
    }
  }

  .cardContent {
    background: white;
    display: flex;
    flex-direction: column;
    height: 30%;
    justify-content: space-evenly;
    padding-left: 15px;
    padding-right: 15px;

    p {
      font-size: 0.8rem;
    }
  }

  .cardStack {
    align-items: center;
    background: rgb(235, 235, 235);
    border-radius: 0 0 5px 5px;
    display: flex;
    flex-direction: row;
    height: 12%;
    justify-content: space-around;
    p {
      font-size: 0.8rem;
    }
  }

  .cardGithub a {
    align-items: center;
    background: black;
    border-radius: 100%;
    display: flex;
    height: 40px;
    justify-content: center;
    position: absolute;
    transform: translate(200px, -105px);
    transition: 0.2s ease-in;
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
}
</style>