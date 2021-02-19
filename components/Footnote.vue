<template>
  <div class="footnote">
    <div class="text">
      <p>Basada en la República Dominicana</p>
      <time :datetime="time">{{ time }}</time>
    </div>
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.9166 1V34.8333"
        stroke="#141212"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M34.8333 17.9167L17.9167 34.8333L1 17.9167"
        stroke="#141212"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      intervalId: null,
      time: '',
    }
  },
  created() {
    this.getTime()
    this.intervalId = setInterval(this.getTime, 5000)
  },
  methods: {
    getTime() {
      this.time = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })
    },
  },
  beforeDestroy() {
    clearInterval(this.intervalId)
  },
}
</script>

<style lang="postcss">
.footnote {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  font-size: 24px;
  line-height: 26px;
  letter-spacing: 0.02em;
  color: #141212;

  time {
    display: block;
    padding-top: 8px;
  }
}
</style>
