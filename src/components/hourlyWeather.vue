<template>
  <div>
    <v-row>
      <v-col cols="12" style="display:flex;overflow:auto;width:100%;">
        <v-flex v-for="(f, index) in data" :key="index">
          <v-card class="text-center ma-2" max-width="200" outlined dark>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4" dark>
                  {{ formatDate(f.observation_time.value) }}
                </div>
                <v-list-item-title class="headline mb-1"
                  >{{ Math.round(f.temp.value) }}&#176;</v-list-item-title
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
  name: "hourlyWeather",
  data: () => ({
    weather: [],
    data: null,
    error: false,
    errorMsg: ""
  }),
  methods: {
    formatDate(date) {
      const newDate = moment(date).format("h:mm a");
      return newDate;
    },
    async getWeather() {
      const url = "https://api.climacell.co/v3/weather/forecast/hourly";
      const query = {
        lat: "39.0069241",
        lon: "-104.8850611",
        unit_system: "us",
        start_time: "now",
        fields: "temp",
        apikey: "HMs69QUU9S4UvvrI90HqIHMLCNvZROvz"
      };
      try {
        const { data } = await axios.get(url, { params: query });
        this.data = data;
      } catch (err) {
        this.error = true;
        this.errorMsg = err.message;
        alert(this.errorMsg);
      }
    }
  },
  mounted() {
    this.getWeather();
  }
};
</script>

<style scoped></style>
