<template>
  <div class="book-wrap">
    <div class="book-kakao">
      <img src="../assets/kakao.png" id="kakakoimg" />
      <a id="kakao" href="https://pf.kakao.com/_xonZkb">Go Make a Booking</a>
    </div>
    <div class="book-insta">
      <img src="../assets/insta.png" id="instaimg" />
      <a id="insta" href="https://www.instagram.com/dalha_min/">#Dalha_min</a>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      document.getElementById('kakakoimg').classList.add('FadeInDtoU');
      document.getElementById('instaimg').classList.add('FadeInDtoU');
    }, 500);
    setTimeout(() => {
      document.getElementById('kakakoimg').classList.add('bookpic');
      document.getElementById('instaimg').classList.add('bookpic');
    }, 1500);
    setTimeout(() => {
      document.getElementById('kakao').classList.add('brand-n');
      document.getElementById('insta').classList.add('brand-n');
    }, 2000);
  },
  unmounted() {
    setTimeout(() => {
      document.getElementById('kakakoimg').classList.remove('FadeInDtoU');
      document.getElementById('instaimg').classList.remove('FadeInDtoU');
      document.getElementById('kakakoimg').classList.remove('bookpic');
      document.getElementById('instaimg').classList.remove('bookpic');
      document.getElementById('kakao').classList.remove('brand-n');
      document.getElementById('insta').classList.remove('brand-n');
    }, 500);
  },
};
</script>

<style>
.book-wrap {
  position: absolute;
  width: 100vw;
  height: 90vh;
  background-color: #f7f7f7;
}
.book-kakao {
  position: absolute;
  width: 35vw;
  height: 15vh;
  left: 37.5vw;
  top: 25vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
}
.book-kakao > img {
  height: 100%;
  border-radius: 30%;
  opacity: 0;
  left: 10vw;
  position: relative;
}
.book-kakao > a {
  width: 20vw;
  font-size: 24px;
  text-decoration: none;
  color: #212121;
  opacity: 0;
}
.book-insta {
  position: absolute;
  width: 35vw;
  height: 15vh;
  left: 37.5vw;
  bottom: 25vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
}
.book-insta > img {
  height: 100%;
  border-radius: 30%;
  opacity: 0;
  left: 10vw;
  position: relative;
}
.book-insta > a {
  font-size: 24px;
  width: 20vw;
  text-decoration: none;
  color: #212121;
  opacity: 0;
}
.bookpic {
  animation: bookpic 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
}
@keyframes bookpic {
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
    transform: translatex(-10vw);
  }
}
@media (max-width: 1600px) {
  .book-kakao {
    width: 50vw;
    left: 25vw;
  }
  .book-insta {
    width: 50vw;
    left: 25vw;
  }
}
@media (max-width: 1200px) {
  .book-kakao {
    width: 70vw;
    left: 15vw;
  }
  .book-insta {
    width: 70vw;
    left: 15vw;
  }
  .book-kakao > a {
    width: 30vw;
  }
  .book-insta > a {
    width: 30vw;
  }
}
</style>
