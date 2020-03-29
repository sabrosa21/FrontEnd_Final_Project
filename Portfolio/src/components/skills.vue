<template>
  <div class="skills">
    <div v-for="(skill, index) in skills" :key="index">
      <svg class="eachSkill" preserveAspectRatio="xMidYMid" xmlns="http://www.w3.org/2000/svg">
        <use v-bind="{'xlink:href': '#' + skill.svg}" />
      </svg>
      <p class="colorText">{{skill.text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { svg: "html5", text: "HTML5" },
        { svg: "css", text: "CSS3" },
        { svg: "js", text: "JavaScript" },
        { svg: "bootstrap", text: "Bootstrap 4" },
        { svg: "sass", text: "Sass" },
        { svg: "git", text: "Git" },
        { svg: "github", text: "GitHub" },
        { svg: "gulp", text: "Gulp" },
        { svg: "vuejs", text: "Vue.js" },
        { svg: "illustrator", text: "Illustrator" },
        { svg: "photoshop", text: "Photoshop" }
      ]
    };
  }
};
</script>
