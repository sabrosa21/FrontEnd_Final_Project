<template>
  <div class="commonText">
    <form
      name="contact"
      method="post"
      v-on:submit.prevent="handleSubmit"
      action="/success/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out:
          <input name="bot-field" />
        </label>
      </p>
      <div class="sender-info">
        <div>
          <input type="text" name="name" v-model="formData.name" placeholder="Name" />
        </div>
        <div>
          <input type="email" name="email" v-model="formData.email" placeholder="Email" />
        </div>
        <div>
          <input type="text" name="subject" v-model="formData.subject" placeholder="Subject" />
        </div>
      </div>

      <div class="message-wrapper">
        <textarea name="message" v-model="formData.message" placeholder="Message..."></textarea>
      </div>

      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {}
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData
        })
      })
        .then(() => this.$router.push("/success"))
        .catch(error => alert(error));
    }
  }
};
</script>
