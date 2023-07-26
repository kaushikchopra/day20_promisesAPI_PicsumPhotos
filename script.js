// Function to fetch a single random image from Picsum Photos API
function displayPicsumImage() {
    const picsumImage = document.querySelector('.picsum-image');
    const container = document.getElementById('picsum-image-container');

    fetch('https://picsum.photos/800')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.url;
        })
        .then((imageURL) => {
            picsumImage.src = imageURL;
            picsumImage.alt = 'Random Image'; // Add alt text for accessibility
            picsumImage.style.display = 'block'; // Show the image
        })
        .catch((error) => {
            console.error('Error fetching image:', error);
            picsumImage.style.display = 'none'; // Hide the image on error
            picsumImage.src = ''; // Clear the image source on error
            picsumImage.alt = ''; // Clear the alt text on error
        })
        .finally(() => {
            container.style.display = 'block'; // Show the container after the fetch attempt (regardless of success/error)
        });
}

// Call the function to fetch and display the image when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const picsumImageBtn = document.querySelector('.picsum-image-btn');
    picsumImageBtn.addEventListener('click', () => {
        displayPicsumImage();
    });
});
