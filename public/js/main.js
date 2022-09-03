// Update theme
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
if (localStorage.getItem("theme") === null) {
  localStorage.setItem("theme", prefersDarkScheme.matches ? "dark" : "light");
}
var currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
  document.getElementById("css").href = "css/dark.css";
} else if (currentTheme == "light") {
  document.getElementById("css").href = "css/light.css";
}

const themeHandler = () => {
  currentTheme = localStorage.getItem("theme");
  if (currentTheme == "dark") {
    localStorage.setItem("theme", "light");
    document.getElementById("css").href = "css/light.css";
  } else if (currentTheme == "light") {
    localStorage.setItem("theme", "dark");
    document.getElementById("css").href = "css/dark.css";
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
      "Choropleth Timelines",
      "Messaging Webapp",
      "Online Photo Editor",
    ],

    anchors: [
      "introduction",
      "skills",
      "recommendations",
      "choropleth-timelines",
      "messaging-webapp",
      "online-photo-editor",
    ],

    recordHistory: false,

    fixedElements: "#header",
    paddingTop: "70px",

    onLeave: function (index, nextIndex, direction) {
      if (index === 3) {
        $(`#recommendations-video`).get(0).currentTime = 0;
      } else if (index === 4) {
        $(`#choropleth-timelines-video`).get(0).currentTime = 0;
      } else if (index === 5) {
        $(`#messaging-webapp-video`).get(0).currentTime = 0;
      } else if (index === 6) {
        $(`#online-photo-editor-video`).get(0).currentTime = 0;
      }
    },
  });
});
