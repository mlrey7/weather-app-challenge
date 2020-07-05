import { shallowMount, createLocalVue } from "@vue/test-utils";
import HumidityCard from "@/components/HumidityCard";

const localVue = createLocalVue();

const createWrapper = humidity => {
  return shallowMount(HumidityCard, {
    localVue,
    propsData: {
      humidity
    }
  });
};

describe("HumidityCard.vue", () => {
  let wrapper;

  it("should render correctly", async () => {
    wrapper = createWrapper(74);
    expect(wrapper.find("[data-test=humidity]").text()).toBe("74");
  });
});
