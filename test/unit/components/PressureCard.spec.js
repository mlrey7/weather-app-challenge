import { shallowMount, createLocalVue } from "@vue/test-utils";
import PressureCard from "@/components/PressureCard";

const localVue = createLocalVue();

const createWrapper = pressure => {
  return shallowMount(PressureCard, {
    localVue,
    propsData: {
      pressure
    }
  });
};

describe("PressureCard.vue", () => {
  let wrapper;

  it("should render correctly", async () => {
    wrapper = createWrapper(998);
    expect(wrapper.find("[data-test=pressure]").text()).toBe("998");
    await wrapper.setProps({ pressure: 1023.25 });
    expect(wrapper.find("[data-test=pressure]").text()).toBe("1023");
  });
});
