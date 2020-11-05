let mailForm = document.querySelector('.mail-form');
let mailList = document.querySelector('.mail-list');
let mailField = document.querySelector('.mail-field');

mailForm.onsubmit = function (evt) {
  evt.preventDefault();

  let newMail = document.createElement('li');
  newMail.classList.add('users-comment');
  newMail.textContent = mailField.value;
  mailField.value = '';
  mailList.append(newMail);
};
