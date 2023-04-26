<template>
    <div class="container font-apFont" v-if="weatherExist">
        <figure><img :src="weatherBg" class="object-cover blur-sm	 absolute left-0 top-0 h-screen w-full"/></figure>
        <div class="flex flex-col md:flex-row m-3 max-w-screen md:w-96 ">
            <div class="p-2">
                <div class="transition-all duration-700 ease-in-out delay-75 hover:scale-105 card glass md:w-96 rounded-2xl text-primary text-left shadow-xl hover:shadow-2xl max-w-screen w-72">
                    <div class="card-body p-6">
                        <div>
                            <h5 class="text-white transition-all duration-300 ease-in-out text-md font-apThai font-bold">
                                เวลาดึงข้อมูล ณ
                            </h5>
                            <h5 class="text-white transition-all duration-300 ease-in-out text-sm font-apThai">
                                {{ timeFetch }}
                            </h5>
                        </div>
                    </div>
                </div>
                <br/>
                <div class="transition-all duration-700 ease-in-out delay-75 hover:scale-105 card glass md:w-96 md:h-96 rounded-2xl text-primary relative text-left shadow-xl hover:shadow-2xl max-w-screen w-72 h-72">
                    <div class="card-body">
                        <div class="card-title absolute left-0 top-0 p-3">
                            <h1 class="text-white transition-all duration-300 ease-in-out md:text-6xl text-3xl font-apThai">
                                สภาพอากาศ
                            </h1>
                        </div>
                        <div class=" absolute left-0 md:top-16 md:p-5 top-14 p-3">
                            <h3 class="text-white transition-all duration-300 ease-in-out md:text-xl text-md font-apThai">
                                📍 {{ location }}
                            </h3>
                        </div>
                        <div class="text-white absolute bottom-0 right-2 p-2">
                            <p class="md:text-xl text-md font-light text-right">
                                °C
                            </p>
                            <h2 class="text-7xl font-bold text-right">
                                {{ temperature }}
                            </h2>
                            <p class="md:text-xl text-lg font-light text-right font-apThai">
                                {{ thaiCondition }}
                            </p>
                            <p class="text-sm font-light text-right font-apThai">
                                รู้สึกเหมือน {{ heatIndex }}
                            </p>
                        </div>
                    </div>
                </div>
                <br/>
                <div class="transition-all duration-700 ease-in-out delay-75 hover:scale-105 card glass md:w-96 rounded-2xl text-primary text-left shadow-xl hover:shadow-2xl max-w-screen w-72">
                    <div class="card-body p-6">
                        <div>
                            <h5 class="text-white transition-all duration-300 ease-in-out text-md font-apThai font-bold">
                                บริการข้อมูลโดย
                            </h5>
                            <h5 class="text-white transition-all duration-300 ease-in-out text-sm font-apThai">
                                กรมอุตุนิยมวิทยา / OpenStreetMap (via Nominatim)
                            </h5>
                        </div>
                    </div>
                </div>
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

            // Adjust for wind direction
            if (windDirection !== null) {
                const windAngle = windDirection * (Math.PI / 360);
                const windFactor = Math.abs(Math.cos(windAngle));
                feelsLike *= windFactor;
            }

            return feelsLike.toFixed(0) + "°C";
        },
        getWeather: async function (lat, lon) {
            const options = {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({"lat": lat.toString(), "lon": lon.toString()})
            };

            const data = await fetch('https://weather-api.arsanandha.xyz/weather/get', options)
                .then(response => response.json())
                .catch(err => console.error(err));

            this.weatherExist = true;
            this.temperature = parseInt(data.data.temperature, 0);
            this.location = data.data.Location.display_name;
            this.thaiCondition = `${this.weatherEnum[data.data.condition]["thai_condition"]}`;
            this.weatherBg = this.weatherEnum[data.data.condition]["image"];
            this.timeFetch = new Date(Date.parse(data.data.timestamp));
            this.heatIndex = this.feelsLikeCal(data.data.temperature, data.data.relative_humidity, data.data.wind_speed, data.data.wind_direction);
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
</style>