<template>
  <div class="commonText">
    <form
      name="contact"
      method="post"
      v-on:submit.prevent="handleSubmit"
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
          <input type="text" name="name" v-model="formData.name" placeholder="Name" required />
        </div>
        <div>
          <input type="email" name="email" v-model="formData.email" placeholder="Email" required />
        </div>
        <div>
          <input
            type="text"
            name="subject"
            v-model="formData.subject"
            placeholder="Subject"
            required
          />
        </div>
      </div>

      <div class="message-wrapper">
        <textarea name="message" v-model="formData.message" placeholder="Message..." required />
      </div>

      <button type="submit">Send</button>
    </form>

    <!-- ****** Modal on success -->
    <transition name="modal">
      <div class="modal-mask" v-if="showModal" @close="showModal = false">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <slot name="header">Success submit!</slot>
            </div>
            <div class="modal-footer">
              <!-- <button class="modal-default-button" @click="showModal = false">OK</button> -->
              <button class="modal-default-button" @click="showModal = false">OK</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {},
      showModal: false
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
      let showModal = false;
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData
        })
      })
        .then(() => (this.showModal = true))
        .catch(error => alert(error));
    }
  }
};
</script>

<style lang="scss">
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0 auto;
  padding: 4rem;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  transform: scale(1.1);
}
</style>