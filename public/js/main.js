// Update theme
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
if (localStorage.getItem("theme") === null) {
  localStorage.setItem("theme", prefersDarkScheme.matches ? "dark" : "light");
}
var currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
  document.getElementById("css").href = "css/style-dark.css";
} else if (currentTheme == "light") {
  document.getElementById("css").href = "css/style-light.css";
}

const themeHandler = () => {
  currentTheme = localStorage.getItem("theme");
  if (currentTheme == "dark") {
    localStorage.setItem("theme", "light");
    document.getElementById("css").href = "css/style-light.css";
  } else if (currentTheme == "light") {
    localStorage.setItem("theme", "dark");
    document.getElementById("css").href = "css/style-dark.css";
  }
};

$(document).ready(function () {
  $("#loading").hide();

  $("#fullpage").fullpage({
    // Navigation
    menu: "#menu",
    navigation: true,
    navigationTooltips: [
      "Introduction",
      "Skills",
      "Recommendations",
      "Messaging Webapp",
      "Online Photo Editor",
      "Choropleth Timelines",
    ],

    anchors: [
      "introduction",
      "skills",
      "recommendations",
      "messaging-webapp",
      "online-photo-editor",
      "choropleth-timelines",
    ],

    recordHistory: false,

    fixedElements: "#header",
    paddingTop: "70px",
  });
});
