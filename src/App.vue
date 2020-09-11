<template>
  <v-app>
    <v-main>
      <v-row>
        <v-col cols="8">
          <currentWeather />
        </v-col>
        <v-col cols="4">
          <forecastWeather />
        </v-col>
      </v-row>
    </v-main>
    <v-bottom-navigation>
      <v-btn>
        <span>Weather</span>
        <v-icon>nature</v-icon>
      </v-btn>
      <v-btn>
        <span>Forecast</span>
        <v-icon>analytics</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import currentWeather from "@/components/currentWeather";
import forecastWeather from "@/components/forecastWeather";

export default {
  name: "App",
  components: { currentWeather, forecastWeather },
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
