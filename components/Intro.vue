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
  padding: vw(40);
  background: linear-gradient(180deg, #f4fab5 0%, #75cdff 100%);

  h1 {
    margin-top: vw(340);
    font-size: vw(64);
    line-height: vw(70);
    font-weight: normal;
    letter-spacing: 0.02em;
    max-width: 75%;
  }

  hr {
    border-top: vw(2) solid #141212;
    border-bottom: none;
    margin-top: vw(50);
  }
}
</style>
