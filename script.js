//your code here!

const listContainer = document.getElementById('list'); // or your list's ID
let itemCount = 0;

// Function to create list items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${++itemCount}`;
    listContainer.appendChild(li);
  }
}

// Initial load: add 10 items
addItems(10);

// Detect scroll to bottom
window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;

  // Check if we're at the bottom
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    addItems(2); // Add 2 new items
  }
});