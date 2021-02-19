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

<style lang="postcss">
nav.navbar {
  display: flex;
  justify-content: space-between;

  .logo {
    font-weight: 500;
    font-size: 24px;
    line-height: 26px;
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
      font-size: 22px;
      line-height: 24px;
      letter-spacing: 0.02em;
      text-decoration: none;
      color: #141212;
    }

    li + li {
      margin-left: 42px;
    }
  }
}
</style>
