let heart = document.querySelector('.heart');
let likesNumber = document.querySelector('.likes-number');
let counter = 0;

heart.onclick = function () {
if (heart.classList.contains('added')) {
counter--;
} else {
counter++;
}

likesNumber.textContent = counter;
heart.classList.toggle('added');
};