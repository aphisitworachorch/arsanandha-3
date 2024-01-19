<template>
  <div class="loader" v-if="!weatherExist"></div>
  <div class="container font-apFont shadow-xl" v-if="weatherExist">
    <div class="animate__animated animate__fadeIn animate__delay-1s mockup-code bg-black text-left w-96">
      <div class="flex flex-col">
        <pre class="animate__animated animate__fadeIn animate__delay-2s" data-prefix=">"><code class="text-2xl">Weather Condition ☁️</code></pre>
        <pre data-prefix=""></pre>
        <pre class="animate__animated animate__fadeIn animate__delay-2s" data-prefix="~"><code>Here is Photo: <a :href="this.weatherBg" class="hover:text-success" target="_blank">Click 📷</a></code></pre>
        <pre data-prefix=""></pre>
        <div v-for="(d,idx) in this.location">
          <pre class="animate__animated animate__fadeIn animate__delay-2s" :data-prefix="idx === 0 ? '>' : '-'" ><code>{{ idx === 0 ? 'Location: ' : '📍 '}}{{ d }}</code></pre>
        </div>
        <pre data-prefix=""></pre>
        <pre class="animate__animated animate__fadeIn animate__delay-3s" data-prefix=">"><code>Temperature: {{ this.temperature }}°C</code></pre>
        <pre class="animate__animated animate__fadeIn animate__delay-3s" data-prefix=">"><code>Condition: {{ this.thaiCondition }}</code></pre>
        <pre class="animate__animated animate__fadeIn animate__delay-3s" data-prefix=">"><code>Time: {{ this.timeFetch }}</code></pre>
        <pre class="animate__animated animate__fadeIn animate__delay-3s" data-prefix=">"><code>Feels like: {{ this.heatIndex }}</code></pre>
        <pre data-prefix=""></pre>
        <pre class="animate__animated animate__fadeIn animate__delay-4s" data-prefix=">"><code>Provided by <a :href="this.weatherBg" class="hover:text-success" target="_blank">TMD</a></code></pre>
      </div>
    </div>
  </div>
</template>
<script>

export default {
    name: "TotoWeatherComponents",
    data() {
        return {
            location: "",
            temperature: "",
            thaiCondition:"",
            weatherBg:"",
            heatIndex:0,
            coord: {},
            timeFetch: "",
            weatherExist: false,
            weatherEnum: {
                "CLEAR": {
                    "thai_condition": "ท้องฟ้าแจ่มใส",
                    "en_condition": "Clear",
                    "image":"https://unsplash.com/photos/Bl61MZLv7x0/download?force=true&w=1920"
                },
                "PARTLY_CLOUDY": {
                    "thai_condition": "มีเมฆบางส่วน",
                    "en_condition": "Partly cloudy",
                    "image":"https://unsplash.com/photos/HwpOAJfN8mM/download?force=true&w=1920"
                },
                "CLOUDY": {
                    "thai_condition": "เมฆเป็นส่วนมาก",
                    "en_condition": "Cloudy",
                    "image":"https://unsplash.com/photos/3TRtbfW3riU/download?force=true&w=1920"
                },
                "OVERCAST": {
                    "thai_condition": "มีเมฆมาก",
                    "en_condition": "Overcast",
                    "image":"https://unsplash.com/photos/Pe1Ol9oLc4o/download?force=true&w=1920"
                },
                "LIGHT_RAIN": {
                    "thai_condition": "ฝนตกเล็กน้อย",
                    "en_condition": "Light rain",
                    "image":"https://unsplash.com/photos/ZxZQk7777R4/download?force=true&w=1920"
                },
                "MODERATE_RAIN": {
                    "thai_condition": "ฝนปานกลาง",
                    "en_condition": "Moderate rain",
                    "image":"https://unsplash.com/photos/_zUAcIvs-ME/download?force=true&w=1920"
                },
                "HEAVY_RAIN": {
                    "thai_condition": "ฝนตกหนัก",
                    "en_condition": "Heavy rain",
                    "image":"https://unsplash.com/photos/pv2ZlDfstXc/download?force=true&w=1920"
                },
                "THUNDERSTORM": {
                    "thai_condition": "ฝนฟ้าคะนอง",
                    "en_condition": "Thunderstorm",
                    "image":"https://unsplash.com/photos/PySq7yX6hlw/download?force=true&w=1920"
                },
                "VERY_COLD": {
                    "thai_condition": "อากาศหนาวจัด",
                    "en_condition": "Very cold",
                    "image":"https://unsplash.com/photos/pzS2Os59dNw/download?force=true&w=1920"
                },
                "COLD": {
                    "thai_condition": "อากาศหนาว",
                    "en_condition": "Cold",
                    "image":"https://unsplash.com/photos/MHvM1hXYHpk/download?force=true&w=1920"
                },
                "COOL": {
                    "thai_condition": "อากาศเย็น",
                    "en_condition": "Cool",
                    "image":"https://unsplash.com/photos/DZVkhkreEus/download?force=true&w=1920"
                },
                "VERY_HOT": {
                    "thai_condition": "อากาศร้อนจัด",
                    "en_condition": "Very hot",
                    "image":"https://unsplash.com/photos/xpOW8Pnla8M/download?force=true&w=1920"
                }
            }
        }
    },
    methods: {
        feelsLikeCal: function (temp, humidity, windSpeed, windDirection) {
            // Check if temperature or humidity are outside of acceptable range
            if (temp < -50 || temp > 70 || humidity < 0 || humidity > 100) {
                return "N/A";
            }

            // Calculate the feels like temperature
            const c1 = -8.78469475556;
            const c2 = 1.61139411;
            const c3 = 2.33854883889;
            const c4 = -0.14611605;
            const c5 = -0.012308094;
            const c6 = -0.0164248277778;
            const c7 = 0.002211732;
            const c8 = 0.00072546;
            const c9 = -0.000003582;

            const rh = humidity / 100;

            const heatIndex = c1
                + (c2 * temp)
                + (c3 * rh)
                + (c4 * temp * rh)
                + (c5 * Math.pow(temp, 2))
                + (c6 * Math.pow(rh, 2))
                + (c7 * Math.pow(temp, 2) * rh)
                + (c8 * temp * Math.pow(rh, 2))
                + (c9 * Math.pow(temp, 2) * Math.pow(rh, 2));

            // Adjust for low humidity
            const adj = (rh < 0.5) ? (0.5 * (1.0 - rh)) * ((c2 * temp) + c3) : 0;

            const heatIndexWithAdj = heatIndex + adj;

            // Adjust for wind chill
            let feelsLike = heatIndexWithAdj;
            if (temp <= 10 && windSpeed > 0) {
                const windChill = 13.12 + (0.6215 * temp) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temp * Math.pow(windSpeed, 0.16));
                feelsLike = Math.min(heatIndexWithAdj, windChill);
            }

            return feelsLike.toFixed(0) + "°C";
        },
        getWeather: async function (lat, lon) {
            const options = {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: {"lat": lat.toString(), "lon": lon.toString()}
            };

            const { data } = await useFetch('https://weather-api.arsanandha.xyz/weather/get', {
              server: true,
              ...options
            });

            const parsedData = data.value.data;

            this.weatherExist = true;
            this.temperature = parseInt(parsedData.temperature, 0);
            this.location = parsedData.Location.display_name?.split(", ");
            this.thaiCondition = `${this.weatherEnum[parsedData.condition]["thai_condition"]}`;
            this.weatherBg = this.weatherEnum[parsedData.condition]["image"];
            this.timeFetch = new Date(Date.parse(parsedData.timestamp)).toISOString();
            this.heatIndex = this.feelsLikeCal(parsedData.temperature, parsedData.relative_humidity, parsedData.wind_speed, parsedData.wind_direction);
        }
    },
    async mounted() {
        navigator.geolocation.getCurrentPosition(async loc => {
            const lat = loc.coords.latitude;
            const lng = loc.coords.longitude;
            await this.getWeather(lat, lng);
        }, error => {
            console.log(error.message);
        },);

    }
}
</script>

<style scoped>
/* HTML: <div class="loader"></div> */
.loader {
  width: 120px;
  aspect-ratio: 1;
  --_g: no-repeat radial-gradient(farthest-side, #fffcfc 94%,#0000);
  background:
      var(--_g) 0    0,
      var(--_g) 100% 0,
      var(--_g) 100% 100%,
      var(--_g) 0    100%;
  background-size: 40% 40%;
  animation: l38 .5s infinite;
}
@keyframes l38 {
  100% {background-position: 100% 0,100% 100%,0 100%,0 0}
}
</style>