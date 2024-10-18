// Function to generate random hearts using the uploaded image
function createHeart() {
    const heart = document.createElement('img');
    heart.src = 'png-transparent-heart-red-heart-thumbnail.png'; // Replace with the correct path to the uploaded image
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

document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.getElementById('downloadButton');

    // Show download button after all animations
    setTimeout(() => {
        downloadButton.style.display = 'block';
    }, 9000); // 12 seconds delay to match the text fade out

    // Add click event to download button
    downloadButton.addEventListener('click', () => {
        const imageUrl = 'https://raw.githubusercontent.com/abhirko13/AbhishekWedsSupriya/main/Green%20and%20White%20Wedding%20Invitation%20(1).jpg'; // Direct link to the image

        // Fetch the image as a Blob
        fetch(imageUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.blob(); // Convert response to Blob
            })
            .then(blob => {
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob); // Create a URL for the Blob
                link.download = 'Wedding_Invitation.jpg'; // Set the download filename
                
                // Trigger the download
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(link.href); // Release the object URL
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    });
});
