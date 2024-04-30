
// Get references to HTML elements
const profileImg = document.getElementById('profile-img');
const fileInput = document.getElementById('file-input');

// Event listener for file input change
fileInput.addEventListener('change', function() {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      // Set the profile image source to the uploaded image
      profileImg.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
});


// dark mode effect
var moon_icon = document.getElementById("moon_icon");
moon_icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    
}





