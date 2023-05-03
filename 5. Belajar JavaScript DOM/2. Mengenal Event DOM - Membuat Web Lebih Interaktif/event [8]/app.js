// const form = document.querySelector('#form');
// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     console.log('submitted form')
//     console.log('submited');
// });

// document.querySelector('a').addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log('harusnya ke google')
// })


// [9] Praktek Input Realtime Dengan Event Dan Dom 06: 55

// const form = document.querySelector('#form');
// const input = document.querySelector('input');
// const list = document.querySelector('#notes');

// [10] Event Input Dan Change Pada Form
// input.addEventListener('change', (e) => {
//     console.log('Nilai Berubah')
// });

// input.addEventListener('input', (e) => {
//     document.querySelector('h1').innerText = input.value;
//     console.log('Nilai berhasil diinput');
// });

// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     const noteValue = input.value;
//     const newList = document.createElement('li');

//     newList.innerText = noteValue;
//     list.append(newList);
//     input.value = '';
//     console.log(newList);


//     console.log(noteValue)
//     console.log('submited');
// });

// 11. Mengenal Event Bubbling
const button = document.querySelector('#changeColor');
const container = document.querySelector('#container');

button.addEventListener('click', function (e) {
    container.style.backgroundColor = generateRandomColor();
    e.stopPropagation();
});

// eventlistener in container
container.addEventListener('click', function () {
    container.classList.toggle('hide');
});

const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}

// 12. Mengenal Event Delegation
const form = document.querySelector('#form');
const input = document.querySelector('input');
const list = document.querySelector('#notes');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const noteValue = input.value;
    const newList = document.createElement('li');

    newList.innerText = noteValue;
    list.append(newList);
    input.value = '';
    console.log(newList);
    console.log(noteValue)
    console.log('submited');
});

list.addEventListener('click', (e) => {
    e.target.remove();
    e.target.nodeName === 'LI' && e.target.remove();
    console.dir(e.target);
});

const lis = document.querySelectorAll('li');
for (let li of lis) {
    li.addEventListener('click', function () {
        li.remove();
    });
}

