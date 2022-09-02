// Update theme
var currentTheme = "light";
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  currentTheme = "dark";
  document.getElementById("css").href = "css/style-dark.css";
}

const themeHandler = () => {
  if (currentTheme === "light") {
    currentTheme = "dark";
    document.getElementById("css").href = "css/style-dark.css";
  } else {
    currentTheme = "light";
    document.getElementById("css").href = "css/style-light.css";
  }
};

$(document).ready(function () {
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
