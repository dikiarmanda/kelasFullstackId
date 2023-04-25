// 1. Pengenalan Function Di Javascript
// let lemparDadu = console.log(lemparDadu);

//2. Mendefinisikan Dan Menjalankan Function
// function lemparDadu(){
//     console.log(Math.floor(Math.random() * 6 ) + 1);
// }
// function nyanyi() {
//     console.log("Cek...");
//     console.log("Do re mi...");
// }

// // panggil fungsi 
// nyanyi();
// nyanyi();
// nyanyi();
// nyanyi();
// nyanyi();

// 3. Argument Dan Parameter Dalam Function
// function selamatPagi(name){
//     console.log(`Halo, ${name}. Selamat Pagi!`);
// }

// jadi Aim disini kita sebut sbg argument
// selamatPagi('Aim');

// 4. Multiple Parameter Dan Argument
// function jumlahkan(a = 0, b = 0) {
//     const total = a + b;
//     console.log(total);
// }

// 5. Statement Return Pada Function
// function jumlahkan(a, b) {
//     const total = a + b;
//     return total;
//     console.log('Selesai');
// }

// 5. Statement Return Pada Function (2)
// function jumlahkan(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return 'Bukan angka';
//     }
//     return a + b;
// }

// 6. Visibilitas Variabel Sesuai Scope Atau Ruang Lingkup

// let programming = 'JavaScript';

// function typeSafe(){
//    let programming = 'TypeScript';
//     console.log(programming);
// }
// typeSafe(); 
// console.log(programming);


// 7. Blocked Scope Variabel

// case 1
// let tinggi = 8;
// if (tinggi > 5) {
//     let lebar = 10;
//     console.log(lebar);
// }
// console.log(tinggi);

// case 2
// let tinggi = 8;
// if (tinggi > 5) {
//     let lebar = 10;
    // console.log(lebar);
//}
// console.log(lebar);

// case 3
// for (let index = 0; index < 10; index++){
//     const indexNumber = index;
//     // console.log(indexNumber);
// }
// console.log(indexNumber);

// case 4
// let tinggi = 8;
// if (tinggi > 5) {
//     var lebar = 10;
//     // console.log(lebar);
// }
// console.log("lebar: ", lebar);

// for (let index = 0; index < 10; index++){
//     var indexNumber = index;
//     // console.log(indexNumber);
// }
// console.log("index: ", indexNumber);

// Case 5
// let tinggi = 8;
// if (tinggi > 5) {
//     var lebar = 10;
//     // console.log(lebar);
// }
// console.log("lebar: ", lebar);

// for (let index = 0; index < 10; index++){
//     var indexNumber = index;
//     // console.log(indexNumber);
// }
// console.log("index: ", indexNumber);

// case 6
// let tinggi = 8;
// if (tinggi > 5) {
//     var lebar = 10;
//     // console.log(lebar);
// }
// console.log("lebar: ", lebar);

// for (let index = 0; index < 10; index++){
//     lebar  = index;
//     // console.log(indexNumber);
// }
// console.log("lebar: ", lebar);


// 8. Lexical Scope

// case 1 - tidak akan muncul apabila di run
// function lamarKerja(){
//     const jabatan = 'Programmer';

//     function orangDalam(){
//         let kenalan = `Orang dalam bisa memasukkan ${jabatan}`;
//         console.log(kenalan);
//     }
// }

// case 2 - akan muncul apabila di run
// function lamarKerja(){
//     const jabatan = 'Programmer';

//     function orangDalam(){
//         let kenalan = `Orang dalam bisa memasukkan ${jabatan}`;
//         console.log(kenalan);
//     }
//     orangDalam();
// }

// case 3 - ada function di dalam function
// function lamarKerja(){
//     const jabatan = 'Programmer';

//     function lebihDalam(){
//         function orangDalam(){
//             let kenalan = `Orang dalam bisa memasukkan ${jabatan}`;
//             console.log(kenalan);
//         }
//         orangDalam();
//     }
//     lebihDalam();
// }


// 9. Function Expressions 

// case 1
// function perpangkatan(nilai){
//     return nilai * nilai;
// }

// let hasil = perpangkatan(5);

// case 2 - use function ekspression
// const hasilPerpangkatan = function (nilai) {
//     return nilai * nilai;
// }

// console.log(hasilPerpangkatan(10));

// case 3 - add parameter function lebih dr satu
// const hasilPerpangkatan = function (nilai, pembanding) {
//     return nilai * pembanding;
// }
// console.log(hasilPerpangkatan(9, 2));


// 10. Function Sebagai Argument Function Lain

// function duakali(func) {
//     func();
//     func();
// }

// function lemparDadu() {
//     const hasil = Math.floor(Math.random() * 6) + 1;
//     console.log(hasil);
// }


// 11. Function Bernilai Balik Function 

// function hasilnyaAdalahFunction(){
//     const rand = Math.random();
//     if (rand > 0.10) {
//         return function(){
//             console.log('Selamat, angkanya lebih besar');
//         }
//     } else {
//         return function(){
//             console.log('Maaf, mungkin bisa coba lagi');
//         }
//     }
// }

// const result = hasilnyaAdalahFunction();


// 12. Definisi Sebuah Method 

// function myFun(){ // ini adalah function biasa
//     console.log('Hi');
//     return 'Hello';
// }

// const myMath = { // ini adalah onject 
//     perkalian: function(x, y) { // ini adalah method
//         return x * y;
//     }
// }

// 13. This Adalah Keyword Sakti

// const saya = {
//     nama: 'Max',
//     hobi: 'Mancing ikan',
//     kenalan: function(){ 
//         return `Hi, saya ${this.nama}. Hobi saya ${this.hobi}.`
//     },
// };


// 14. Try And Catch Adalah Penyelamat

// case 1

try {
    saya.kenalan();
} catch{
    console.log('error!!');
}

// saya.kenalan();
console.log('Setelah proses try and catch');

// case 2 

function teriak(msg) {
    try {
        console.log(msg.toUpperCase());
    } catch (error) {
        console.log(error);
        console.log('Silahkan masukkan tipe data string pada argument teriak');
    }
}
