<template>
  <div class="skills">
    <div class="eachSkill" v-for="skill in skills" :key="skill.id">
      <div v-html="skill.svg"></div>
      <!-- <bootstrap class="skill" /> -->
    </div>
  </div>
</template>

<script>
import bootstrap from "~/assets/icons/bootstrap.svg";
import css from "~/assets/icons/css.svg";
import git from "~/assets/icons/git.svg";
import github from "~/assets/icons/github.svg";
import gridsome from "~/assets/icons/gridsome.svg";
import gulp from "~/assets/icons/gulp.svg";
import html5 from "~/assets/icons/html5.svg";
import illustrator from "~/assets/icons/illustrator.svg";
import js from "~/assets/icons/js.svg";
import photoshop from "~/assets/icons/photoshop.svg";
import sass from "~/assets/icons/sass.svg";
import sqlserver from "~/assets/icons/sqlserver.svg";
import vue from "~/assets/icons/vue.svg";

export default {
  components: {
    bootstrap,
    css,
    git,
    github,
    gridsome,
    gulp,
    html5,
    illustrator,
    js,
    photoshop,
    sass,
    sqlserver,
    vue
  },

  data() {
    return {
      skills: [
        {
          id: 1,
          svg: "bootstrap",
          text: "Bootstrap 4"
        },
        {
          id: 2,
          svg: css,
          text: "CSS3"
        },
        {
          id: 3,
          svg: git,
          text: "Git"
        },
        {
          id: 4,
          svg: github,
          text: "GitHub"
        },
        {
          id: 5,
          svg: gridsome,
          text: "Gridsome"
        },
        {
          id: 6,
          svg: gulp,
          text: "Gulp"
        },
        {
          id: 7,
          svg: html5,
          text: "HTML5"
        },
        {
          id: 8,
          svg: illustrator,
          text: "Illustrator"
        },
        {
          id: 9,
          svg: js,
          text: "JavaScript"
        },
        {
          id: 10,
          svg: photoshop,
          text: "Photoshop"
        },
        {
          id: 11,
          svg: sass,
          text: "Sass"
        },
        {
          id: 12,
          svg: sqlserver,
          text: "SQL Server"
        },
        {
          id: 13,
          svg: vue,
          text: "Vue.js"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .eachSkill {
    width: 3rem;
    height: 3rem;
  }
}
</style>