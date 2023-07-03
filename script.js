const portfolio = document.getElementById('portfolio');

const projectData = [
  {
    id: 1,
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    nation: ['CANOPY', 'Back End Dev', 2015],
    technologies: ['html', 'css', 'javascript'],
    image: 'images/nature.svg',
    link_live: '',
    link_source: '',
    button_text: 'See project',
  },
  {
    id: 2,
    name: 'Multi-Post Stories',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    nation: ['FACEBOOK', 'Full Stack Dev', 2015],
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    image: 'images/professional.svg',
    link_live: '',
    link_source: '',
    button_text: 'See project',
  },
  {
    id: 3,
    name: 'Facebook 360',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    nation: ['FACEBOOK', 'Full Stack Dev', 2015],
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    image: 'images/Facebook.svg',
    link_live: '',
    link_source: '',
    button_text: 'See project',
  },
  {

    id: 4,
    name: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    nation: ['Uber', 'Lead developer', 2018],
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    image: 'images/Avaliable.svg',
    link_live: '',
    link_source: '',
    button_text: 'See project',
  },

];

const child = projectData.map((project, index) => (
  `<div class="project-card">
   <div class="project-image">
      <img src="${project.image}" alt="">
   </div>
   <div class="project-details">
      <h3>${project.name}</h3>
      <ul>
         <li>
            ${project.nation[0]}
         </li>
         <li>
            <img src="images/dot.svg" alt="">
         </li>
         <li>
         ${project.nation[1]} 
         </li>
      <li>
         <img src="images/dot.svg" alt="">
      </li>
      <li>
      ${project.nation[2]}
      </li>
      </ul>
      <p>
         ${project.description}
      </p>
      <ul>
         <li>
            ${project.technologies[0]}
         </li>
         <li>
         ${project.technologies[1]}
         </li>
         <li>
         ${project.technologies[2]}
         </li>
      </ul>
      <button class="see-project-btn" id=${index}>
      ${project.button_text}
      </button>
   </div>
   </div>`
)).join('');

portfolio.innerHTML = child;

/*
Popup Window function lies here
*/

const popupWindow = projectData.map((project) => (
  `<div class="mobile-modal-content" id="popup">
  <div class="mobile-modal-header">
    <div class="close-mobile-modal">
      <button type="button" onclick="closePopup()" class="close">&#10005;</button>
    </div>
    <h3 class="Pop-mobile-topic">${project.name}</h3>
  </div>
  <nav class="pop-up-list">
    <ul class="pop-mobile-items">
      <li class="mobile-canopy">${project.nation[0]}</li>
      <li class="mobile-back-end">${project.nation[1]}</li>
      <li class="mobile-year">${project.nation[2]}</li>
    </ul>
  </nav>
  <img src=${project.image} alt="nature" class="pop-up-img" id="mobile-popup-img" />
  <div class="pop-mobile-container">
    <p class="pop-mobile-text">${project.description}</p>
    <div class="pop-up-mobile-tech">
      <ul class="pop-mobile-tech">
      <li>${project.technologies[0]}</li>
      <li>${project.technologies[1]}</li>
      <li>${project.technologies[2]}</li>
      <li>${project.technologies[3]}</li>
      </ul>
      <div class="pop-up-button">
        <button class="see-live">
          See live
          <img
            src="images/icon_image/live-icon.png"
            width="20"
            height="20"
          />
        </button>
        <button class="see-source">
          See source
          <img
            src="images/icon_image/github-source.png"
            width="20"
            height="20"
          />
        </button>
      </div>
    </div>
  </div>
</div>`
));

const popup = document.querySelector('.mobile-project-modal');
const closeBtn = document.querySelector('.close');

popup.innerHTML = popupWindow;

// Display Popup
function closePopup() {
  popup.style.display = 'none';
}


function displayPopup() {
  if (popup.style.display === 'none') {
    const x = Number(this.id);
    popup.innerHTML = popupWindow[x];
    popup.style.display = 'block';
  } else {
    popup.style.display = 'none';
  }
}

displayPopup();

document.getElementById('0').onclick = displayPopup;
document.getElementById('1').onclick = displayPopup;
document.getElementById('2').onclick = displayPopup;
document.getElementById('3').onclick = displayPopup;
