<template>
  <section class="companies">
    <h2>Nuestras compañías</h2>
    <div class="company image-left" id="integra">
      <img
        src="~/assets/integra/panoramica.jpg"
        alt="Imagen de condominios de Integra"
      />
      <div class="description">
        <h3>Integra, Servicios Generales</h3>
        <p>Gestión y administración de condominios turísticos inmobiliarios.</p>
        <div class="links">
          <Link text="Website" href="website" class="link-wrapper" />
          <Link text="Instagram" href="Instagram" class="link-wrapper" />
        </div>
      </div>
    </div>
    <div class="company image-right" id="fs">
      <img
        src="~/assets/fast/cover.jpg"
        alt="Imagen de condominios de Integra"
      />
      <div class="description">
        <h3>FAST SIGNS<br />Santo Domingo</h3>
        <p>
          Franquicia #1 en USA de letreros, rótulos y señalética.<br />¡Ahora en
          RD 🇩🇴!
        </p>
        <div class="links">
          <Link text="Website" href="website" class="link-wrapper" />
          <Link text="Instagram" href="Instagram" class="link-wrapper" />
        </div>
      </div>
    </div>
    <div class="company image-left" id="sba">
      <img
        src="~/assets/arquitectos/panoramica.jpg"
        alt="Imagen de condominios de Integra"
      />
      <div class="description">
        <h3>Arquitectura y construcción</h3>
        <p>
          Servicios de arquitectura residencial, comercial, turística,
          institucional, corporativa, industrial y turística. <br /><br />
          Especialidad en urbanismos y cabañas de montaña.
          <br /><br />
          Construcciones y remodelaciones en general.
          <br /><br />
          <span class="small"
            >Pueden solicitar catálogo completo de obras.</span
          >
        </p>
        <div class="dual-links">
          <div>
            <h4>Construcción</h4>
            <h5>Franco Borrel</h5>
            <div class="links">
              <Link text="Website" href="website" class="link-wrapper" />
              <Link text="Instagram" href="Instagram" class="link-wrapper" />
            </div>
          </div>
          <div>
            <h4>Arquitectura</h4>
            <h5>SB Arquitectos</h5>
            <div class="links">
              <Link text="Website" href="website" class="link-wrapper" />
              <Link text="Instagram" href="Instagram" class="link-wrapper" />
            </div>
            <h5>SB Arquitectos</h5>
            <div class="links">
              <Link text="Website" href="website" class="link-wrapper" />
              <Link text="Instagram" href="Instagram" class="link-wrapper" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="company"></div>
    <div class="company"></div>
  </section>
</template>

<style lang="postcss">
.companies {
  margin-top: 126px;
  padding: 40px;

  h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 26px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #141212;
  }

  .company {
    display: grid;
    grid-template-columns: 1fr 1fr;

    img {
      width: 100%;
    }

    .description {
      max-width: 600px;

      h3 {
        font-weight: 500;
        font-size: 64px;
        line-height: 70px;
        letter-spacing: 0.02em;
      }

      p {
        margin-top: 60px;
        font-size: 24px;
        line-height: 27px;
        letter-spacing: 0.02em;

        .small {
          font-size: 16px;
          line-height: 18px;
        }
      }

      .links {
        margin-top: 40px;

        .link-wrapper + .link-wrapper {
          margin-top: 15px;
        }
      }

      .dual-links {
        margin-top: 60px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        h4,
        h5 {
          font-weight: 500;
          font-size: 24px;
          line-height: 27px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        .links {
          margin-top: 25px;
        }

        h5 {
          margin-top: 30px;
        }
      }
    }

    &.image-left {
      img {
        order: 1;
      }

      .description {
        order: 2;
        padding-left: 135px;
      }
    }

    &.image-right {
      img {
        order: 2;
      }

      .description {
        order: 1;
        padding-right: 135px;
      }
    }
  }

  .company:first-of-type {
    margin-top: 50px;
  }

  .company + .company {
    margin-top: 150px;
  }
}
</style>
