// Developer Info
const developerBios = {
    'Krishna Khurana': {
        bio: "Krishna Khurana is a skilled backend & UI developer with expertise in various programming languages and user interface designs.",
        img: "developer1.jpg",
        role: "Backend & UI Developer"
    },
    'Taranpreet Singh': {
        bio: "Taranpreet Singh is responsible for the Developer Page and is also proficient in UI development.",
        img: "developer2.jpg",
        role: "Developer Page & UI Developer"
    },
    'Daksh Gulati': {
        bio: "Daksh Gulati is a graphics designer who brings UI elements to life with creative designs.",
        img: "developer3.jpg", 
        role: "Graphics & UI Designer"
    },
    'Dev Gulati': {
        bio: "Dev Gulati is a passionate frontend developer with a keen eye for building responsive websites.",
        img: "developer4.jpg",  
        role: "Frontend Developer"
    },
    'Mehak': {
        bio: "Mehak ensures the quality and functionality of the project through meticulous testing.",
        img: "developer5.jpg",  
        role: "Testing"
    }
};

// To Show the details of Developer
function showDetails(element) {
    const name = element.querySelector('h3').textContent;
    const role = element.querySelector('p').textContent;
    const imgSrc = element.querySelector('img').src;
    
    // Check if the developer has a stored bio
    const developer = developerBios[name];
    
    if (developer) {
        document.getElementById('developer-img').src = imgSrc;
        document.getElementById('developer-name').textContent = name;
        document.getElementById('developer-role').textContent = developer.role;
        document.getElementById('developer-bio').textContent = developer.bio;
    } else {
        document.getElementById('developer-img').src = imgSrc;
        document.getElementById('developer-name').textContent = name;
        document.getElementById('developer-role').textContent = role;
        document.getElementById('developer-bio').textContent = "No bio available.";
    }

    const overlay = document.getElementById('developer-details');
    const content = document.querySelector('.developer-details-content');
    
    overlay.classList.add('show');
    setTimeout(() => content.classList.add('show'), 100);
}

// To Hide the details of Developer 
function hideDetails() {
    const overlay = document.getElementById('developer-details');
    const content = document.querySelector('.developer-details-content');
    
    content.classList.remove('show');
    setTimeout(() => overlay.classList.remove('show'), 500);
}
