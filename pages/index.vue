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
    </div>
  </div>
</template>

<script>
import DayWeather from "@/components/DayWeather";
import PressureCard from "@/components/PressureCard";
export default {
  components: {
    DayWeather,
    PressureCard
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
