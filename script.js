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