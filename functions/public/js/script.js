const words = [
  "evaluating",
  "imagining",
  "inventing",
  "designing",
  "assessing",
  "vising",
  "fining",
];
const text = document.querySelector("#text");
let i = 0;

const updateText = () => {
  text.textContent = words[i];
  text.classList.remove("fade-out");
  text.classList.add("fade-in");

  setTimeout(() => {
    text.classList.remove("fade-in");
    text.classList.add("fade-out");

    setTimeout(() => {
      text.classList.remove("fade-out");
      i = (i + 1) % words.length;
      updateText();
    }, 500);
  }, 1500);
};

updateText();
