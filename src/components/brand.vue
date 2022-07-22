<template>
  <div class="brand-wrap">
    <div class="brand-p">
      <p class="brand-1" id="brand-1">
        달콤함을 선사하는 달하민 케이크&디저트 공방
      </p>
      <p class="brand-2" id="brand-2">Your Special Sweet Day💖</p>
      <p class="brand-3" id="brand-3">
        #케이크 #구움과자 #선물 #삼송 #휘낭시에 맛집
      </p>
    </div>

    <div class="brand-main-pic" id="brand-main-pic"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      document.getElementById('brand-main-pic').classList.add('FadeInDtoU');
    }, 500);
    setTimeout(() => {
      document.getElementById('brand-main-pic').classList.add('brandpic');
    }, 1500);
    setTimeout(() => {
      document.getElementById('brand-1').classList.add('brand-n');
    }, 2000);
    setTimeout(() => {
      document.getElementById('brand-2').classList.add('brand-n');
    }, 2000);
    setTimeout(() => {
      document.getElementById('brand-3').classList.add('brand-n');
    }, 2000);
  },
  unmounted() {
    setTimeout(() => {
      document.getElementById('brand-main-pic').classList.remove('FadeInDtoU');
      document.getElementById('brand-main-pic').classList.remove('brandpic');
      document.getElementById('brand-1').classList.remove('brand-n');
      document.getElementById('brand-2').classList.remove('brand-n');
      document.getElementById('brand-3').classList.remove('brand-n');
    }, 500);
  },
};
</script>

<style>
.brand-wrap {
  position: absolute;
  width: 100vw;
  height: 90vh;
  background-color: #f7f7f7;
}
.brand-main-pic {
  background-image: url('../assets/풀로고.png');
  width: 20vw;
  position: absolute;
  height: 50vh;
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: center;
  left: 40vw;
  top: 15vh;
  opacity: 0;
}
.brand-1 {
  position: absolute;
  width: 40vw;
  height: 10vh;
  font-size: 2vw;
  text-align: left;
  left: 35vw;
  line-height: 10vh;
  top: 27vh;
  font-weight: 600;
  font-family: 'NanumSquare', san-serif;
  opacity: 0;
  text-align: center;
}
.brand-2 {
  position: absolute;
  width: 40vw;
  height: 10vh;
  font-size: 1vw;
  text-align: left;
  left: 35vw;
  line-height: 10vh;
  top: 35vh;
  font-family: 'NanumSquare', san-serif;
  opacity: 0;
  text-align: center;
  font-weight: 600;
}
.brand-3 {
  position: absolute;
  width: 40vw;
  height: 10vh;
  font-size: 1vw;
  text-align: left;
  left: 35vw;
  line-height: 10vh;
  top: 43vh;
  font-family: 'NanumSquare', san-serif;
  opacity: 0;
  text-align: center;
}

.brandpic {
  animation: brandpic 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
}
@keyframes brandpic {
  0% {
    opacity: 1;
    transform: translatex(0);
  }
  50% {
    opacity: 1;
    transform: translatex(0);
  }
  100% {
    opacity: 1;
    transform: translatex(-25vw);
  }
}
.brand-n {
  animation: brand-n 1s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
}
@keyframes brand-n {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@media (max-width: 1600px) {
  .brand-1 {
    font-size: 2.5vw;
    width: 50vw;
    left: 40vw;
  }
  .brand-2,
  .brand-3 {
    width: 50vw;
    font-size: 1.625vw;
    left: 40vw;
  }
  .brand-main-pic {
    width: 32vw;
    left: 32vw;
  }
}
</style>
