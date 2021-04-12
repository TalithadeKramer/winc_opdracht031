
button1.addEventListener('click', function (alert) {
    window.alert('button clicked')
});

/* const body = document.querySelector(".blue-background");

const changeBackground = () => {
    body.classList.add("red-background");
};
button2.addEventListener("click", changeBackground); */

const body = document.querySelector(".blue-background");

const toggleBackground = () => {
    body.classList.toggle("red-background");
};
button2.addEventListener("click", toggleBackground);