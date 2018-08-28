<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" @click="increment">
    <HelloWorld :msg="`Welcome to Your Vue.js + TypeScript App ${this.counter}`"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

// Use Store2
// import { Getter, Action } from 'vuex-class';
// import * as app from './store2/modules/app';
//

@Component({
  components: {
    HelloWorld,
  },
  // Use Store2
  // methods: {
  //   ...app.mapActions(['incrementAction']),
  // },
  //
})
export default class App extends Vue {

  // Use Store
  private get counter(): number {
    return this.$store.getters.getCounter();
  }
  //
  // Use Store2
  // @Getter('app/counter') private counter!: number;
  // private incrementAction!: (payload: {}) => void;
  //
  // use vuex-class
  // @Action('app/incrementAction') private incrementAction!: (payload: {}) => void;
  //

  private increment(): void {
    // Use Store
    this.$store.dispatch('incrementAction');
    //
    // use Store2
    // this.incrementAction({});
    //
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
