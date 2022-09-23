// Update theme
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
if (localStorage.getItem("theme") === null) {
  localStorage.setItem("theme", prefersDarkScheme.matches ? "dark" : "light");
}
var currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
  $("#css").attr('href', "css/dark.min.css");
  $("#theme-toggle i").addClass("bi-moon-fill").removeClass("bi-sun-fill");

} else if (currentTheme == "light") {
  $("#css").attr('href', "css/light.min.css");
  $("#theme-toggle i").addClass("bi-sun-fill").removeClass("bi-moon-fill");
}

const themeHandler = () => {
  currentTheme = localStorage.getItem("theme");
  if (currentTheme == "dark") {
    localStorage.setItem("theme", "light");
    $("#css").attr('href', "css/light.min.css");
    $("#theme-toggle i").addClass("bi-sun-fill").removeClass("bi-moon-fill");
  } else if (currentTheme == "light") {
    localStorage.setItem("theme", "dark");
    $("#css").attr('href', "css/dark.min.css");
    $("#theme-toggle i").addClass("bi-moon-fill").removeClass("bi-sun-fill");
  }
};

const fullscreenHandler = (section) => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.getElementById(`${section}-video`).requestFullscreen();
  }
};

const viewWork = (e) => {
  e.preventDefault();
  $.fn.fullpage.moveTo(4);
}

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
