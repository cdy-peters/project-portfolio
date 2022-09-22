// Update theme
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
if (localStorage.getItem("theme") === null) {
  localStorage.setItem("theme", prefersDarkScheme.matches ? "dark" : "light");
}
var currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
  document.getElementById("css").href = "css/dark.css";
  document
    .getElementById("theme-toggle")
    .getElementsByTagName("i")[0].classList = "bi bi-moon-fill";
} else if (currentTheme == "light") {
  document.getElementById("css").href = "css/light.css";
  document
    .getElementById("theme-toggle")
    .getElementsByTagName("i")[0].classList = "bi bi-sun-fill";
}

const themeHandler = () => {
  currentTheme = localStorage.getItem("theme");
  if (currentTheme == "dark") {
    localStorage.setItem("theme", "light");
    document.getElementById("css").href = "css/light.css";
    document
      .getElementById("theme-toggle")
      .getElementsByTagName("i")[0].classList = "bi bi-sun-fill";
  } else if (currentTheme == "light") {
    localStorage.setItem("theme", "dark");
    document.getElementById("css").href = "css/dark.css";
    document
      .getElementById("theme-toggle")
      .getElementsByTagName("i")[0].classList = "bi bi-moon-fill";
  }
};

const fullscreenHandler = (section) => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.getElementById(`${section}-video`).requestFullscreen();
  }
};

$(document).ready(function () {
  // Remove fullscreen-button on ios devices
  if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
    $(".fullscreen-button").remove();
  }

  $("#loading").hide();

  $("#fullpage").fullpage({
    // Navigation
    menu: "#menu",
    navigation: true,
    navigationTooltips: [
      "Landing",
      "Who Am I?",
      "Experience",
      "Recommendations",
      "Choropleth Timelines",
      "Messaging Webapp",
      "Online Photo Editor",
    ],

    anchors: [
      "landing",
      "who-am-i",
      "experience",
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
