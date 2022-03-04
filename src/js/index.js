console.log("👋🏼 from Ramesh!");

let themes = ["theme-red", "theme-grey", "theme-pink", "theme-grape", "theme-violet",
    "theme-indigo", "theme-blue", "theme-cyan", "theme-teal", "theme-green",
    "theme-lime", "theme-yellow", "theme-orange"];

let bodyEl = document.querySelector("body");
let currentTheme = bodyEl.className;
let idx = 0;

setInterval(() => {
    bodyEl.classList.remove(currentTheme);
    bodyEl.className = themes[idx];
    idx++;
    if (idx > themes.length) {
        idx = idx % themes.length;
    }
}, 10000);