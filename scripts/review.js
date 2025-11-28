document.addEventListener('DOMContentLoaded', () => {
    // Get query parameters
    const urlParams = new URLSearchParams(window.location.search);
    
    // Check if form was submitted (presence of 'product' indicates submission)
    if (urlParams.has('product')) {
        // Increment counter in localStorage
        let count = localStorage.getItem('reviewCount') || 0;
        count = parseInt(count) + 1;
        localStorage.setItem('reviewCount', count);
        
        // Display submitted data
        document.getElementById('productDisplay').textContent = `Product: ${urlParams.get('product')}`;
        document.getElementById('ratingDisplay').textContent = `Rating: ${urlParams.get('rating')} stars`;
        document.getElementById('dateDisplay').textContent = `Installation Date: ${urlParams.get('installDate')}`;
        
        // Handle multiple features (checkboxes)
        const features = urlParams.getAll('features');
        document.getElementById('featuresDisplay').textContent = `Useful Features: ${features.length > 0 ? features.join(', ') : 'None selected'}`;
        
        const review = urlParams.get('review') || 'No review provided';
        document.getElementById('reviewDisplay').textContent = `Written Review: ${review}`;
        
        const userName = urlParams.get('userName') || 'Anonymous';
        document.getElementById('userDisplay').textContent = `User Name: ${userName}`;
        
        document.getElementById('counterDisplay').textContent = `Total Reviews Submitted: ${count}`;
    } else {
        // If no submission, show error or redirect
        document.getElementById('confirmation').innerHTML = '<p>Error: No review data found. Please submit the form first.</p>';
    }
});