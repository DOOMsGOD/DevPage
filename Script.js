function showDetails(element) {
    const name = element.querySelector('h3').textContent;
    const role = element.querySelector('p').textContent;
    const imgSrc = element.querySelector('img').src;
    const bio = "Detailed bio about " + name + " will go here."; // Replace with actual bio

    document.getElementById('developer-img').src = imgSrc;
    document.getElementById('developer-name').textContent = name;
    document.getElementById('developer-role').textContent = role;
    document.getElementById('developer-bio').textContent = bio;

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
