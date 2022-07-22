<template>
  <div class="wrap">
    <transition name="load_out">
      <Load v-if="$store.state.load_modal == 0" />
    </transition>
    <Header />
    <Home />
    <transition name="header_inout">
      <Brand v-if="$store.state.page_clicked[1] == 1" />
    </transition>
    <transition name="header_inout">
      <Menu v-if="$store.state.page_clicked[2] == 1" />
    </transition>
    <transition name="header_inout">
      <Store v-if="$store.state.page_clicked[3] == 1" />
    </transition>
    <transition name="header_inout">
      <Book v-if="$store.state.page_clicked[4] == 1" />
    </transition>
  </div>
</template>

<script>
import Load from './components/load.vue';
import Header from './components/header.vue';
import Home from './components/home.vue';
import Brand from './components/brand.vue';
import Menu from './components/menu.vue';
import Book from './components/book.vue';
import Store from './components/store.vue';
export default {
  name: 'App',
  components: {
    Load: Load,
    Header: Header,
    Home: Home,
    Brand: Brand,
    Menu: Menu,
    Book: Book,
    Store: Store,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap');
@import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);
* {
  font-family: 'Abel', sans-serif;
  font-family: 'NanumSquare', san-serif;
  font-family: 'Lexend Deca', sans-serif;
  margin: 0;
  padding: 0;
}
div {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #21211f;
  background-color: #f7f7f7;
}
.wrap {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
}
.load_out-leave-active {
  transition: 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.load_out-leave-to {
  transform: translateY(-100vh);
}

.FadeInLtoR {
  animation: FadeInLtoR 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
}
@keyframes FadeInLtoR {
  0% {
    opacity: 0;
    transform: translateX(-100vw);
  }
  50% {
    opacity: 1;
    transform: translatex(-100vw);
  }
  100% {
    opacity: 1;
    transform: translatex(0vw);
  }
}

.FadeInRtoL {
  animation: FadeInRtoL 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
}
@keyframes FadeInRtoL {
  0% {
    opacity: 1;
    transform: translateX(100vw);
  }
  50% {
    opacity: 1;
    transform: translatex(100vw);
  }
  100% {
    opacity: 1;
    transform: translatex(0vw);
  }
}
@keyframes FadeOuttoR {
  0% {
    opacity: 1;
    transform: translateX(0vw);
  }
  50% {
    opacity: 1;
    transform: translatex(0vw);
  }
  100% {
    opacity: 1;
    transform: translatex(100vw);
  }
}
.header_inout-enter-active {
  animation: FadeInRtoL 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.header_inout-leave-active {
  animation: FadeOuttoR 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}
</style>
