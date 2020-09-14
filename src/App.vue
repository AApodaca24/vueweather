<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <v-bottom-navigation dark>
      <v-btn :to="{ name: 'home' }">
        <span>Weather</span>
        <v-icon>mdi-weather-lightning-rainy</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  })
};
</script>

<style scoped>
body {
  margin: none;
  box-sizing: border-box;
}
</style>
