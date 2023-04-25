// 1. Pengenalan Perulangan
// looping manual :v
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// for (let i = 1; i <= 10; i++){
//     console.log('saya ada di dalam loop');
//     console.log(i);
// }

// for (let i = 0; i <= 20; i+=2){
//     console.log(i);
// }

// for (let i = 1; i <= 20; i+=2){
//     console.log(i);
// }

// for (let i = 20; i >= 0; i -= 2){
//     console.log(i);
// }

// for (let i = 10; i <= 100000; i *= 10){
//     console.log(i);
// }

// const animals = ['cat', 'deer', 'hog', 'koala', 'zebra'];

// for (let i = 0;  i < animals.length; i++) {
//     console.log(i+1, animals[i]);
// }

// Mendapatkan Data Dari Nested Array Dengan Nested Loop
// const studentRow = [
//     ['Olivia', 'Lian', 'Emma', 'Noah'],
//     ['Amelia', 'Oliver', 'Ava', 'Elijah'],
//     ['Sophia', 'Mateo', 'Isabella', 'Lucas'],
// ];

// for (let i = 0; i < studentRow.length; i++){
//     const row = studentRow[i]; 
//     console.log(`Seat Row #${i + 1}`);
//     for (let j = 0; j < row.length; j++) {
//         console.log(`   ${row[j]}`);
//     }
// }

// 7. Perulangan Menggunakan Perintah While
// let num = 0;
// while (num < 10) {
//     console.log(num);
//     num++;
// }

// for (let num = 0; num < 10; num++){
//     console.log(num);
// }

// const PASSWORD = 'Pass123';

// 7. Perulangan Menggunakan Perintah While (1)
// let guess = prompt('enter the password');
// while (guess !== PASSWORD) {
//     guess = prompt('enter the password');
// }
// alert('congrats! the password is correct');


// const pilihan = 'abcd';
// for (let i = 1; i <= 10; i++) {
//     console.log(`${i}. Soal nomor ${i}:`)
//     for (let j = 0; j < pilihan.length; j++) {
//         console.log(`   ${pilihan[j]}. Pilihan Jawaban`);
//     }
// }

// 8. Kata Kunci Break Untuk Memberhentikan Perulangan
// break yaitu memberhentikan proses perulangan 
// let input = prompt ('Hei, say something!');
// while(true) {
//     input = prompt(input);
//     if(input.toLowerCase() === "stop"){
//         break;
//     } 
// }
// alert('ok');

// 8. Kata Kunci Break Untuk Memberhentikan Perulangan (1)
// key break untuk memberhentikan angka misal angka i = 100
// for (let i = 0; i < 10000; i++){
//     console.log(i);
//     if(i === 100) break;
// }

// 9. Membuat Game Tebak Tebakkan Angka Dengan While
// let maximum = parseInt(prompt('Masukkan nilai maksimal!'));
// while (!maximum) {
//     maximum = parseInt(prompt('Masukkan nilai maksimal!'));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);

// let guess = parseInt(prompt('Isi tebakan pertama kamu!'));
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//     attempts++;
//     if (guess > targetNum) {
//         guess = parseInt(prompt('Terlalu tinggi! tebak lagi:'));
//     } else {
//         guess = parseInt(prompt('Terlalu rendah! tebak lagi:'));
//     }
// }

// alert(`Selamat Tebakan Anda Benar! Dengan percobaan ${attempts} kali`);


// 10. Cara Elegan Melakukan Perulangan Pada Array For Of
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango', 'Strawberry'];

// use for biasa
// for(let i = 0; i < fruits.length; i++) {
//     console.log(`Buah ${fruits[i]}`);
// }

// Use for of
// for (let fruit of fruits){
//     console.log(`Buah ${fruit}`);
// }

// 10. Cara Elegan Melakukan Perulangan Pada Array For Of (2)
// case studentRow

// const studentRow = [
//     ['Olivia', 'Lian', 'Emma', 'Noah'],
//     ['Amelia', 'Oliver', 'Ava', 'Elijah'],
//     ['Sophia', 'Mateo', 'Isabella', 'Lucas', 'ariemax'],
// ];

// for (let i = 0; i < studentRow.length; i++){
//     const row = studentRow[i]; 
//     console.log(`Seat Row #${i + 1}`);
//     for (let j = 0; j < row.length; j++) {
//         console.log(`   ${row[j]}`);
//     }
// }

// for (let row of studentRow) {
//     for (let student of row){
//         console.log(student)
//     }
// }

// 11. Melakukan Perulangan Pada Object Dengan Elegan For In
const studentScore = {
    Olivia: 20,
    Lian: 13,
    Emma: 40,
    Noah: 18,
    Amelia: 32,
    Oliver: 10,
    Ava: 11,
    Elijah: 21,
    Sophia: 14,
    Mateo: 22,
};

// for (let student in studentScore) {
//     console.log(`${student} memiliki skor ${studentScore[student]}`);
// }

// 11. Melakukan Perulangan Pada Object Dengan Elegan For In (1)
// Convert tipe data object to array
console.log(Object.values(studentScore));

//11. Melakukan Perulangan Pada Object Dengan Elegan For In (2)
// Jumlah totalscore dibagi Panjang atau banyaknya siswa untuk get nilai rata2
let total = 0;
let scores = Object.values(studentScore);
for (let score of scores) {
    total += score;
}
console.log(total / scores.length);

