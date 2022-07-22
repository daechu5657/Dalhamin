<template>
  <div class="load-wrap" @click="$store.commit('load_off')">
    <p class="load-msg" id="load-msg">#Dalha_min</p>
  </div>
</template>

<script>
export default {
  mounted() {
    document.getElementById('load-msg').classList.add('FadeInDtoU');
  },
};
</script>

<style>
.load-wrap {
  width: 100vw;
  height: 100vh;
  background-color: #f2f2f2;
  font-family: 'Lexend Deca', sans-serif;
  z-index: 1000;
  position: absolute;
  overflow: hidden;
}
.load-msg {
  width: 20vw;
  height: 10vh;
  font-size: 3vw;
  position: absolute;
  text-align: center;
  line-height: 10vh;
  left: 40vw;
  top: 45vh;
}
.FadeInDtoU {
  animation: FadeInDtoU 1s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
}
@keyframes FadeInDtoU {
  0% {
    opacity: 0;
    transform: translatey(2vh);
  }
  50% {
    opacity: 0;
    transform: translatey(2vh);
  }
  100% {
    opacity: 1;
    transform: translatey(0vh);
  }
}
.FadeInUtoD {
  animation: FadeInUtoD 1s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
}
@keyframes FadeInUtoD {
  0% {
    opacity: 0;
    transform: translatey(-2vh);
  }
  50% {
    opacity: 0;
    transform: translatey(-2vh);
  }
  100% {
    opacity: 1;
    transform: translatey(0vh);
  }
}
</style>
