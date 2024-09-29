export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("ripple", {
    mounted(el, binding) {
      el.style.position = "relative";
      el.style.overflow = "hidden";

      const rippleColor = binding.value || "rgba(255, 255, 255, 0.35)";

      el.addEventListener("click", (e: any) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const size = Math.max(rect.width, rect.height) * 2;

        const ripple = document.createElement("span");
        ripple.style.position = "absolute";
        ripple.style.left = `${x - size / 2}px`;
        ripple.style.top = `${y - size / 2}px`;
        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;
        ripple.style.borderRadius = "50%";
        ripple.style.backgroundColor = rippleColor;
        ripple.style.transform = "scale(0)";
        ripple.style.animation = "ripple 0.6s linear";
        ripple.style.pointerEvents = "none";

        el.appendChild(ripple);

        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    },
  });
});
