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
    <v-row>
      <v-col></v-col>
      <v-col cols="10">
        <hourlyWeather />
      </v-col>
      <v-col></v-col>
    </v-row>
    <v-row>
      <v-col></v-col>
      <v-col cols="10">
        <detailWeather />
      </v-col>
      <v-col></v-col>
    </v-row>
  </div>
</template>

<script>
import currentWeather from "@/components/currentWeather";
import forecastWeather from "@/components/forecastWeather";
import detailWeather from "@/components/detailWeather";
import hourlyWeather from "@/components/hourlyWeather";

export default {
  name: "home",
  components: { currentWeather, forecastWeather, detailWeather, hourlyWeather }
};
</script>

<style scoped></style>
