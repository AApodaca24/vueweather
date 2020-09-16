<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-container>
          <h1 style="color:white;">12 Hour Forecast</h1>
        </v-container>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-flex xs12>
          <v-card dark>
            <v-sparkline
            class="ma-2 py-3"
              :smooth="16"
              :gradient="['red', 'orange', 'yellow']"
              :line-width="3"
              :value="getValues"
              auto-draw
            >
              <template v-slot:label="item">{{ item.value }}&#176; </template>
            </v-sparkline>
          </v-card>
        </v-flex>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
  name: 'hourlyWeather',
  data: () => ({
    weather: [],
    data: null,
    error: false,
    errorMsg: '',
  }),
  methods: {
    formatDate(date) {
      const newDate = moment(date).format('h a');
      return newDate;
    },
    async getWeather() {
      const url = 'https://api.climacell.co/v3/weather/forecast/hourly';
      const query = {
        lat: '39.0069241',
        lon: '-104.8850611',
        unit_system: 'us',
        start_time: 'now',
        fields: 'temp',
        apikey: 'HMs69QUU9S4UvvrI90HqIHMLCNvZROvz',
      };
      try {
        const { data } = await axios.get(url, { params: query });
        this.data = data;
      } catch (err) {
        this.error = true;
        this.errorMsg = err.message;
        alert(this.errorMsg);
      }
    },
  },
  computed: {
    getValues() {
      let values = [];
      if (this.data === null) {
        return [];
      } else {
        this.data.forEach(r => {
          values.push(Math.round(r.temp.value));
        });
      }
      return values.slice(0, 12);
    },
  },
  created() {
    this.getWeather();
  },
};
</script>

<style scoped></style>
