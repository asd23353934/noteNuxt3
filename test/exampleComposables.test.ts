import { describe, it, expect } from "vitest";
import { useMousePosition } from "~/composables/global/mousePosition";
import { mount } from "@vue/test-utils";

describe("useMousePosition", () => {
  it("returns the expected value", async () => {
    const wrapper = mount({
      template: "<div>Test</div>",
      setup() {
        const { mousePosition } = useMousePosition();

        return { x: mousePosition.value.x, y: mousePosition.value.y };
      },
    });

    expect(wrapper.vm.x).toBe(0);
    expect(wrapper.vm.y).toBe(0);
  });
});
