window.addEventListener("scroll", () => {
  const hero = document.getElementById("hero");
  const about = document.getElementById("about");
  const skills = document.getElementById("skills");
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  const aboutTop = about.offsetTop;
  const skillsTop = skills.offsetTop;

  const green = [51, 75, 53];      
  const beige = [246, 238, 225];   
  const darkGreen = [30, 50, 35];  

  // hero → about
  if (scrollY < aboutTop - windowHeight) {
    document.body.style.backgroundColor = `rgb(${green.join(",")})`;
  } 
  else if (scrollY >= aboutTop - windowHeight && scrollY < aboutTop) {
    const progress = (scrollY - (aboutTop - windowHeight)) / windowHeight;
    const r = Math.round(green[0] + (beige[0] - green[0]) * progress);
    const g = Math.round(green[1] + (beige[1] - green[1]) * progress);
    const b = Math.round(green[2] + (beige[2] - green[2]) * progress);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  } 

  // about → skills
  else if (scrollY >= skillsTop - windowHeight && scrollY < skillsTop) {
    const progress = (scrollY - (skillsTop - windowHeight)) / windowHeight;
    const r = Math.round(beige[0] + (darkGreen[0] - beige[0]) * progress);
    const g = Math.round(beige[1] + (darkGreen[1] - beige[1]) * progress);
    const b = Math.round(beige[2] + (darkGreen[2] - beige[2]) * progress);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  } 
  else if (scrollY >= skillsTop) {
    document.body.style.backgroundColor = `rgb(${darkGreen.join(",")})`;
  } 
  else {
    document.body.style.backgroundColor = `rgb(${beige.join(",")})`;
  }
});

window.addEventListener('scroll', () => {
  const texts = document.querySelectorAll('.bg-text');
  const scrollY = window.scrollY;

  texts.forEach((text, i) => {
    const speed = (i + 1) * 0.15;
    text.style.transform = `scale(${1 + scrollY * 0.001 * speed})`;
    text.style.opacity = `${1 - scrollY * 0.002}`;
  });
});

const projectCards = document.querySelectorAll('.project-media');


//projects
document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll(".project-media");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.6,          
      rootMargin: "0px 0px -10% 0px"
    }
  );

  projects.forEach((project) => observer.observe(project));
});

window.addEventListener("load", () => {
  const wrapper = document.querySelector(".page-wrapper");
  if (wrapper) wrapper.classList.add("loaded");
});




