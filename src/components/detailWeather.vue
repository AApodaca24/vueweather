<template>
  <div style="display:flex;">
    <v-flex xs6 style="height:100%;" class="ma-4">
      <v-card style="height:100%;" dark>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title>{{
              'AQI: ' + Math.floor(data.epa_aqi.value)
            }}</v-list-item-title>
            <v-list-item-subtitle :style="{ color: getEpaColor, fontSize: '1.4rem' }" class="py-4" >
              {{ data.epa_health_concern.value }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              <p>
                Primary Pollutant:
                <span style="font-size:1.2rem;">{{
                  data.epa_primary_pollutant.value
                }}</span>
              </p>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-flex>
    <v-flex xs6 class="ma-4 text-center">
      <v-card style="display:flex;justify-content:center;" dark>
        <div class="pa-5 text-center">
          <v-icon size="48" class="mb-4">mdi-weather-sunset-up</v-icon>
          <p>{{ formatDate(data.sunrise.value) }}</p>
        </div>
        <div class="pa-5 text-center">
          <v-icon size="48" class="mb-4">mdi-weather-sunset-down</v-icon>
          <p>{{ formatDate(data.sunset.value) }}</p>
        </div>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
  name: 'detailWeather',
  data: () => ({
    message: 'details',
    data: null,
    error: false,
    errorMsg: '',
  }),
  methods: {
    formatDate(date) {
      const newDate = moment(date).format('h:mm:ss a');
      return newDate;
    },
    async getData() {
      const url = 'https://api.climacell.co/v3/weather/realtime';
      const query = {
        lat: '39.0069241',
        lon: '-104.8850611',
        unit_system: 'us',
        fields:
          'fire_index,epa_aqi,epa_primary_pollutant,epa_health_concern,sunrise,sunset',
        apikey: 'HMs69QUU9S4UvvrI90HqIHMLCNvZROvz',
      };
      try {
        const { data } = await axios.get(url, { params: query });
        console.log(data);
        this.data = data;
      } catch (error) {
        console.log(error);
        alert(error);
      }
    },
  },
  computed: {
    getEpaColor() {
      let color;
      switch (this.data.epa_health_concern.value) {
        case 'Good':
          color = '#388E3C';
          break;
        case 'Moderate':
          color = '#FFA726';
          break;
        case 'Unhealthy for sensitive groups':
        case 'Unhealthy':
        case 'Very Unhealthy':
        case 'Hazardous':
          color = '#F44336';
          break;
      }
      return color;
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped></style>
