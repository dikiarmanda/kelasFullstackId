// const button = document.querySelector('#clickme');

// event onclick use function langsung
// button.onclick = function () {
//     console.log("You clicked me");
// };

// pisahkan use variabel, lalu panggil var nya
// const scream = () => {
//     console.log('Dont touch me');
// }

// button.onmouseover = scream;

// add Event Listener in DOM
// const eventbtn = document.querySelector('#eventbtn');
// eventbtn.addEventListener('click', function(){
//     alert('clicked');
// });

// perbedaan event addEventListener dg event onclick
// eventbtn.addEventListener('click', stepSatu);
// eventbtn.addEventListener('click', stepDua);


// case: Kenapa ada add Event Listener?
// function stepSatu(){
//     console.log('step satu');
// }
// function stepDua(){
//     console.log('step dua');
// }

// eventbtn.onclick = stepSatu;
// eventbtn.onclick = stepDua;

const buttons = document.querySelectorAll('button')

for(let button of buttons) {
    button.addEventListener('click', colorize);
    // button.addEventListener('click', () => {
        // coding an di bawah runtut nya dari mana? :v (dari atau sebelum no 6)
    //     button.style.backgroundColor = generateRandomColor();
    //     button.style.color = generateRandomColor();
    // });
}

// 6. Kotak edit dg warna tertentu

const headings = document.querySelectorAll('h1');

for(let heading of headings) {
    heading.addEventListener('click', colorize);
    // heading.addEventListener('click', () => {
        // coding an di bawah runtut nya dari mana? :v (dari atau sebelum no 6)
        // heading.style.backgroundColor = generateRandomColor();
        // heading.style.color = generateRandomColor();
//     });
}

// use this lebih simple
function colorize() {
    this.style.backgroundColor = generateRandomColor();
    this.style.color = generateRandomColor();
}


