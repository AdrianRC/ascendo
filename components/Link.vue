<template>
  <div>
    <a target="_blank" rel="noreferrer noopener" :href="href" class="link"
      ><span>{{ text }}</span
      ><svg
        class="link-svg"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.5 3C17.5 2.72386 17.2761 2.5 17 2.5L12.5 2.5C12.2239 2.5 12 2.72386 12 3C12 3.27614 12.2239 3.5 12.5 3.5L16.5 3.5L16.5 7.5C16.5 7.77614 16.7239 8 17 8C17.2761 8 17.5 7.77614 17.5 7.5L17.5 3ZM3.35355 17.3536L17.3536 3.35355L16.6464 2.64645L2.64645 16.6464L3.35355 17.3536Z"
          fill="#141212"
        />
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    href: {
      required: true,
      type: String,
    },
    text: {
      required: true,
      type: String,
    },
  },
}
</script>

<style lang="scss">
.link {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-family: Graphik;
  font-style: normal;
  font-weight: normal;
  font-size: vwS(16);
  line-height: vwS(18);
  letter-spacing: 0.02em;

  color: #141212;
  border-bottom: 1px solid #141212;

  svg {
    margin-left: vwS(6);
    width: vwS(20);
    height: vwS(20);
  }

  @include above(small) {
    font-size: vw(24);
    line-height: vw(27);
    border-bottom: 1px solid #141212;

    svg {
      margin-left: vw(6);
      width: vw(20);
      height: vw(20);
    }
  }
}
</style>
