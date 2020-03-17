<template>
  <Layout>
    <h1 class="mainTitle">Contact</h1>
    <div class="contactForm">
      <p>If you want to know more info about me, please feel free to fill the form bellow and get in touch!</p>
      <!-- componente do form -->
      <contactForm />
    </div>
  </Layout>
</template>

<script>
import contactForm from "@/components/contactForm";
export default {
  metaInfo: {
    title: "Contact"
  },
  components: {
    contactForm
  }
};
</script>

<style lang="scss" scoped>
.contactForm {
  display: flex;

  p {
    color: white;
  }
}
</style>