// Function to generate random hearts using the uploaded image
function createHeart() {
    const heart = document.createElement('img');
    heart.src = 'https://assets.onecompiler.app/42vcmw4jh/42vcmw6nb/png-transparent-heart-red-heart-thumbnail.png'; // Replace with the correct path to the uploaded image
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's'; // Random duration between 2s and 5s
    const size = Math.random() * 30 + 15; // Random size between 15px and 45px
    heart.style.width = size + 'px';
    heart.style.height = 'auto';

    document.querySelector('.hearts').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000); // Remove hearts after 5 seconds to prevent memory overflow
}

setInterval(createHeart, 300); // Create a heart every 300ms
