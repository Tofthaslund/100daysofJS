const count = document.querySelector('.count');
// const add = document.querySelector('.add');
// const reset = document.querySelector('.reset');
// const sub = document.querySelector('.subtract');
const buttons = document.querySelectorAll('.buttons');

buttons.addEventListener('click', function(e) {
    if (e.target.classList.contains('add')) {
        console.log('add');
    }
});

// add.addEventListener('click', () => {
//     count.innerHTML++;
// });
// sub.addEventListener('click', () => {
//     count.innerHTML--;
// });
// reset.addEventListener('click', () => {
//     count.innerHTML = 0;
// });
