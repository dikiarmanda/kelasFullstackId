// 1. Mengatur Default Value Pada Function

// case 1
// function lemparDadu(sisi){
//     return Math.floor(Math.random() * sisi) + 1;
// }

// case 2
// function lemparDadu(sisi = 6){
//     return Math.floor(Math.random() * sisi) + 1;
// }

// case 3
// function sapa(name, msg) {
//     console.log(`${name} ${msg}`);
// }

// case 4
// function sapa(name = 'User', msg = 'Selamat bekerja') {
//     console.log(`${name} ${msg}`);
// }

// case 5 
// function sapa(name, msg  = 'Selamat bekerja') {
//     console.log(`${name} ${msg}`);
// }

// case 6 - msg nya taruh di awal 
// function sapa(msg = 'Selamat bekerja', name) {
//     console.log(`${name} ${msg}`);
// }


// 2. Spread Operator pada function 

// Math.max(1,2,3,4,5);
// Math.min(1,2,3,4,5);

// const angka = [1,2,3,4,5];

// // use spread operator
// Math.max(...angka)


// 3. Menggabungkan Nilai Array Dengan Array Lagi

// case 1
// const angka = [1,2,3,4,5,6,7,8,9]
// const nama = ['Alex', 'Bimo', 'Cici', 'Delila', 'Felix'];
// angka.push(0);

// case 2 - var campuran
// const angka = [1,2,3,4,5,6,7,8,9]
// const nama = ['Alex', 'Bimo', 'Cici', 'Delila', 'Felix'];
// const campuran = [...angka, 0, 'a', 'b'];

// case 3 - menggabungkan array dg array lainnya
// const angka = [1,2,3,4,5,6,7,8,9]
// const nama = ['Alex', 'Bimo', 'Cici', 'Delila', 'Felix'];
// const campuran = [...angka, ...nama];


// 4. Menggabungkan Property Object Dengan Object Lainnya

// case 1
// const user = {
//     name: 'John',
//     email: 'john@doe.com'
// };
// const userBaru = {...user, id: 123, password: 'password'};

// case 2 
// const user = {
//     name: 'John',
//     email: 'john@doe.com'
// };
// const credential = {
//     password: 'password',
//     token: 'u112121u2uu1u212nnd'
// }

// const userBaru = {...user, ...credential};


// 5. Malas Bikin Parameter Banyak Bisa Pakai Rest Param 

// case 1
// const sumAll = (...nums) => {
//     return nums.reduce((total, el) => total + el);
// };

// case 2
// const nama = ['Alex', 'Bimo', 'Cici', 'Delila', 'Felix'];

// const pemenang = (gold, silver, bronze) => {
//     console.log(`Medali emas diraih: ${gold}`)
//     console.log(`Medali silver diraih: ${silver}`)
//     console.log(`Medali bronze diraih: ${bronze}`)
// };

// case 3 - spread opr di dalam parameter
// const nama = ['Alex', 'Bimo', 'Cici', 'Delila', 'Felix', 'Arie', 'Maxalbert'];

// const pemenang = (gold, silver, bronze, ...sisa) => {
//     console.log(`Medali emas diraih: ${gold}`)
//     console.log(`Medali silver diraih: ${silver}`)
//     console.log(`Medali bronze diraih: ${bronze}`)
//     console.log(`Peserta lainnya: ${sisa}`)
// };

// 6. Bongkar Element Array Ke Masing-Masing Variabel Dengan Mudah
/// Destructing tipe data array

// const nama = ['Alex', 'Bimo', 'Cici', 'Delila', 'Felix', 'Arie', 'Maxalbert'];
// const [gold, silver, bronze, ...peserta] = nama;

// 7. Bongkar Juga Properti Object Ke Masing-Masing Variabel
// Destructing tipe data object

// case 1
// const user = {
//     name: 'John',
//     email: 'john@doe.com'
// };

// const {name, email} = user;

// case 2 - set default value di tipe data object
// const user = {
//     name: 'John',
//     email: 'john@doe.com'
// };

// const {name: nama, email, phone = '08923283828'} = user;


// 8. Bongkar Properti Object Bisa Dilakukan Di Dalam Function

// case 1
// const user = {
//     name: 'John',
//     email: 'john@doe.com',
//     role: 'Admin',
// };

// const userAndRole = ({name, role}) => {
//     return `${name} ${role}`;
// };

// case 2 - use data anime
// const animes = [
//     {
//         title: 'One Piece',
//         rating: 89,
//         year: 2022,
//     },
//     {
//         title: 'Bleach',
//         rating: 82,
//         year: 2020,
//     },
//     {
//         title: 'Attact on Titan',
//         rating: 92,
//         year: 2006
//     },
//     {
//         title: 'Hunter x Hunter',
//         rating: 90,
//         year: 2016,
//     },
//     {
//         title: 'Naruto',
//         rating: 84,
//         year: 2002,
//     },

// ];

// problem: anime dipanggil satu persatu di return nya
// const anime = animes.map((anime) => {
//     return `${anime.title} (${anime.year}) rating ${anime.rating}`;
// })

// problem solv: panggil tanpa awalan anime
// const anime = animes.map(({title, year, rating}) => {
//     return `${title} (${year}) rating ${rating}`;
// })
