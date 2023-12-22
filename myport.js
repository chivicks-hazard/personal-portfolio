const lightNDarkBtn = document.getElementById('lightndark');
const lndIcon = document.querySelector('#lightndark .far');
const profilePic = document.querySelector('.profile_pic');
const body = document.body;
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

if (body.classList.contains('light')) {
    profilePic.src = 'images/profile_pic_1.jpg';
}

if (prefersDarkScheme.matches) {
    document.body.classList.remove("light");
    document.body.classList.add("dark");

    lndIcon.classList.remove("fa-sun");
    lndIcon.classList.add("fa-moon");

    profilePic.src = 'images/profile_pic_2.jpg';
} else {
    document.body.classList.remove("dark");
    document.body.classList.add("light");

    lndIcon.classList.remove("fa-moon");
    lndIcon.classList.add("fa-sun");

    profilePic.src = 'images/profile_pic_1.jpg';
}

lightNDarkBtn.addEventListener('click', () => {
    lndIcon.classList.toggle('fa-sun');
    lndIcon.classList.toggle('fa-moon');

    body.classList.toggle('light');
    body.classList.toggle('dark');

    if (!body.classList.contains('light')) {
        profilePic.src = 'images/profile_pic_2.jpg';
    } else {
        profilePic.src = 'images/profile_pic_1.jpg';
    }

})

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

const date = document.getElementById('date');

function changeYear() {
    var year = new Date().getFullYear();
    date.textContent = year;
}

changeYear();

const small = window.matchMedia('only screen and (min-width : 320px) and (max-width: 480px)');
const medium = window.matchMedia('only screen and (min-width : 481px) and (max-width : 768px)');
const tablet = window.matchMedia('only screen and (min-width : 769px) and (max-width : 1023px)');
const PC = window.matchMedia('only screen and (min-width : 1024px)');
const TV = window.matchMedia('only screen and (min-width : 1080px)');

window.addEventListener('resize', () => {
    if (small.matches || medium.matches || tablet.matches || PC.matches || TV.matches) {
        const htmlElement = document.documentElement;
    
        // Get the computed style of the HTML element
        const computedStyle = window.getComputedStyle(htmlElement);
    
        // Get the font size in pixels
        const fontSize = computedStyle.getPropertyValue('font-size');
    
        console.log(fontSize);
    }
})