<template>
  <div>
    <v-row>
      <v-col cols="8">
        <currentWeather />
      </v-col>
      <v-col cols="4">
        <forecastWeather />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import currentWeather from "@/components/currentWeather";
import forecastWeather from "@/components/forecastWeather";

export default {
  name: "home",
  components: { currentWeather, forecastWeather }
};
</script>

<style scoped></style>
