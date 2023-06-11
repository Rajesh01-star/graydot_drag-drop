const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

// Store the initial HTML content of both containers
const initialContainerContents = Array.from(containers).map(container => container.innerHTML);

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging');
  });

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging');
  });
});

containers.forEach(container => {
  container.addEventListener('dragover', e => {
    e.preventDefault();
  });

  container.addEventListener('drop', e => {
    const draggable = document.querySelector('.dragging');
    if (draggable) {
      container.appendChild(draggable);
    }
  });
});

// Reset button
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', () => {
  containers.forEach((container, index) => {
    container.innerHTML = initialContainerContents[index];
  });

  // Reattach event listeners to containers
  containers.forEach(container => {
    container.querySelectorAll('.draggable').forEach(draggable => {
      draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
      });

      draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
      });
    });
  });
});
