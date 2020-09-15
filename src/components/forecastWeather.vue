<template>
  <div>
    <v-row>
      <v-col cols="10" class="mx-auto">
        <v-flex xs12>
          <v-card class="mx-auto text-center" max-width="200" outlined dark>
            <v-list-item three-line v-for="(f, index) in fiveday" :key="index">
              <v-list-item-content>
                <div class="overline mb-4" dark>
                  {{ formatDate(f.observation_time.value) }}
                </div>
                <v-list-item-title class="headline mb-1"
                  ><v-icon class="pb-1 mr-1">mdi-weather-sunny </v-icon
                  >{{ Math.round(f.temp[1].max.value) }}</v-list-item-title
                >
                <v-list-item-subtitle style="font-size:1.2rem;" class="mb-2"
                  ><v-icon class="pr-1">mdi-weather-night</v-icon
                  >{{ Math.round(f.temp[0].min.value) }}</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-flex>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "forecastWeather",
  data: () => ({
    forecast: []
  }),
  methods: {
    formatDate(date) {
      const newDate = moment(date).format("dddd");
      return newDate;
    },
    async getWeather() {
      const url = "https://api.climacell.co/v3/weather/forecast/daily";
      const query = {
        lat: "39.0069241",
        lon: "-104.8850611",
        unit_system: "us",
        start_time: "now",
        fields: "temp,humidity,precipitation_probability,sunrise,sunset",
        apikey: "HMs69QUU9S4UvvrI90HqIHMLCNvZROvz"
      };
      try {
        const { data } = await axios.get(url, { params: query });
        console.log(data);
        this.forecast = data;
      } catch (err) {
        console.log(err);
      }
    }
  },
  computed: {
    fiveday() {
      return this.forecast.slice(0, 5);
    }
  },
  created() {
    this.getWeather();
  },
};
</script>

<style scoped></style>
