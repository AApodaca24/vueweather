<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <v-bottom-navigation>
      <v-btn>
        <span>Weather</span>
        <v-icon>nature</v-icon>
      </v-btn>
      <v-btn :to="{ name: 'weatherMap' }">
        <span>Weather Map</span>
        <v-icon>map</v-icon>
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
