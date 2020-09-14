<template>
  <div style="display:flex;">
    <v-flex xs6 style="height:100%;" class="ma-4">
      <v-card style="height:100%;" dark>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title>{{
              "AQI: " + data.epa_aqi.value
            }}</v-list-item-title>
            <v-list-item-subtitle class="pt-4">
              <p>{{ data.epa_health_concern.value }}</p>
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              <p>
                {{ "Primary Pollutant: " + data.epa_primary_pollutant.value }}
              </p>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-flex>
    <v-flex xs6 class="ma-4 text-center">
      <v-card style="display:flex;" class="text-center" dark>
        <div class="pa-5 text-center">
          <v-icon size="32" class="mb-4">mdi-weather-sunset-up</v-icon>
          <p>{{ formatDate(data.sunrise.value) }}</p>
        </div>
        <div class="pa-5 text-center">
          <v-icon size="32" class="mb-4">mdi-weather-sunset-down</v-icon>
          <p>{{ formatDate(data.sunset.value) }}</p>
        </div>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "detailWeather",
  data: () => ({
    message: "details",
    data: null,
    error: false,
    errorMsg: ""
  }),
  methods: {
    formatDate(date) {
      const newDate = moment(date).format("h:mm:ss a");
      return newDate;
    },
    async getData() {
      const url = "https://api.climacell.co/v3/weather/realtime";
      const query = {
        lat: "39.0069241",
        lon: "-104.8850611",
        unit_system: "us",
        fields:
          "fire_index,epa_aqi,epa_primary_pollutant,epa_health_concern,sunrise,sunset",
        apikey: "HMs69QUU9S4UvvrI90HqIHMLCNvZROvz"
      };
      try {
        const { data } = await axios.get(url, { params: query });
        console.log(data);
        this.data = data;
      } catch (error) {
        console.log(error);
        alert(error);
      }
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style scoped></style>
