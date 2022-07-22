<template>
  <div class="home-wrap">
    <div class="home-main-bg"></div>
    <p class="home-main-phrases" id="home-main-phrases">
      Welcome to #Dalha_min
    </p>
  </div>
</template>

<script>
export default {
  mounted() {
    setInterval(() => {
      if (this.$store.state.load_modal == 1) {
        document
          .getElementById('home-main-phrases')
          .classList.add('FadeInDtoU');
      }
    }, 1000);
  },
};
</script>

<style>
.home-wrap {
  position: absolute;
  width: 100vw;
  height: 90vh;
  background-color: #f7f7f7;
}
.home-main-bg {
  position: absolute;
  width: 100vw;
  height: 50vh;
  top: 15vh;
  background-image: url('../assets/main.jpg');
  background-size: cover;
  background-position-y: 70%;
  background-blend-mode: darken;
  background-color: #0005;
}
.home-main-phrases {
  position: absolute;
  width: 100vw;
  height: 50vh;
  font-size: 3vw;
  text-align: center;
  top: 15vh;
  line-height: 50vh;
  color: #d2d2d2;
  opacity: 0;
}

@media (max-width: 1600px) {
  .home-main-phrases {
    font-size: 4.8125vw;
  }
}
@media (max-width: 1200px) {
  .home-main-phrases {
    font-size: 6.4167vw;
  }
}
@media (max-width: 800px) {
  .home-main-phrases {
    font-size: 6.4167vw;
  }
}
</style>
