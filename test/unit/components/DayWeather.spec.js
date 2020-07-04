import { shallowMount, createLocalVue } from "@vue/test-utils";
import DayWeather from "@/components/DayWeather";

const localVue = createLocalVue();

const createWrapper = isFahrenheit => {
  return shallowMount(DayWeather, {
    localVue,
    propsData: {
      date: "2020-07-04",
      weatherStateName: "Light Rain",
      minTemp: 30.8,
      maxTemp: 36.45,
      isFahrenheit
    }
  });
};

describe("DayWeather.vue", () => {
  let wrapper;
  it("should render correctly", () => {
    wrapper = createWrapper(false);

    expect(wrapper.find("[data-test=date]").text()).toBe("Sat, Jul 04");
    expect(wrapper.find("[data-test=mintemp]").text()).toBe("31°C");
    expect(wrapper.find("[data-test=maxtemp]").text()).toBe("36°C");
  });

  it("should render fahrenheit mode correctly", () => {
    wrapper = createWrapper(true);

    expect(wrapper.find("[data-test=date]").text()).toBe("Sat, Jul 04");
    expect(wrapper.find("[data-test=mintemp]").text()).toBe("87°F");
    expect(wrapper.find("[data-test=maxtemp]").text()).toBe("98°F");
  });
});
