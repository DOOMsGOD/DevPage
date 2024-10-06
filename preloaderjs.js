// Preloader logic
window.addEventListener('load', function()
{
    setTimeout(function() {
        document.body.classList.add('loaded');
    }, 5000);
});