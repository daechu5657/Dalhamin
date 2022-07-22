<template>
  <div class="menu-wrap">
    <div class="menu-slide-btn" id="menu-slide-btn">
      <p
        class="menu-slide-btnp"
        @click="$store.commit('menu_click', 0)"
        :class="[
          { menu_clicked: $store.state.menu_clicked[0] == 1 },
          { clickedm: $store.state.menu_clicked[0] == 1 },
        ]"
      >
        Cake
      </p>
      <p
        class="menu-slide-btnp"
        @click="$store.commit('menu_click', 1)"
        :class="[
          { menu_clicked: $store.state.menu_clicked[1] == 1 },
          { clickedm: $store.state.menu_clicked[1] == 1 },
        ]"
      >
        Gateau
      </p>
      <p
        class="menu-slide-btnp"
        @click="$store.commit('menu_click', 2)"
        :class="[
          { menu_clicked: $store.state.menu_clicked[2] == 1 },
          { clickedm: $store.state.menu_clicked[2] == 1 },
        ]"
      >
        Cookie
      </p>
      <p
        class="menu-slide-btnp"
        @click="$store.commit('menu_click', 3)"
        :class="[
          { menu_clicked: $store.state.menu_clicked[3] == 1 },
          { clickedm: $store.state.menu_clicked[3] == 1 },
        ]"
      >
        Financier
      </p>
      <p
        class="menu-slide-btnp"
        @click="$store.commit('menu_click', 4)"
        :class="[
          { menu_clicked: $store.state.menu_clicked[4] == 1 },
          { clickedm: $store.state.menu_clicked[4] == 1 },
        ]"
      >
        Scone
      </p>
    </div>
    <div class="menu-slide-wrap">
      <transition name="menu">
        <div class="menu-cake" v-show="$store.state.menu_clicked[0] == 1">
          <div class="menu-slide-items" v-for="(a, i) in item[0]" :key="i">
            <img :src="require(`@/assets/c${i + 1}.png`)" alt="" />
            <div class="menu-slide-items-p">
              <p>{{ a.name }}</p>
              <p>KRW {{ a.price }}</p>
            </div>
          </div>
        </div>
      </transition>
      <transition name="menu">
        <div class="menu-gateau" v-show="$store.state.menu_clicked[1] == 1">
          <div class="menu-slide-items" v-for="(a, i) in item[1]" :key="i">
            <img :src="require(`@/assets/g${i + 1}.png`)" alt="" />
            <div class="menu-slide-items-p">
              <p>{{ a.name }}</p>
              <p>KRW {{ a.price }}</p>
            </div>
          </div>
        </div>
      </transition>
      <transition name="menu">
        <div class="menu-cookie" v-show="$store.state.menu_clicked[2] == 1">
          <div class="menu-slide-items" v-for="(a, i) in item[2]" :key="i">
            <img :src="require(`@/assets/co${i + 1}.png`)" alt="" />
            <div class="menu-slide-items-p">
              <p>{{ a.name }}</p>
              <p>KRW {{ a.price }}</p>
            </div>
          </div>
        </div>
      </transition>
      <transition name="menu">
        <div class="menu-financier" v-show="$store.state.menu_clicked[3] == 1">
          <div class="menu-slide-items" v-for="(a, i) in item[3]" :key="i">
            <img :src="require(`@/assets/f${i + 1}.png`)" alt="" />
            <div class="menu-slide-items-p">
              <p>{{ a.name }}</p>
              <p>KRW {{ a.price }}</p>
            </div>
          </div>
        </div>
      </transition>
      <transition name="menu">
        <div class="menu-scone" v-show="$store.state.menu_clicked[4] == 1">
          <div class="menu-slide-items" v-for="(a, i) in item[4]" :key="i">
            <img :src="require(`@/assets/s${i + 1}.png`)" alt="" />
            <div class="menu-slide-items-p">
              <p>{{ a.name }}</p>
              <p>KRW {{ a.price }}</p>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: [
        [
          { name: 'Chocolate Banana Cake', price: '32,000' },
          { name: 'Earl Gray Cake', price: '27,000' },
          { name: 'Basque Cheesecake', price: '23,000' },
          { name: 'Honey Sweet Potato Cake', price: '27,000' },
          { name: 'Victoria Cake', price: '31,000' },
          { name: 'Carrot Cake', price: '27,000' },
        ],
        [
          { name: 'Raspberry Gateau', price: '28,000' },
          { name: 'Matcha Gateau', price: '30,000' },
          { name: 'Wormwood Gateau', price: '32,000' },
        ],
        [
          { name: 'Classic Chocolate Cookie', price: '3,200' },
          { name: 'Double Chocolate Cookie', price: '3,500' },
          { name: 'Red Velvet Smore Cookie', price: '3,500' },
          { name: 'Matcha White Smore Cookie', price: '3,500' },
          { name: 'Tiramisu Cream Cookie', price: '3,500' },
          { name: 'Lemon Earl Gray Cookie', price: '3,200' },
          { name: 'Gogum Cake Cookie', price: '3,200' },
          { name: 'Wormwood Cookie', price: '3,200' },
        ],
        [
          { name: 'Plain Financier', price: '1,800' },
          { name: 'Coconut Financier', price: '2,200' },
          { name: 'Churros Financier', price: '2,200' },
          { name: 'Brownie Financier', price: '2,500' },
          { name: 'Honey Sweet Potato Financier', price: '2,200' },
        ],
        [
          { name: 'Chocolate Chip Scone', price: '2,600' },
          { name: 'Black Sesame Crumble Scone', price: '3,500' },
          { name: 'Orange Earl Gray Scone', price: '2,600' },
          { name: 'Plain Scone', price: '2,000' },
          { name: 'Creme Brulee Tart', price: '3,600' },
        ],
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      document.getElementById('menu-slide-btn').classList.add('FadeInDtoU');
    }, 500);
  },
  unmounted() {
    this.$store.state.menu_clicked = [0, 0, 0, 0, 0];
    setTimeout(() => {
      document.getElementById('menu-slide-btn').classList.remove('FadeInDtoU');
    }, 500);
  },
};
</script>

<style>
.menu-wrap {
  position: absolute;
  width: 100vw;
  height: 90vh;
  background-color: #f7f7f7;
}
.menu-wrap p {
  font-family: 'NanumSquare', san-serif;
}
.menu-slide-btn {
  position: absolute;
  width: 20vw;
  height: 80vh;
  top: 5vh;
  font-size: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  font-weight: 600;
  opacity: 0;
}
.menu-slide-btnp {
  opacity: 0.5;
  transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.menu-slide-btnp:hover {
  transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  opacity: 1;
}
.menu-slide-btnp::after {
  content: '';
  width: 0px;
  height: 2px;
  display: block;
  background: #21211f;
  transition: 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  border-radius: 5px;
}
.menu-slide-btnp:hover::after {
  width: 100%;
}
.clickedm::after {
  content: '';
  width: 100% !important;
  height: 2px;
  display: block;
  background: #21211f;
  transition: 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  border-radius: 5px;
}
.menu_clicked {
  opacity: 1 !important;
}
.menu-slide-wrap {
  position: absolute;
  width: 60vw;
  height: 80vh;
  left: 30vw;
  top: 5vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
}
.menu-slide-items {
  position: relative;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.menu-slide-items > img {
  width: 45%;
  border-radius: 50%;
  background-color: #ffe8c98a;
}
.menu-slide-items-p {
  position: relative;
  width: 45%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  font-size: 1vw;
  font-weight: 600;
}
.menu-slide-items-p > p:nth-child(1) {
  width: 80%;
}
.menu-slide-items-p > p:nth-child(2) {
  font-weight: 400;
  font-size: 0.8vw;
}
.menu-cake {
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
}
.menu-gateau {
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
}
.menu-cookie {
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
}
.menu-financier {
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
}
.menu-scone {
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
}

@keyframes opacityTo0 {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.menu-enter-active {
  animation: FadeInDtoU 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
}
.menu-leave-active {
  animation: opacityTo0 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
}
@media (max-width: 1600px) {
  .menu-slide-btn {
    width: 15vw;
  }
  .menu-slide-wrap {
    width: 70vw;
    height: 70vh;
    top: 10vh;
    left: 20vw;
  }
  .menu-slide-btn {
    height: 70vh;
    top: 10vh;
  }
  .menu-slide-items-p {
    font-size: 1.5vw;
  }
  .menu-slide-items-p > p:nth-child(2) {
    font-size: 1.2vw;
  }
}
@media (max-width: 1200px) {
  .menu-slide-btn {
    width: 15vw;
  }
  .menu-slide-wrap {
    width: 80vw;
    height: 60vh;
    top: 15vh;
    left: 20vw;
  }
  .menu-slide-btn {
    height: 60vh;
    top: 15vh;
  }
  .menu-slide-items-p {
    font-size: 1.5vw;
  }
  .menu-slide-items-p > p:nth-child(2) {
    font-size: 1.2vw;
  }
}
</style>
