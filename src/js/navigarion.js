const link = document.querySelector('.right-column__nav-list');
const projectButton = document.querySelector('#projectButton');
const experienceButton = document.querySelector('#experienceButton');
const educationButton = document.querySelector('#educationButton');
const projectList = document.querySelector('.projects__list');
const experienceList = document.querySelector('.experience__list');
const educationList = document.querySelector('.education__list');

link.addEventListener("click", function(e){ 
  e.preventDefault ();

  const target = e.target;

  if(target.contains(document.getElementById('projectButton'))) { 
    projectButton.classList.add('link-active');
    projectList.classList.add('list-active');
    educationButton.classList.remove('link-active');
    experienceButton.classList.remove('link-active');
    experienceList.classList.remove('list-active');
    educationList.classList.remove('list-active');
  }
  else if (target.contains(document.getElementById('experienceButton'))) {
    experienceButton.classList.add('link-active');
    experienceList.classList.add('list-active');
    educationButton.classList.remove('link-active');
    projectButton.classList.remove('link-active');
    projectList.classList.remove('list-active');
    educationList.classList.remove('list-active');
  }
  else {
    educationButton.classList.add('link-active');
    educationList.classList.add('list-active');
    experienceButton.classList.remove('link-active');
    projectButton.classList.remove('link-active');
    projectList.classList.remove('list-active');
    experienceList.classList.remove('list-active');
  }
});