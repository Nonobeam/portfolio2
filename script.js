window.addEventListener('scroll', function () {
    var title = document.querySelector('.hello-title');
    var des = document.querySelector('.short-des');
    var scrollPosition = window.scrollY;

    // Adjust opacity based on scroll position
    if (scrollPosition > 0) {
        var opacity = 1 - (scrollPosition / 700);
        title.style.opacity = opacity;
        des.style.opacity = opacity;
    } else {
        title.style.opacity = 1;
    }
});


document.addEventListener('mousemove', function(e) {
    var circle = document.getElementById('circle');
    circle.style.left = e.pageX - 20 + 'px';
    circle.style.top = e.pageY - 20 + 'px';
});


function changeCircleColor(color) {
    var circle = document.getElementById('circle');
    circle.style.transition = 'width 0.2s ease, height 0.2s ease, background-color 0.2s ease';
    circle.style.width = '80px';
    circle.style.height = '80px';
    circle.style.borderRadius = '50%'; // Set border radius to create a circle
    circle.style.backgroundColor = color; // Set background color to transparent
    circle.style.backgroundImage = 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'10\' height=\'10\' viewBox=\'0 0 10 10\' fill=\'none\'%3E%3Ccircle cx=\'5\' cy=\'5\' r=\'5\' fill=\'black\'/%3E%3Cpath d=\'M7.62 2.8C7.62 2.52386 7.39615 2.3 7.12 2.3H2.62C2.34386 2.3 2.12 2.52386 2.12 2.8C2.12 3.07614 2.34386 3.3 2.62 3.3H6.62V7.3C6.62 7.57614 6.84386 7.8 7.12 7.8C7.39615 7.8 7.62 7.57614 7.62 7.3V2.8ZM2.51356 8.11356L7.47356 3.15356L6.76645 2.44645L1.80645 7.40645L2.51356 8.11356Z\' fill=\'white\'/%3E%3C/svg%3E")'; // Set SVG as background image
    circle.style.backgroundRepeat = 'no-repeat'; // Prevent background image from repeating
    circle.style.backgroundSize = 'contain'; // Make sure the background image fits inside the circle
    circle.style.backgroundPosition = 'center'; // Center the background image
}

function changeCircleColorBack() {
    var circle = document.getElementById('circle');
    circle.style.backgroundColor = 'transparent';
    circle.style.width = '40px';
    circle.style.height = '40px';
    circle.style.background = 'none';
}
  
