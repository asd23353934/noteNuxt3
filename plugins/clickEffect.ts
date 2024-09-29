export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("click-effect", {
    mounted(el, binding) {
      el.addEventListener("click", (e: MouseEvent) => {
        const effect = document.createElement("div");
        effect.innerText = binding.value;
        effect.style.position = "fixed";
        effect.style.left = `${e.clientX}px`;
        effect.style.top = `${e.clientY}px`;
        effect.style.pointerEvents = "none";
        effect.style.animation = "moveUp 1s ease-out";
        effect.style.opacity = "0";
        effect.style.color = "#4a5568";
        effect.style.fontWeight = "bold";
        effect.style.zIndex = "100000";
        document.body.appendChild(effect);

        setTimeout(() => {
          document.body.removeChild(effect);
        }, 100000);
      });
    },
  });
});
