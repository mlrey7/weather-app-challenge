<template>
  <div class>
    <div class="grid grid-cols-12 gap-8 min-h-screen">
      <div class="col-span-3 bg-blue-500 flex flex-col">
        <div class="flex justify-between p-12">
          <button class="bg-gray-700 font-sans text-base text-white py-2 px-5">Search for places</button>
          <button class="rounded-full w-10 h-10 bg-gray-700 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              class="fill-current text-white"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"
              />
            </svg>
          </button>
        </div>
        <div class="bg flex items-center justify-center">
          <img src="@/assets/images/Shower.png" alt="shower" class="weather-thumbnail" />
        </div>
        <div class="mx-auto my-5">
          <span class="font-sans text-9xl text-white font-medium">15</span>
          <span class="font-sans text-5xl text-gray-500 font-medium">°C</span>
        </div>
        <div class="mx-auto my-5 font-sans text-4xl text-gray-500 font-semibold">Shower</div>
        <div class="mx-auto mt-16">
          <span class="font-sans text-lg text-gray-600 font-medium">Today</span>
          <span class="font-sans text-lg text-gray-600 font-medium mx-2">•</span>
          <span class="font-sans text-lg text-gray-600 font-medium">Fri, 5 Jun</span>
        </div>
        <div class="mx-auto mt-8 flex">
          <span class="mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              class="text-gray-600 fill-current"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
              />
            </svg>
          </span>
          <span class="font-sans text-lg text-gray-600 font-semibold">Helsinki</span>
        </div>
      </div>
      <div class="col-start-5 col-span-7 p-10">
        <div class="flex flex-row justify-end mb-16">
          <div class="rounded-full w-10 h-10 bg-white flex items-center justify-center mr-2">
            <span class="font-sans text-lg text-blue-700 font-bold">°C</span>
          </div>
          <div class="rounded-full w-10 h-10 bg-blue-400 flex items-center justify-center">
            <span class="font-sans text-lg text-white font-bold">°F</span>
          </div>
        </div>
        <div class="flex flex-row justify-between">
          <DayWeather
            :date="'2020-07-04'"
            :weatherStateName="'Light Rain'"
            :maxTemp="36.45"
            :minTemp="30.8"
            :isFahrenheit="true"
            v-for="num in 5"
            :key="num"
          />
        </div>
        <div class="mt-8">
          <h2 class="font-sans text-2xl text-white font-bold">Today's Highlights</h2>
          <div class="grid grid-cols-2 gap-12 mt-4">
            <WindCard :speed="11.553676273785094" :direction="'WSW'" />
            <HumidityCard :humidity="50" />
            <VisibilityCard :visibility="14.84393641135767" />
            <PressureCard :pressure="1023" />
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

export default {
  components: {
    DayWeather,
    PressureCard,
    VisibilityCard,
    WindCard,
    HumidityCard
  },
  computed: {}
};
</script>

<style scoped>
.bg {
  background-image: url("../assets/images/Cloud-background.png");
  background-size: contain;
}
.weather-thumbnail {
  @apply object-cover w-full h-auto weather-thumbnail;
  max-width: 200px;
}
</style>
