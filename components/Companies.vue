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
          institucional, corporativa, industrial y turística.
          <br /><br />
          Especialidad en urbanismos y cabañas de montaña.
          <br /><br />
          Construcciones y remodelaciones en general.
          <br /><br />
          <span class="small"
            >Pueden solicitar catálogo completo de obras.</span
          >
        </p>
        <div class="dual-links">
          <div class="dual-link">
            <h4>Construcción</h4>
            <h5>Franco Borrel</h5>
            <div class="links">
              <Link text="Website" href="website" class="link-wrapper" />
              <Link text="Instagram" href="Instagram" class="link-wrapper" />
            </div>
          </div>
          <div class="dual-link">
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
  </section>
</template>

<style lang="scss">
.companies {
  margin-top: vwS(15);
  padding: vwS(20) vwS(20) vwS(40);

  h2 {
    font-weight: 500;
    font-size: vwS(18);
    line-height: vwS(20);
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #141212;
  }

  .company {
    display: grid;
    grid-template-columns: 100%;

    img {
      width: 100%;
      object-fit: cover;
    }

    .description {
      width: 100%;
      margin-top: vwS(20);

      h3 {
        font-weight: 500;
        font-size: vwS(28);
        line-height: vwS(32);
        letter-spacing: 0.02em;
      }

      p {
        margin-top: vwS(15);
        font-size: vwS(18);
        line-height: vwS(22);
        letter-spacing: 0.02em;

        .small {
          font-size: vwS(12);
          line-height: vwS(14);
        }
      }

      .links {
        margin-top: vwS(20);

        .link-wrapper + .link-wrapper {
          margin-top: vwS(12);
        }
      }

      .dual-links {
        margin-top: vwS(30);

        h4,
        h5 {
          font-weight: 500;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        h4 {
          font-size: vwS(20);
          line-height: vwS(24);
        }

        .links {
          margin-top: vwS(15);
        }

        h5 {
          margin-top: vwS(20);
          font-size: vwS(16);
          line-height: vwS(18);
        }

        .dual-link + .dual-link {
          margin-top: vwS(30);
        }
      }
    }

    &.image-left {
      img {
        order: 1;
      }

      .description {
        order: 2;
      }
    }

    &.image-right {
      img {
        order: 1;
      }

      .description {
        order: 1;
      }
    }
  }

  .company:first-of-type {
    margin-top: vwS(30);
  }

  .company + .company {
    margin-top: vwS(50);
  }

  @include above(small) {
    margin-top: vw(126);
    padding: vw(40) vw(40) vw(150);

    h2 {
      font-size: vw(24);
      line-height: vw(26);
    }

    .company {
      grid-template-columns: 1fr 1fr;

      img {
        height: 100%;
      }

      .description {
        max-width: vw(600);
        margin-top: 0;

        h3 {
          font-size: vw(64);
          line-height: vw(70);
        }

        p {
          margin-top: vw(60);
          font-size: vw(24);
          line-height: vw(27);

          .small {
            font-size: vw(16);
            line-height: vw(18);
          }
        }

        .links {
          margin-top: vw(40);

          .link-wrapper + .link-wrapper {
            margin-top: vw(15);
          }
        }

        .dual-links {
          margin-top: vw(60);
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-direction: row;

          h4 {
            font-size: vw(24);
            line-height: vw(27);
          }

          .links {
            margin-top: vw(25);
          }

          h5 {
            margin-top: vw(30);
            font-size: vw(22);
            line-height: vw(24);
          }

          .dual-link + .dual-link {
            margin-top: 0;
          }
        }
      }

      &.image-left {
        img {
          order: 1;
        }

        .description {
          order: 2;
          padding-left: vw(135);
        }
      }

      &.image-right {
        img {
          order: 2;
        }

        .description {
          order: 1;
          padding-right: vw(135);
        }
      }
    }

    .company:first-of-type {
      margin-top: vw(50);
    }

    .company + .company {
      margin-top: vw(150);
    }
  }
}
</style>
