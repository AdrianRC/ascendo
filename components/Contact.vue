<template>
  <section class="contact" id="contact">
    <h2>¿Interesado en alguna de nuestras compañias?</h2>
    <div class="form-wrapper">
      <form>
        <div class="input-group">
          <label for="name">Nombre Completo</label>
          <input type="text" id="name" name="name" />
        </div>
        <div class="input-group">
          <label for="email">Correo</label>
          <input type="email" id="email" name="email" />
        </div>
        <div class="input-group">
          <label for="phone">Telefono</label>
          <input type="text" id="phone" name="phone" />
        </div>
        <div class="input-group">
          <label for="subject">Asunto</label>
          <input type="text" id="subject" name="subject" />
        </div>
        <div class="input-group">
          <label for="text">Texto</label>
          <textarea type="text" id="text" rows="10" name="text" />
        </div>
      </form>
      <button>
        <svg
          width="36"
          height="36"
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
  </section>
</template>

<style lang="postcss">
.contact {
  display: flex;
  justify-content: space-between;
  padding: 40px;
  background: #75cdff;

  h2 {
    max-width: 50%;
    font-size: 64px;
    font-weight: 500;
    line-height: 70px;
    letter-spacing: 0.02em;
  }

  .form-wrapper {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    form {
      width: 440px;
      .input-group {
        width: 100%;

        input,
        textarea {
          width: 100%;
          background: #75cdff;
          border: none;
          border-bottom: 1px solid #000000;
          margin-top: 15px;
          outline: none;
        }

        label,
        input,
        textarea {
          font-family: Graphik;
          font-size: 18px;
          line-height: 20px;
          letter-spacing: 0.02em;
          color: #141212;
        }

        textarea {
          border: 1px solid #000000;
          resize: none;
          width: 100%;
        }

        label {
          text-transform: uppercase;
        }
      }

      .input-group + .input-group {
        margin-top: 28px;
      }
    }

    button {
      background: none;
      border: none;
      padding: 11px 0 0 14px;
      margin-left: 66px;
    }
  }
}
</style>
