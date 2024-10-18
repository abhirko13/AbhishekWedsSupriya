document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.getElementById('downloadButton');

    // Show download button after all animations
    setTimeout(() => {
        downloadButton.style.display = 'block';
    }, 12000); // 12 seconds delay to match the text fade out

    // Add click event to download button
    downloadButton.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = 'https://raw.githubusercontent.com/abhirko13/AbhishekWedsSupriya/main/Green%20and%20White%20Wedding%20Invitation%20(1).jpg'; // Direct link to the image
        link.download = 'Wedding_Invitation.jpg'; // Name for the downloaded file
        
        // Trigger the download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
