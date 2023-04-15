<template>
  <div class="container font-apFont">
    <div class="flex flex-col md:flex-row m-3 transition-all duration-300 ease-in-out hover:scale-110">
      <div class="p-2">
        <div class="w-80 h-80 bg-black bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-2xl text-primary relative text-left">
          <div class="absolute left-0 top-0 p-3">
            <h3 class="transition-all duration-300 ease-in-out text-xl hover:text-2xl font-apThai">
              {{ location }}
            </h3>
          </div>
          <div class="absolute bottom-0 right-2 p-2">
            <p class="text-xl font-light text-right">
              °C
            </p>
            <h2 class="transition-all duration-300 ease-in-out text-7xl hover:text-9xl font-bold">
              {{ temperature }}
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "TotoWeatherComponents",
  data(){
    return {
      location:"",
      temperature:"",
      coord:{}
    }
  },
  methods: {
    getWeather: async function (lat, lon) {
      const options = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"lat": lat.toString(), "lon": lon.toString()})
      };

      const data = await fetch('https://weather-api.arsanandha.xyz/weather/get', options)
          .then(response => response.json())
          .catch(err => console.error(err));

      this.temperature = parseInt(data.data.temperature, 0);
      this.location = data.data.Location.display_name;
    }
  },
  async mounted() {
      navigator.geolocation.getCurrentPosition(async loc => {
          const lat = loc.coords.latitude;
          const lng = loc.coords.longitude;
          await this.getWeather(lat, lng);
      },error => {
          console.log(error.message);
      },);

  }
}
</script>

<style scoped>

</style>