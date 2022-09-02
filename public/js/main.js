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
