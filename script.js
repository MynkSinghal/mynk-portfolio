document.addEventListener("DOMContentLoaded", function() {
    fetch('portfolio.json') // Assuming your portfolio data is in a file named portfolio.json
        .then(response => response.json())
        .then(data => {
            const portfolioGallery = document.querySelector('.portfolio-gallery');
            data.forEach(item => {
                const portfolioItem = document.createElement('div');
                portfolioItem.classList.add('portfolio-item');
                const portfolioImage = document.createElement('img');
                portfolioImage.src = item.imageSrc;
                portfolioImage.alt = item.title;
                const portfolioTitle = document.createElement('p');
                portfolioTitle.textContent = item.title;
                portfolioItem.appendChild(portfolioImage);
                portfolioItem.appendChild(portfolioTitle);
                portfolioGallery.appendChild(portfolioItem);
            });
        })
        .catch(error => console.error('Error fetching portfolio items:', error));

    fetch('testimonials.json') // Assuming your testimonial data is in a file named testimonials.json
        .then(response => response.json())
        .then(data => {
            const testimonialContainer = document.querySelector('.testimonial-container');
            data.forEach(testimonial => {
                const testimonialCard = document.createElement('div');
                testimonialCard.classList.add('testimonial-card');
                const testimonialContent = document.createElement('div');
                testimonialContent.classList.add('testimonial-content');
                const testimonialProfile = document.createElement('div');
                testimonialProfile.classList.add('testimonial-profile');
                testimonialProfile.innerHTML = `<img src="${testimonial.profilePic}" alt="Profile Picture">`;
                const testimonialName = document.createElement('div');
                testimonialName.classList.add('testimonial-name');
                testimonialName.textContent = testimonial.name;
                const testimonialText = document.createElement('div');
                testimonialText.classList.add('testimonial-text');
                testimonialText.textContent = testimonial.testimonial;
                testimonialContent.appendChild(testimonialProfile);
                testimonialContent.appendChild(testimonialName);
                testimonialContent.appendChild(testimonialText);
                testimonialCard.appendChild(testimonialContent);
                testimonialContainer.appendChild(testimonialCard);
            });
        })
        .catch(error => console.error('Error fetching testimonials:', error));
});



