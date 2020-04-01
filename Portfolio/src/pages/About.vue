<template>
  <Layout>
    <h1 class="mainTitle">About</h1>
    <div class="commonText aboutText">
      <span class="colorText changeFont">Hello World</span>, my name is
      <span class="colorText">Eurico Correia</span>, a Portuguese soon-to-be
      <span class="colorText">developer</span> who lives in
      <span class="colorText">Aveiro</span>. I developed my taste for
      <span class="colorText">coding</span> a few years ago, but only now I took the first steps into the marvellous world of coding. Striving to become great at
      <span
        class="colorText"
      >frontend web development</span>, I work every day to reach this goal. I like to
      <span class="colorText">solve</span> problems,
      <span class="colorText">create</span> smart user interfaces with useful interaction and
      <span class="colorText">develop</span> rich
      <span class="colorText">web</span> experiences and
      <span class="colorText">applications</span>.
    </div>

    <h2 class="secTitle">Skills</h2>
    <!-- ******** Skills component ******** -->
    <skills />
  </Layout>
</template>

<script>
import skills from "@/components/skills";

export default {
  metaInfo: {
    title: "About"
  },

  components: {
    skills
  }
};
</script>

<style lang="scss">
.aboutText {
  color: white;
  letter-spacing: 0.4px;
  line-height: 1.8rem;
  padding: 5% 0;

  .changeFont {
    font-family: "Times New Roman";
    font-size: 1.6rem;
    letter-spacing: 0.1rem;
  }

  .colorText {
    color: #66fcf1;
  }
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 3%;
  border-bottom: 1px solid #66fcf1;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    filter: grayscale(100%);
    transition: filter 0.5s ease-in-out;

    .eachSkill,
    p {
      transition: opacity 0.5s ease-in-out;
    }

    .eachSkill {
      height: 100px;
      width: 80px;
      margin: 10px;
    }

    p {
      color: #66fcf1;
      opacity: 0;
    }

    &:hover {
      filter: none;
      p {
        opacity: 1;
      }
    }
  }
}
</style>
