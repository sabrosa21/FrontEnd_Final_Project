<template>
  <Layout>
    <h1 class="mainTitle">Contact</h1>
    <div class="contactForm">
      <p class="commonText">
        I am looking for an opportunity to show my skills in the real world of coding!
        If you think, maybe, I'm the right guy and want to know more info about me,
        please feel free to fill the form and get in touch!
      </p>
      <!--***** Contact Form component *****-->
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
//****** Styling the contact form
.contactForm {
  align-items: center;
  display: flex;

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
        background-color: rgba($color: #c5c6c7, $alpha: 0);
        border-radius: 4px;
        border: 1px solid #66fcf1;
        box-sizing: border-box;
        color: white;
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
        padding-left: 10px;
        padding-top: 10px;
        resize: vertical;
      }

      button {
        background-color: #66fcf1;
        border-radius: 4px;
        color: black;
        float: right;
        font-family: "League Spartan";
        font-weight: bold;
        padding: 12px 50px;
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