<template>
  <div class="header-wrap" id="header-wrap">
    <div class="menu-home" @click="$store.commit('header_click', 0)">
      <img class="menu-home-img" src="../assets/그림만.svg" alt="" />
    </div>
    <div class="header-menu">
      <p
        class="header-underbar"
        :class="{ clicked: $store.state.header_clicked[1] == 1 }"
        @click="$store.commit('header_click', 1)"
      >
        Brand
      </p>
      <p
        class="header-underbar"
        :class="{ clicked: $store.state.header_clicked[2] == 1 }"
        @click="$store.commit('header_click', 2)"
      >
        Menu
      </p>
      <p
        class="header-underbar"
        :class="{ clicked: $store.state.header_clicked[3] == 1 }"
        @click="$store.commit('header_click', 3)"
      >
        Store
      </p>
      <p
        class="header-underbar"
        :class="{ clicked: $store.state.header_clicked[4] == 1 }"
        @click="$store.commit('header_click', 4)"
      >
        Booking
      </p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    setInterval(() => {
      if (this.$store.state.load_modal == 1) {
        document.getElementById('header-wrap').classList.add('FadeInUtoD');
      }
    }, 1000);
  },
};
</script>

<style>
.header-wrap {
  width: 100vw;
  height: 10vh;
  background-color: #f7f7f7;
  opacity: 0;
}
.menu-home {
  position: absolute;
  left: 13vw;
  width: 4vw;
  height: 10vh;
}
.menu-home-img {
  width: 4vw;
  height: 10vh;
}
.header-menu {
  width: 40vw;
  height: 10vh;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  left: 30vw;
}
.header-menu > p {
  font-size: 0.8vw;
  font-weight: 600;
  letter-spacing: -0.5px;
}
.header-underbar::after {
  content: '';
  width: 0px;
  height: 2px;
  display: block;
  background: #21211f;
  transition: 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  border-radius: 5px;
}
.header-underbar:hover::after {
  width: 100%;
}
.clicked::after {
  content: '';
  width: 100%;
  height: 2px;
  display: block;
  background: #21211f;
  transition: 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  border-radius: 5px;
}
@media (max-width: 1600px) {
  .header-menu > p {
    font-size: 1.25vw;
  }
  .menu-home-img {
    width: 6.375vw;
  }
  .menu-home {
    left: 10.625vw;
  }
}
@media (max-width: 1200px) {
  .header-menu > p {
    font-size: 1.6667vw;
  }
  .menu-home-img {
    width: 8.5vw;
  }
  .header-menu {
    width: 50vw;
  }
  .menu-home {
    left: 8.5vw;
  }
}
@media (max-width: 800px) {
  .header-menu > p {
    font-size: 2.5vw;
  }
  .header-menu {
    width: 60vw;
  }
  .menu-home-img {
    width: 12.75vw;
  }
  .menu-home {
    left: 4.25vw;
  }
}
</style>
