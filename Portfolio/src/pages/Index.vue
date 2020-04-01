<template>
  <Layout>
    <!-- <g-image class="mainImage" src="~/assets/images/starterPage.png" alt="Starter page image" /> -->
    <div class="mainImage">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 650 950"
        preserveAspectRatio="xMidYMid"
      >
        <path id="XMLID_1_" class="st0" d="M537 31.5h50v50h-50z" />
        <path id="XMLID_3_" class="st0" d="M537 81.5h50v50h-50z" />
        <path id="XMLID_4_" class="st0" d="M537 131.5h50v50h-50z" />
        <path id="XMLID_5_" class="st0" d="M537 181.5h50v50h-50z" />
        <path id="XMLID_6_" class="st0" d="M537 231.5h50v50h-50z" />
        <path id="XMLID_7_" class="st0" d="M487 231.5h50v50h-50z" />
        <path id="XMLID_8_" class="st0" d="M437 231.5h50v50h-50z" />
        <path id="XMLID_12_" class="st0" d="M437 281.5h50v50h-50z" />
        <path id="XMLID_9_" class="st0" d="M387 231.5h50v50h-50z" />
        <path id="XMLID_10_" class="st0" d="M337 231.5h50v50h-50z" />
        <path id="XMLID_11_" class="st0" d="M287 231.5h50v50h-50z" />
        <path id="XMLID_23_" class="st0" d="M287 181.5h50v50h-50z" />
        <path id="XMLID_24_" class="st0" d="M287 131.5h50v50h-50z" />
        <path id="XMLID_26_" class="st0" d="M237 131.5h50v50h-50z" />
        <path id="XMLID_27_" class="st0" d="M187 131.5h50v50h-50z" />
        <path id="XMLID_28_" class="st0" d="M137 131.5h50v50h-50z" />
        <path id="XMLID_30_" class="st0" d="M137 181.5h50v50h-50z" />
        <path id="XMLID_29_" class="st0" d="M137 81.5h50v50h-50z" />
        <path id="XMLID_25_" class="st0" d="M287 81.5h50v50h-50z" />
        <path id="XMLID_13_" class="st0" d="M287 281.5h50v50h-50z" />
        <path id="XMLID_14_" class="st0" d="M287 331.5h50v50h-50z" />
        <path id="XMLID_15_" class="st0" d="M287 381.5h50v50h-50z" />
        <path id="XMLID_16_" class="st0" d="M287 431.5h50v50h-50z" />
        <path id="XMLID_31_" class="st0" d="M337 431.5h50v50h-50z" />
        <path id="XMLID_32_" class="st0" d="M387 431.5h50v50h-50z" />
        <path id="XMLID_18_" class="st0" d="M237 431.5h50v50h-50z" />
        <path id="XMLID_19_" class="st0" d="M187 431.5h50v50h-50z" />
        <path id="XMLID_20_" class="st0" d="M137 431.5h50v50h-50z" />
        <path id="XMLID_21_" class="st0" d="M87 431.5h50v50H87z" />
        <path id="XMLID_35_" class="st0" d="M87 481.5h50v50H87z" />
        <path id="XMLID_36_" class="st0" d="M87 531.5h50v50H87z" />
        <path id="XMLID_37_" class="st0" d="M87 581.5h50v50H87z" />
        <path id="XMLID_39_" class="st0" d="M137 581.5h50v50h-50z" />
        <path id="XMLID_40_" class="st0" d="M187 581.5h50v50h-50z" />
        <path id="XMLID_43_" class="st0" d="M187 631.5h50v50h-50z" />
        <path id="XMLID_41_" class="st0" d="M237 581.5h50v50h-50z" />
        <path id="XMLID_42_" class="st0" d="M287 581.5h50v50h-50z" />
        <path id="XMLID_38_" class="st0" d="M87 631.5h50v50H87z" />
        <path id="XMLID_33_" class="st0" d="M87 381.5h50v50H87z" />
        <path id="XMLID_34_" class="st0" d="M87 331.5h50v50H87z" />
        <path id="XMLID_22_" class="st0" d="M37 431.5h50v50H37z" />
        <path id="XMLID_17_" class="st0" d="M287 481.5h50v50h-50z" />
      </svg>
    </div>

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
export default {
  metaInfo: {
    title: "Home"
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
      const API =
        "https://api.openweathermap.org/data/2.5/weather?units=metric";
      const KEY = "&APPID=e5b8f6b3c672e0dd19ef7ebb764f876b";

      this.getWeather(API + "&lat=" + lat + "&lon=" + lon + KEY);
    },

    //******** If we get an error in geolocation, use default Aveiro
    geoError(error) {
      this.getWeather(API + "&lat=40.6442700&lon=-8.6455400" + KEY);
    }
  },
  //******** Before rendering the app
  mounted() {
    this.gettingLocation = true;
    this.geoLocation();
  }
};
</script>

<style lang="scss">
.mainImage {
  height: 100%;
  left: 50%;
  position: fixed;
  top: 55%;
  transform: translate(-50%, -50%);
  width: 90%;
}

.location {
  position: fixed;
  bottom: 0;
  margin-bottom: 1rem;
  color: white;
}

.st0 {
  stroke: white;
  fill: transparent;
  stroke-miterlimit: 10;
}
</style>
