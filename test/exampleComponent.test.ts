import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import sidebarMain from "~/components/sidebarMain.vue";
describe("ExampleComponent", () => {
  it("renders properly", () => {
    const wrapper = mount(sidebarMain, {});

    expect(wrapper.text()).toContain("不努力很輕鬆");
  });
});
