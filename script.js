const fullName = "Muhammad Rizki Rahmadani";
const city = "Aceh";
const isRemoteReady = true;

const skills = [
  "Semantic HTML",
  "Modern CSS",
  "Clean Architecture"
];

const semanticHtml = {
  title: "Learning",
  category: "Skill",
  year: 2026
};

function introduce(name) {
  return `Hi, I am ${name}, a front-end developer based in ${city}.`;
}

console.log(fullName);
console.log(city);
console.log(skills[0]);
console.log(semanticHtml);
console.log(introduce("Muhammad Rizki Rahmadani"));
const footerText = document.querySelector("footer p");
console.log(footerText.textContent);
footerText.textContent = fullName;

const themeBtn= document.querySelector("#theme-toggle")

themeBtn.addEventListener("click", function (){
document.body.classList.toggle("dark-mode");

if (document.body.classList.contains("dark-mode")){
  themeBtn.textContent="Light Mode";
}
else
{
  themeBtn.textContent="Dark Mode";
}
});