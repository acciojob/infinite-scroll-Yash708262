const listContainer = document.getElementById('infi-list');
let itemCount = listContainer.children.length; // already 10 items in HTML

// Function to add items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${++itemCount}`;
    listContainer.appendChild(li);
  }
}

// Detect scroll on the list container
listContainer.addEventListener('scroll', () => {
  if (listContainer.scrollTop + listContainer.clientHeight >= listContainer.scrollHeight) {
    addItems(2); // Add 2 items when scrolled to bottom
  }
});