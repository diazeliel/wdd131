// Increment the review counter in localStorage
let reviewCount = localStorage.getItem('reviewCount');
reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
localStorage.setItem('reviewCount', reviewCount);

// Display the review count
document.getElementById('reviewCount').textContent = 'You have submitted ' + reviewCount + ' reviews.';