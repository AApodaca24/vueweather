<template>
  <div class="fill-height">
    <v-row class="fill-height">
      <v-col>
        <v-flex
          class="fill-height text-center"
          style="display: flex;flex-direction:row;justify-content:center;align-items:center;"
        >
          <v-container>
            <v-chip
              class="ma-2"
              color="blue lighten-4"
              label
              text-color="blue-grey darken-3"
            >
              <v-icon left>label</v-icon>
              USAF, CO
            </v-chip>
            <p style="font-size: 5rem;">
              {{ Math.round(currentWeather.temp.value) }}&#176;
            </p>
            <p>
              {{
                "Feels Like: " + Math.round(currentWeather.feels_like.value)
              }}&#176;
            </p>
            <div style="display:flex"></div>
            <v-icon>{{ getWeatherIcon }}</v-icon>
            <p>{{ currentWeather.weather_code.value }}</p>
          </v-container>
        </v-flex>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "currentWeather",
  data: () => ({
    currentWeather: []
  }),
  methods: {
    async getWeather() {
      const url = "https://api.climacell.co/v3/weather/realtime";
      const query = {
        lat: "39.0069241",
        lon: "-104.8850611",
        unit_system: "us",
        fields:
          "temp,feels_like,humidity,precipitation,precipitation_type,weather_code",
        apikey: "HMs69QUU9S4UvvrI90HqIHMLCNvZROvz"
      };
      try {
        const { data } = await axios.get(url, { params: query });
        this.currentWeather = data;
      } catch (err) {
        console.log(err);
      }
    }
  },
  computed: {
    getWeatherIcon() {
      let icon;
      switch (this.currentWeather.weather_code.value) {
        case "clear":
          icon = "mdi-weather-sunny";
          break;
        case "freezing_rain_heavy" ||
          "freezing_rain" ||
          "freezing_rain_light" ||
          "freezing_drizzle":
          icon = "mdi-weather-snowy-rainy";
          break;
        case "ice_pellets_heavy" || "ice_pellets" || "ice_pellets_light":
          icon = "mdi-weather-hail";
          break;
        case "snow_heavy" || "snow" || "snow_light" || "flurries":
          icon = "mdi-weather-snowy-heavy";
          break;
        case "tstorm":
          icon = "mdi-weather-lightning";
          break;
        case "rain_heavy" || "rain" || "rain_light" || "drizzle":
          icon = "mdi-weather-rainy";
          break;
        case "fog_light" || "fog" || "cloudy" || "mostly_cloudy":
          icon = "mdi-weather-fog";
          break;
        case "partly_cloudy" || "mostly_clear":
          icon = "mdi-weather-partly-cloudly";
          break;
      }
      return icon;
    }
  },
  mounted() {
    this.getWeather();
  }
};
</script>

<style scoped></style>
