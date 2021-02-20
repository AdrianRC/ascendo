<template>
  <nav class="navbar">
    <nuxt-link to="#intro" class="logo">ASCENDO</nuxt-link>
    <ul>
      <li><nuxt-link to="#integra">Integra</nuxt-link></li>
      <li><nuxt-link to="#fs">FS</nuxt-link></li>
      <li><nuxt-link to="#sba">SBA</nuxt-link></li>
      <li><nuxt-link to="#contact">Contacto</nuxt-link></li>
    </ul>
  </nav>
</template>

<style lang="scss">
nav.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    font-weight: 500;
    font-size: vw(24);
    line-height: vw(26);
    letter-spacing: 0.02em;
    text-transform: uppercase;
    text-decoration: none;
    color: #141212;
  }

  ul {
    display: flex;

    li {
      list-style: none;
    }

    li a {
      font-size: vw(22);
      line-height: vw(26);
      letter-spacing: 0.02em;
      text-decoration: none;
      color: #141212;
    }

    li + li {
      margin-left: vw(42);
    }
  }
}
</style>
