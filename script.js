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
footerText.textContent = `© 2026 ${fullName}. All rights reserved.`;


const projects = [
  {title:"POS Cashier App",description : "A digital point-of-sale application designed to streamline sales transactions, manage product records, calculate payments, and monitor daily sales activities efficiently.", tag:"Point of Sale"},
  {title:"Regional Fiscal Dashboard",description : "An interactive dashboard designed to visualize and analyze regional financial data, including local revenue, regional expenditures, and fiscal indicators to support data-driven decision-making.", tag:"Data Analytics"},
  {title:"Personal Portfolio",description : "A personal website showcasing professional profiles, skills, experience, and projects through a modern, responsive, and user-friendly interface.", tag:"Web Development"},
  {title:"Task Tracker UI",description : "A task management interface that helps users organize daily activities, set priorities, track progress, and manage tasks through a clean and intuitive design.", tag:"UI/UX Design"},
  {title:"Wedding Invitation Site",description : "An elegant and responsive digital wedding invitation website designed to share special moments, event details, and RSVP information.", tag:"Web Design"}
];
console.log(projects[3].title);

const projectGrid = document.querySelector(".project-grid");
console.log(projectGrid);
if (projectGrid){
  projectGrid.innerHTML="";


for (let i = 0;
i< projects.length; i++){
  console.log(projects[i].title);
  projectGrid.innerHTML+= 
  `<article class="project-card">
    <h3>${projects[i].title}</h3>
    <p>${projects[i].description}</p>
    <div class="tech-tags">
    <span> ${projects[i].tag}</span>
    </div>
        </article>`;
 }
}

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