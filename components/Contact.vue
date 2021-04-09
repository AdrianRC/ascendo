<template>
  <section class="contact" id="contact">
    <div class="slider">
      <div class="slide content" :class="{ 'animate-out': isDone }">
        <h2>{{ title }}</h2>
        <div class="form-wrapper">
          <form id="form1" @submit.prevent="submit">
            <div class="input-group">
              <label for="name">Nombre Completo</label>
              <input
                type="text"
                id="name"
                name="name"
                v-model="name"
                required
              />
            </div>
            <div class="input-group">
              <label for="email">Correo</label>
              <input
                type="email"
                id="email"
                name="email"
                v-model="email"
                required
              />
            </div>
            <div class="input-group">
              <label for="phone">Teléfono</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                v-model="phone"
                required
              />
            </div>
            <div class="input-group">
              <label for="subject">Asunto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                v-model="subject"
                required
              />
            </div>
            <div class="input-group">
              <label for="text">Texto</label>
              <textarea
                type="text"
                id="text"
                rows="10"
                name="text"
                v-model="text"
                required
              />
            </div>
          </form>
          <button
            type="submit"
            form="form1"
            value="Submit"
            :disabled="isDisabled"
          >
            <svg
              viewBox="0 0 36 36"
              fill="none"
              aria-label="Submit"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 17.917L34.8333 17.917"
                stroke="#141212"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.9167 1.00016L34.8334 17.9168L17.9167 34.8335"
                stroke="#141212"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="slide message" :class="{ 'animate-in': isDone }">
        <div>
          <template v-if="!isError">
            <h3>Gracias por su mensaje.</h3>
            <h4>Su solicitud fue enviada correctamente.</h4>
          </template>
          <template v-else>
            <h3>Se ha producido un error.</h3>
            <h4>Lamentamos los inconvenientes.</h4>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      subject: '',
      text: '',
      isDisabled: false,
      isDone: false,
      isError: false,
    }
  },
  methods: {
    async submit(e) {
      this.isDisabled = true
      try {
        const response = await fetch('/api/email', {
          method: 'POST',
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            phone: this.phone,
            subject: this.subject,
            text: this.text,
          }),
        })
        console.log(await response.text())
      } catch (e) {
        console.log(e)
        this.isError = true
      }
      this.isDone = true
    },
  },
}
</script>

<style lang="scss">
.contact {
  background: #75cdff;

  .slider {
    position: relative;
  }

  .slide {
    &.content {
      padding: vwS(30) vwS(20) vwS(20);
      transition: transform 0.5s ease;

      &.animate-out {
        transform: translate3d(-100%, 0, 0);
      }
    }

    &.message {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 100;
      display: grid;
      place-items: center;
      text-align: center;
      transform: translate3d(100%, 0, 0);
      transition: transform 0.5s ease;

      &.animate-in {
        transform: translate3d(0, 0, 0);
      }

      h3 {
        padding: 0 vwS(10);
        font-size: vwS(40);
        font-weight: 500;
      }

      h4 {
        padding: vwS(10) vwS(10) 0;
        font-size: vwS(20);
        font-weight: 400;
      }
    }
  }

  h2 {
    font-size: vwS(26);
    line-height: vwS(30);
    font-weight: 500;
    letter-spacing: 0.02em;
  }

  .form-wrapper {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    form {
      width: 100%;
      margin-top: vwS(30);
      .input-group {
        width: 100%;
        label,
        input,
        textarea {
          font-family: Graphik;
          font-size: vwS(18);
          line-height: vs(20);
          letter-spacing: 0.02em;
          color: #141212;
        }

        input,
        textarea {
          width: 100%;
          margin-top: vwS(15);
          background: #75cdff;
          outline: none;
        }

        input {
          border: none;
          border-radius: 0;
          border-bottom: 1px solid #000000;
        }

        textarea {
          border: 1px solid #000000;
          resize: none;
        }

        label {
          text-transform: uppercase;
        }
      }

      .input-group + .input-group {
        margin-top: vwS(28);
      }
    }

    button {
      background: none;
      border: none;
      padding: vwS(11) 0 0 vwS(14);
      margin-left: vwS(16);

      svg {
        width: vwS(30);
        height: vwS(30);
      }
    }
  }

  @include above(small) {
    .slide {
      &.content {
        display: flex;
        justify-content: space-between;
        padding: vw(40);
      }

      &.message {
        h3 {
          font-size: vw(70);
          padding: 0 vw(20);
        }
        h4 {
          font-size: vw(30);
          padding: vw(20) vw(20) 0;
        }
      }
    }

    h2 {
      max-width: 50%;
      font-size: vw(64);
      line-height: vw(70);
    }

    .form-wrapper {
      form {
        width: vw(440);
        margin-top: 0;
        .input-group {
          label,
          input,
          textarea {
            font-size: vw(18);
            line-height: vs(20);
          }

          input,
          textarea {
            margin-top: vw(15);
          }
        }

        .input-group + .input-group {
          margin-top: vw(28);
        }
      }

      button {
        padding: vw(11) 0 0 vw(14);
        margin-left: vw(66);

        svg {
          width: vw(36);
          height: vw(36);
        }
      }
    }
  }
}
</style>
