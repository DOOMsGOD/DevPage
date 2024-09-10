// Developer Info
const developerBios = {
    'Krishna Khurana': {
        bio: "Krishna Khurana is a skilled Backend & UI Developer specializing in seamless user experiences.",
        img: "developer1.jpg",
        role: "Backend & UI Developer",
        folio: "https://krishna-khurana-portfolio.com"
    },
    'Taranpreet Singh': {
        bio: "Taranpreet Singh is responsible for the developer page and excels in UI development.",
        img: "developer2.jpg",
        role: "Developer Page & UI Developer",
        folio: "https://taranpreet-singh-portfolio.com"
    },
    'Daksh Gulati': {
        bio: "Daksh Gulati has a keen eye for design and is known for his innovative UI and graphics work.",
        img: "developer3.jpg",
        role: "UI & Graphics Designer",
        folio: "https://daksh-gulati-portfolio.com"
    },
    'Dev Gulati': {
        bio: "Dev Gulati is a frontend expert who brings web interfaces to life.",
        img: "developer4.jpg",
        role: "Front End Developer",
        folio: "https://dev-gulati-portfolio.com"
    },
    'Mehak': {
        bio: "Mehak excels in quality assurance, ensuring smooth testing for all projects.",
        img: "developer5.jpg",
        role: "Testing",
        folio: "https://mehak-portfolio.com"
    }
};

// To show the details of the developer
function showDetails(element) {
    const name = element.querySelector('h3').textContent;
    const developer = developerBios[name];

    if (developer) {
        document.getElementById('developer-img').src = developer.img;
        document.getElementById('developer-name').textContent = name;
        document.getElementById('developer-role').textContent = developer.role;
        document.getElementById('developer-bio').textContent = developer.bio;
        document.getElementById('developer-folio').innerHTML = `<a href="${developer.folio}" target="_blank">Portfolio</a>`;
    } else {
        document.getElementById('developer-img').src = "";
        document.getElementById('developer-name').textContent = name;
        document.getElementById('developer-role').textContent = "No role information available.";
        document.getElementById('developer-bio').textContent = "No bio available.";
        document.getElementById('developer-folio').textContent = "";
    }

    const overlay = document.getElementById('developer-details');
    const content = document.querySelector('.developer-details-content');

    overlay.classList.add('show');
    setTimeout(() => content.classList.add('show'), 100);
}

// To hide the details of the developer
function hideDetails() {
    const overlay = document.getElementById('developer-details');
    const content = document.querySelector('.developer-details-content');

    content.classList.remove('show');
    setTimeout(() => overlay.classList.remove('show'), 500);
}
