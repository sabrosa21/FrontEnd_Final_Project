<template>
  <Layout>
    <h1 class="mainTitle">Contact</h1>
    <div class="contactForm">
      <p class="commonText">
        I am looking for an opportunity to show my skills in the real world of coding!
        If you think, maybe, I'm the right guy and want to know more info about me,
        please feel free to fill the form and get in touch!
      </p>
      <!-- componente do form -->
      <contactForm class="cform" />
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

<style lang="scss">
.contactForm {
  display: flex;
  align-items: center;
  p {
    width: 100%;
    color: white;
  }

  .cform {
    width: 100%;
    form {
      ::placeholder {
        color: #c5c6c7;
        font-size: 0.8rem;
        opacity: 0.5;
      }

      input,
      textarea {
        color: white;
        border-radius: 4px;
        border: 1px solid #66fcf1;
        background-color: rgba($color: #c5c6c7, $alpha: 0);
        box-sizing: border-box;
        width: 100%;
      }

      input,
      textarea,
      button {
        margin-top: 0.5rem;
      }

      input {
        padding: 10px 0 10px 10px;
      }

      textarea {
        height: 5rem;
        resize: vertical;
        padding: 0;
        padding-left: 10px;
        padding-top: 10px;
      }

      button {
        border-radius: 4px;
        padding: 12px 50px;
        font-weight: bold;
        font-family: "League Spartan";
        color: black;
        background-color: #66fcf1;
        float: right;
        &:hover {
          box-shadow: 0 9px 12px 0 rgba(0, 0, 0, 0.24),
            0 13px 30px 0 rgba(0, 0, 0, 0.19);
          cursor: pointer;
        }
      }
    }
  }
}
</style>