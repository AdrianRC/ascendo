<template>
  <section class="intro" id="intro">
    <Navbar />
    <h1>
      Empresa dedicada a ofrecer servicios de gestión de condominios turísticos
      y urbanos.
      <!-- arquitectura y construcción, señalización en general -->
    </h1>
    <hr />
    <Footnote />
  </section>
</template>
<style lang="scss">
.intro {
  padding: vwS(20);
  background: linear-gradient(180deg, #f4fab5 0%, #75cdff 100%);

  h1 {
    margin-top: vwS(50);
    font-size: vwS(30);
    line-height: vwS(35);
    font-weight: normal;
    letter-spacing: 0.02em;
    max-width: 90%;
  }

  hr {
    border-top: vwS(2) solid #141212;
    border-bottom: none;
    margin-top: vwS(30);
  }

  @include above(small) {
    padding: vw(40);
    h1 {
      margin-top: vw(340);
      font-size: vw(64);
      line-height: vw(70);
      max-width: 75%;
    }

    hr {
      border-top: vw(2) solid #141212;
      margin-top: vw(50);
    }
  }
}
</style>
