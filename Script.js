const developerBios = {
    'John Doe': {
        bio: "John Doe is a senior front-end developer with 10 years of experience in web development. He specializes in React and Angular.",
        img: "john-doe.jpg",  // Example image path, replace with actual
        role: "Senior Frontend Developer"
    },
    'Jane Smith': {
        bio: "Jane Smith is a full-stack developer who loves building robust back-end services and scalable applications.",
        img: "jane-smith.jpg",  // Example image path, replace with actual
        role: "Full Stack Developer"
    },
    'David Brown': {
        bio: "David Brown is a DevOps engineer with a passion for automation and cloud technologies.",
        img: "david-brown.jpg",  // Example image path, replace with actual
        role: "DevOps Engineer"
    },
    'Emily White': {
        bio: "Emily White is a creative UX/UI designer with a knack for improving user experience through innovative design.",
        img: "emily-white.jpg",  // Example image path, replace with actual
        role: "UX/UI Designer"
    },
    'Michael Green': {
        bio: "Michael Green is a mobile app developer with expertise in both Android and iOS platforms.",
        img: "michael-green.jpg",  // Example image path, replace with actual
        role: "Mobile App Developer"
    }
};

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

function hideDetails() {
    const overlay = document.getElementById('developer-details');
    const content = document.querySelector('.developer-details-content');
    
    content.classList.remove('show');
    setTimeout(() => overlay.classList.remove('show'), 500);
}
