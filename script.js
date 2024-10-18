document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.getElementById('downloadButton');

    // Show download button after all animations
    setTimeout(() => {
        downloadButton.style.display = 'block';
    }, 12000); // 12 seconds delay to match the text fade out

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
