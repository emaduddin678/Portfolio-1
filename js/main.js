// console.log("Hello");
// ================= MENU SHOW Y HIDDEN ===============
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// ===== MENU SHOW ======
// validate if constant exist
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// ======= MENU HIDDEN ======
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// ========= REMOVE MENU MOBILE ==========
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  // When we click on each nav_link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// ================== SKILLS ==============
const skillsContent = document.getElementsByClassName("skills_content");
const skillsHeader = document.querySelectorAll(".skills_header");
// skillsContent is a Array[1,2,3];
// skills_header is a Array[1,2,3] of header under content 

function toggleSkills() {
  let itemClass = this.parentNode.className;

  // console.log(itemClass);
  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills_content skills_close";
  }
  if (itemClass === "skills_content skills_close") {
    this.parentNode.className = "skills_content skills_open";
  }
}

skillsHeader.forEach((e) => {
  e.addEventListener("click", toggleSkills);
});

// ======== QUALIFICATION TABS ==========
const tabs = document.querySelectorAll("[data-target]");
console.log(tabs);
const tabContents = document.querySelectorAll("[data-content]");
console.log(tabContents);

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    console.log(target);
    // console.log(tabContents[0] === target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification_active");
    });
    target.classList.add("qualification_active");

    tabs.forEach(tab => {
      tab.classList.remove("qualification_active");
    })
    tab.classList.add("qualification_active");
  });
});
