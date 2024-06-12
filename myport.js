const projects = [
    {
        name: 'Flavourfiesta Bites',
        description: "This was inspired by a restaurant's page with the aim of building a landing page.",
        stack: ['html5', 'css3-alt', 'js'],
        image: 'flavorfiesta.PNG',
        link: 'https://flavorfiesta.vercel.app/',
        github: 'https://github.com/chivicks-hazard/landing-page'
    },
    {
        name: 'My Music Player',
        description: "This is a Web-based music player that utilizes the power of vanilla JavaScript",
        stack: ['html5', 'css3-alt', 'js'],
        image: 'musicplayer.PNG',
        link: 'https://music-player-eta-topaz.vercel.app/',
        github: 'https://github.com/chivicks-hazard/music-player'
    }
];

const carouselItems = document.querySelectorAll('.carousel-item[data-bs-toggle="modal"]');
const modalName = document.querySelector('.modal-title');
const modalText= document.querySelector('.modal-body p');
const modalPicture = document.querySelector('.modal-body img');
const modalGithub = document.querySelector('.modal-footer .fa-github').parentElement;
const modalLink = document.querySelector('.modal-footer .fa-arrow-up-right-from-square').parentElement;
const modalStackContainer = document.querySelector('.modal-footer .lang');

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

carouselItems.forEach((carouselItem, index) => {
    carouselItem.addEventListener('click', (e) => {
        modalName.textContent = projects[index].name;
        modalText.textContent = projects[index].description;
        modalPicture.src = `images/${projects[index].image}`;
        modalPicture.alt = projects[index].name;
        modalGithub.href = projects[index].github;
        modalLink.href = projects[index].link;

        modalStackContainer.innerHTML = '';

        projects[index].stack.forEach(stackItem => {
            const iconElement = document.createElement('i');
            iconElement.classList.add('fab', `fa-${stackItem}`, 'd-inline-block', 'mx-1', 'fa-1x');
            modalStackContainer.appendChild(iconElement);
        });
    });
});

const date = document.getElementById('date');

function changeYear() {
    var year = new Date().getFullYear();
    date.textContent = year;
}

changeYear();