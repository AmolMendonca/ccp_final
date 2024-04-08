document.getElementById('comment-form').onsubmit = function(event) {
    event.preventDefault(); // Prevents form from submitting the traditional way
    
    // Get the comment text
    var commentInput = document.getElementById('comment-input');
    var commentText = commentInput.value.trim();
    
    // Create the comment div
    var commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.textContent = commentText;
    
    // Add the comment to the comments container
    document.getElementById('comments-container').appendChild(commentDiv);
    
    // Clear the input field
    commentInput.value = '';
  };
  
  document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('night-mode-checkbox');
    checkbox.addEventListener('change', function() {
      document.body.classList.toggle('night-mode', this.checked);
      // Optionally, store the user's preference in localStorage
      if (this.checked) {
        localStorage.setItem('theme', 'night-mode');
      } else {
        localStorage.removeItem('theme');
      }
    });
  
    // Load the user's theme preference from localStorage
    if (localStorage.getItem('theme') === 'night-mode') {
      document.body.classList.add('night-mode');
      checkbox.checked = true;
    }
  });
  
  