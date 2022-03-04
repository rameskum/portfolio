console.log("👋🏼 from Ramesh!");

let themes = ["theme-red", "theme-pink", "theme-grape", "theme-violet",
    "theme-indigo", "theme-blue", "theme-cyan", "theme-teal", "theme-green",
    "theme-lime", "theme-yellow", "theme-orange", "theme-grey"];

let bodyEl = document.querySelector("body");
let currentTheme = bodyEl.className;
let idx = 1;

setInterval(() => {
    bodyEl.classList.remove(currentTheme);
    bodyEl.className = themes[idx];
    idx = (idx + 1) % themes.length;
}, 5000);