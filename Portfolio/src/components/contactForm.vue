<template>
  <div class="commonText">
    <!-- ****** Form for submit the message ****** -->
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
            <div name="header" class="modal-message">Success submit!</div>
            <button class="modal-close-button" @click="showModal = false">
              <div class="rigth-line">
                <div class="left-line"></div>
              </div>
            </button>
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

    //******** Make the post through the API and show modal
    handleSubmit(e) {
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
//******** Styles for Modal
.modal-mask {
  background-color: rgba(0, 0, 0, 0.7);
  display: table;
  font-family: "League Spartan";
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  transition: opacity 0.3s ease;
  width: 100%;

  .modal-wrapper {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
  }

  .modal-container {
    align-items: center;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding: 3rem;
    transition: all 0.3s ease;
    width: 175px;

    .modal-message {
      color: rgb(19, 185, 19);
      font-size: 1.4rem;
      padding: 25px 0;
      width: 250px;
    }

    .modal-close-button {
      background: transparent;
      border: none;
      margin-top: 10px;
      padding: 5px 15px;

      .rigth-line {
        background-color: black;
        height: 25px;
        transform: rotate(45deg);
        width: 2px;
      }

      .left-line {
        background-color: black;
        height: 25px;
        transform: rotate(90deg);
        width: 2px;
      }

      &:focus {
        outline: none;
      }

      &:hover {
        animation: rotation 2s linear 0s infinite;
        cursor: pointer;
      }

      @keyframes rotation {
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }
}

//******** Animation for modal enter and leave
.modal-enter {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-to .modal-container {
  transform: scale(1.5);
}
</style>