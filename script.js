// Get a reference to the main content area
const main = document.querySelector('main');

// Add a click event listener to the main content area
main.addEventListener('click', () => {
  // Update the text content of the main content area
  main.textContent = 'You clicked the main content area!';
});