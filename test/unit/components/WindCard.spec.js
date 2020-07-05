import { shallowMount, createLocalVue } from "@vue/test-utils";
import WindCard from "@/components/WindCard";

const localVue = createLocalVue();

const createWrapper = ({ speed, direction }) => {
  return shallowMount(WindCard, {
    localVue,
    propsData: {
      speed,
      direction
    }
  });
};

describe("WindCard.vue", () => {
  let wrapper;

  it("should render correctly", async () => {
    wrapper = createWrapper({ speed: 11.553676273785094, direction: "WSW" });
    expect(wrapper.find("[data-test=speed]").text()).toBe("12");
    expect(wrapper.find("[data-test=direction]").text()).toBe("WSW");
  });
});
