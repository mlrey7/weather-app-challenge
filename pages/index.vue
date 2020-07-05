<template>
  <div class="container">
    <div>
      <DayWeather
        :date="'2020-07-04'"
        :weatherStateName="'Light Rain'"
        :maxTemp="36.45"
        :minTemp="30.8"
        :isFahrenheit="true"
      />
      <PressureCard :pressure="1023" />
      <VisibilityCard :visibility="14.84393641135767" />
      <WindCard :speed="11.553676273785094" :direction="'WSW'" />
      <HumidityCard :humidity="50" />
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
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
