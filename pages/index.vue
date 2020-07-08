<template>
  <div class>
    <div class="lg:grid lg:grid-cols-12 lg:gap-8 lg:min-h-screen">
      <keep-alive>
        <component
          :is="search ? 'SearchSideBar' : 'DefaultSideBar'"
          v-bind="sideBarProps"
          @search-start="search = true"
          @search-exit="search = false"
          @change-city="changeCity"
          @get-user-location="getUserLocation"
          class="lg:fixed lg:inset-y-0 xl:static xl:inset-auto"
        />
      </keep-alive>
      <div
        class="col-start-5 lg:col-start-5 xl:col-start-5 col-span-7 lg:col-span-8 xl:col-span-7 p-10"
      >
        <div class="hidden lg:flex lg:flex-row justify-end lg:mb-10 xl:mb-16">
          <button
            class="rounded-full w-10 h-10 flex items-center justify-center focus:outline-none mr-2 font-sans text-lg font-bold"
            @click.prevent="fahrenheitToggle = false"
            :class="fahrenheitToggle ? 'bg-blue-400 text-white' : 'bg-white text-blue-700'"
          >°C</button>
          <button
            class="rounded-full w-10 h-10 flex items-center justify-center focus:outline-none font-sans text-lg font-bold"
            @click.prevent="fahrenheitToggle = true"
            :class="fahrenheitToggle ? 'bg-white text-blue-700' : 'bg-blue-400 text-white'"
          >°F</button>
        </div>
        <div class="grid grid-cols-2 gap-8 lg:grid-cols-5">
          <DayWeather
            :date="weather.applicable_date"
            :weatherStateName="weather.weather_state_name"
            :maxTemp="weather.max_temp"
            :minTemp="weather.min_temp"
            :isFahrenheit="fahrenheitToggle"
            v-for="(weather, index) in futureWeathers"
            :key="index"
          />
        </div>
        <div class="mt-8">
          <h2 class="font-sans text-2xl text-white font-bold">Today's Highlights</h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 xl:gap-12 mt-4">
            <WindCard
              :speed="todayWeatherData.wind_speed"
              :direction="todayWeatherData.wind_direction_compass"
            />
            <HumidityCard :humidity="todayWeatherData.humidity" />
            <VisibilityCard :visibility="todayWeatherData.visibility" />
            <PressureCard :pressure="todayWeatherData.air_pressure" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DayWeather from "@/components/DayWeather";
import PressureCard from "@/components/PressureCard";
import VisibilityCard from "@/components/VisibilityCard";
import WindCard from "@/components/WindCard";
import HumidityCard from "@/components/HumidityCard";
import DefaultSideBar from "@/components/DefaultSideBar";
import SearchSideBar from "@/components/SearchSideBar";
import axios from "axios";

export default {
  components: {
    DayWeather,
    PressureCard,
    VisibilityCard,
    WindCard,
    HumidityCard,
    DefaultSideBar,
    SearchSideBar
  },
  data() {
    return {
      weatherData: [],
      city: "",
      fahrenheitToggle: false,
      search: false
    };
  },
  computed: {
    todayDate() {
      let date = new Date(Date.now());
      let arr = date.toDateString().split(" ");
      return arr[0] + ", " + arr[1] + " " + arr[2];
    },
    todayWeatherData() {
      return this.weatherData[0];
    },
    futureWeathers() {
      return this.weatherData.slice(1);
    },
    sideBarProps() {
      if (this.search) {
        return {
          class: "lg:col-span-4 xl:col-span-3"
        };
      } else {
        return {
          class: "lg:col-span-4 xl:col-span-3",
          cityName: this.city,
          weatherName: this.todayWeatherData.weather_state_name,
          fahrenheitToggle: this.fahrenheitToggle,
          temperature: this.todayWeatherData.the_temp
        };
      }
    }
  },
  async asyncData() {
    const { data } = await axios.get(
      "https://meta-weather.now.sh/api/location/1199477/"
    );
    return {
      weatherData: data.consolidated_weather,
      city: data.title
    };
  },
  methods: {
    async changeCity(woeid) {
      const { data } = await axios.get(
        `https://meta-weather.now.sh/api/location/${woeid}/`
      );

      this.weatherData = data.consolidated_weather;
      this.city = data.title;
    },
    async fetchWeatherFromCoord(latitude, longitude) {
      const { data } = await axios.get(
        `https://meta-weather.now.sh/api/location/search/?lattlong=${latitude},${longitude}`
      );
      if (data.length) {
        await this.changeCity(data[0].woeid);
      }
    },
    getUserLocation() {
      if (!navigator.geolocation) return;
      else {
        navigator.geolocation.getCurrentPosition(
          position => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            this.fetchWeatherFromCoord(lat, long);
          },
          error => {
            console.log(error);
          }
        );
      }
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
