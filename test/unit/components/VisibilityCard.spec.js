import { shallowMount, createLocalVue } from "@vue/test-utils";
import VisibilityCard from "@/components/VisibilityCard";

const localVue = createLocalVue();

const createWrapper = visibility => {
  return shallowMount(VisibilityCard, {
    localVue,
    propsData: {
      visibility
    }
  });
};

describe("VisibilityCard.vue", () => {
  let wrapper;

  it("should render correctly", async () => {
    wrapper = createWrapper(14.84393641135767);
    expect(wrapper.find("[data-test=visibility]").text()).toBe("14,8");
    await wrapper.setProps({ visibility: 14.28 });
    expect(wrapper.find("[data-test=visibility]").text()).toBe("14,3");
  });
});
