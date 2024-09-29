/** @type {import('tailwindcss').Config} */
export default {
  tailwindcss: {
    //指定 Tailwind CSS 的主入口文件路徑
    cssPath: '~/assets/css/tailwind.css',
    //指定 Tailwind 配置文件的路徑
    configPath: 'tailwind.config',
    //是否在客戶端暴露 Tailwind 配置。設置為 false 可以減少打包大小
    //如果 exposeConfig 為 true，這決定了暴露配置的深度級別
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    //指定 Tailwind 樣式在最終 CSS 中的注入位置。'first' 確保它們優先級最高
    injectPosition: 'first',
    //啟用 Tailwind 配置查看器，方便調試
    viewer: true,
  },
  //指定暗黑模式的激活方式。"class" 表示通過添加類名來切換暗黑模式
  darkMode: "class",
  //指定 Tailwind 應該掃描哪些文件來生成必要的樣式
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    `nuxt.config.{js,ts}`,
  ],
  theme: {
    extend: {
      colors: {
        themeMain: "var(--main)",
        themeReverse: "var(--reverse)",
        themeError: "var(--error)",
        themeSuccess: "var(--success)",
        themeWarning: "var(--warning)",
        themeHint: "var(--hint)",
      },
      animation: {
        "theme-LeftToRightInfinite" : "move_left_right 1s linear infinite",
        "theme-RightToCenter" :"move_right_center 0.5s ease-in",
        "theme-Up" :"move_up 0.5s ease-in",
      },
      keyframes: {
        move: {
          left_right: {
            "0%": { transform: "translateX(-100%)" },
            "100%": { transform: "translateX(100%)" },
          },
          right_center: {
            "0%": { transform: "translateX(100%)" },
            "100%": { transform: "translateX(0)" },
          },
          up: {
            "0%": { transform: "translateY(0)" },
            "100%": { transform: "translateY(-100%)" },
          }
        }
   
      }
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
 
}

