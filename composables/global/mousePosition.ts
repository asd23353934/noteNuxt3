import { ref } from "vue";
export const useMousePosition = () => {
  const mousePosition = ref({ x: 0, y: 0 });
  const isHovering = ref(false);
  const update = (e: MouseEvent) => {
    mousePosition.value.x = e.clientX;
    mousePosition.value.y = e.clientY;
  };

  return {
    mousePosition,
    isHovering,
    update,
  };
};
