let userForm = document.querySelector('.user-form');
let userList = document.querySelector('.user-list');
let userField = document.querySelector('.user-field');

userForm.onsubmit = function (evt) {
  evt.preventDefault();

  let newUser = document.createElement('li');
  newUser.classList.add('users-comment');
  newUser.textContent = userField.value;
  userField.value = '';
  userList.append(newUser);
};
