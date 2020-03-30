<template>
  <Layout>
    <g-image class="mainImage" src="~/assets/images/starterPage.png"></g-image>

    <footer class="location">
      <!-- ******** Text to display while getting the location ******** -->
      <div v-if="gettingLocation">
        <i>Getting your location...</i>
      </div>
      <!-- ******** Display location and temprature ******** -->
      <div v-if="location">{{ location }}, {{ currentTemp }} °C</div>
    </footer>
  </Layout>
</template>

<script>
import burgerMenu from "@/components/burgerMenu";

export default {
  metaInfo: {
    title: "Home"
  },
  components: {
    burgerMenu
  },
  data() {
    return {
      location: null,
      gettingLocation: false,
      currentTemp: null
    };
  },
  methods: {
    //******** Use axios to get location and temprature
    getWeather(url) {
      const axios = require("axios");
      axios
        .get(url)
        .then(response => {
          this.currentTemp = Math.round(response.data.main.temp);
          this.location = response.data.name;
          this.gettingLocation = false;
        })
        .catch(error => {
          alert(error);
        });
    },

    //******** Get geolocation from browser
    geoLocation() {
      navigator.geolocation.getCurrentPosition(this.buildUrl, this.geoError);
    },

    //******** Build the URL to use in getWeather function
    buildUrl(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const API = "http://api.openweathermap.org/data/2.5/weather?units=metric";
      const KEY = "&APPID=e5b8f6b3c672e0dd19ef7ebb764f876b";

      this.getWeather(API + "&lat=" + lat + "&lon=" + lon + KEY);
    },

    //******** If we get an error in geolocation, use default Aveiro
    geoError(error) {
      this.getWeather(API + "&lat=40.6442700&lon=-8.6455400" + KEY);
    }
  },
  //******** Before rendering the app
  beforeMount() {
    this.gettingLocation = true;
    this.geoLocation();
  }
};
</script>

<style lang="scss">
.mainImage {
  height: auto;
  left: 50%;
  position: fixed;
  top: 55%;
  transform: translate(-50%, -50%);
  width: 80%;
}

.location {
  position: fixed;
  bottom: 0;
  margin-bottom: 1rem;
  color: white;
}
</style>
