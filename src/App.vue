<template>
  <v-app>
    <Bar/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
  import Bar from './views/Bar'
  import { store }  from "./store/store";
  export default {
    name: 'App',
    store,
    components: {
      Bar
    },
    data() {
          return {

          };
      },
  };
</script>
