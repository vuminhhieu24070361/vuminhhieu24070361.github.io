const loginButton = document.getElementById('login');
const nameInput = document.getElementById('name');
const userIdInput = document.getElementById('user_ID');
const passwordInput = document.getElementById('pass');
const imageInput = document.getElementById('image');
const imageLabel = document.getElementById('labelBT');

function validateForm() {
  const name = nameInput.value.trim();
  const userId = userIdInput.value.trim();
  const password = passwordInput.value.trim();
  if (name === '' || userId === '' || password === '') {
    alert('All fields must be filled out');
    return false;
  }
  return true;
}

function handleImageUpload(event) {
  const file = event.target.files[0];
  if (file) {
    if (file.type.startsWith('image/')) 
      reader.readAsDataURL(file);
    
    } else {
      alert('Please upload a valid image file.');
    }
  }

loginButton.addEventListener('click', function (event) {
  event.preventDefault(); 
  if (validateForm()) {
    alert('Login successful!');
  }
});

imageInput.addEventListener('change', handleImageUpload)