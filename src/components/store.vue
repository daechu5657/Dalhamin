<template>
  <div class="store-wrap">
    <div class="store-flex">
      <div class="store-right" id="store-right">
        <img src="../assets/그림만.svg" alt="" />
        <p>경기 고양시 덕양구 삼송로 222 현대헤리엇상가 101동 148호</p>
        <p>OPEN 11:00 ~ 19:00(수~금)</p>
        <p>010-9380-3860</p>
      </div>
      <Kakaomap />
    </div>
  </div>
</template>

<script>
import Kakaomap from './kakaomap.vue';
export default {
  components: {
    Kakaomap: Kakaomap,
  },
  mounted() {
    setTimeout(() => {
      document.getElementById('map-wrap').classList.add('FadeInRtoLstore');
      document.getElementById('store-right').classList.add('FadeInLtoRstore');
    }, 500);
  },
  unmounted() {
    setTimeout(() => {
      document.getElementById('map-wrap').classList.remove('FadeInRtoLstore');
      document
        .getElementById('store-right')
        .classList.remove('FadeInLtoRstore');
    }, 500);
  },
};
</script>

<style>
.store-wrap {
  position: absolute;
  width: 100vw;
  height: 90vh;
  background-color: #f7f7f7;
}
.store-wrap * {
  font-family: 'NanumSquare', san-serif;
}
.store-flex {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
  top: 25vh;
  padding: 0 25vw;
}
.store-right {
  position: relative;
  width: 512px;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  opacity: 0;
}
.store-right > img {
  width: 50%;
}
.store-right > p:nth-child(2) {
  font-size: 18px;
  font-weight: 900;
}
.store-right > p:nth-child(3) {
  font-size: 18px;
  font-weight: 600;
}
.store-right > p:nth-child(4) {
  font-size: 18px;
  font-weight: 500;
}

.FadeInLtoRstore {
  animation: FadeInLtoRstore 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
}
@keyframes FadeInLtoRstore {
  0% {
    opacity: 0;
    transform: translateX(-5vw);
  }
  50% {
    opacity: 0;
    transform: translatex(-5vw);
  }
  100% {
    opacity: 1;
    transform: translatex(0vw);
  }
}

.FadeInRtoLstore {
  animation: FadeInRtoLstore 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
}
@keyframes FadeInRtoLstore {
  0% {
    opacity: 0;
    transform: translateX(5vw);
  }
  50% {
    opacity: 0;
    transform: translatex(5vw);
  }
  100% {
    opacity: 1;
    transform: translatex(0vw);
  }
}

@media (max-width: 2000px) {
  .store-flex {
    padding: 0 10vw;
  }
}
@media (max-width: 1300px) {
  .store-flex {
    padding: 0 0vw;
  }
}
</style>
