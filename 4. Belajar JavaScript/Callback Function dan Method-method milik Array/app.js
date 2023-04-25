
// 1. Foreach Method 

// case 1
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function print(element) {
//     console.log(element)
// }

// print(angka[0]);
// print(angka[1]);

// case 2
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function print(element) {
//     console.log(element)
// }

// print(angka[0]);
// print(angka[1]);

// angka.forEach(print);

// case 3

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// angka.forEach(function(el){
//     if(el % 2 === 0 ) {
//         console.log(el);
//     }
// });

// case 4

// const animes = [
//     {
//         title: 'Attact on Titan',
//         rating: 90,
//     },
//     {
//         title: 'One Piece',
//         rating: 89,
//     },
//     {
//         title: 'Bleach',
//         rating: 82,
//     },
//     {
//         title: 'Hunter x Hunter',
//         rating: 90,
//     },
//     {
//         title: 'Naruto',
//         rating: 84,
//     },

// ];

// animes.forEach(function(anime){
//     console.log(`${anime.title} - ${anime.rating}/100`);
// });


// 2. Map Method

// case 1

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const angkaDouble = angka.map(function(num){
//     return num * 2;
// });

// case 2 

// const animes = [
//     {
//         title: 'Attact on Titan',
//         rating: 90,
//     },
//     {
//         title: 'One Piece',
//         rating: 89,
//     },
//     {
//         title: 'Bleach',
//         rating: 82,
//     },
//     {
//         title: 'Hunter x Hunter',
//         rating: 90,
//     },
//     {
//         title: 'Naruto',
//         rating: 84,
//     },

// ];

// const animeList = animes.map(function(anime){
//     return anime.title.toUpperCase();
// });


// 3. Sebelum Lanjut Kenalan Dengan Arrow Function

// case 1
// function perpangkatan(x){
//     return x * x;
// }

// const hasil = perpangkatan(5);

// case 2 - function ekspression
// const hasil = function(x) {
//     return x * x;
// }

// case 3 - arrow function
// const perpangkatan = (x) => {
//     return x * x;
// }

// case 4 - arrow function parameter lebih dr satu
// const random = () => {
//     return Math.floor(Math.random() * 1000);
// };


// 4. Return Secara Implisit Dari Arrow Function

// const random = () => (
//     Math.floor(Math.random() * 1000)
// );

// const add = (a, b) => a + b

// 5. Memahami Settimeout Dan Setinterval

// case 1 - set timeout
// console.log('Halo...');
// setTimeout(() => {
//     console.log('masih di sana gak?');
// }, 5000);

// case 2 - set timeout
// console.log('Halo...');
// setTimeout(() => {
//     console.log('masih di sana gak?');
// }, 5000);
// console.log('saya pergi ya..')

// case 3 - set interval
// nemapilkan angka scr random setiap 2 detik
// setInterval(( ) => {
//     console.log(Math.random());
// }, 2000);

// case 4 - set interval function
// const interval = setInterval(( ) => {
//     console.log(Math.random());
// }, 2000);


// 6. Memiilh Data Tertentu Di Dalam Array Dengan Filter Method

// case 1
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const angkaGanjil = angka.filter((n) =>  {
//     return n % 2 === 1;
// });

// case 2
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const angkaBaru = angka.filter((n) =>  {
//     return n < 5;
// });

// case 3

// const animes = [
//     {
//         title: 'Attact on Titan',
//         rating: 90,
//         year: 2006
//     },
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

// const animeBagus = animes.filter((anime) => anime.rating >= 85);
// const animeCukupBagus = animes.filter((anime) => anime.rating < 85)
//     .map((anime) => anime.title);
// const animeBaru = animes.filter((anime) => anime.year > 2010);

// case 4 - use map (filter & map digabung)

// const judulAnimeBagus = animeBagus.map((anime) => anime.title);
// animes.filter((anime) => anime.rating >= 85).map((anime) => anime.title);


// 7. Menentukan Benar Atau Salah Pada Array Dengan Every Dan Some Method

// case 1 -> hasil true
// const examScore = [80, 85, 79, 90, 93, 77];
// const isGraduate = examScore.every((score) => score >= 75);

// case 2 -> hasil false
// const examScore = [80, 85, 70, 90, 93, 77];
// const isGraduate = examScore.every((score) => score >= 75);

// case 3 - anime use some

// const animes = [
//     {
//         title: 'Attact on Titan',
//         rating: 90,
//         year: 2006
//     },
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

// const isAnimeListNew = animes.some((anime) => anime.year > 2010);


// 8. Mendapatkan Satu Nilai Sesuai Kondisi Dari Sebuah Array Dengan Reduce
 
// case 1 - no use reduce method
// const examScore = [80, 85, 70, 90, 93, 77];
// let total = 0;
// for ( let score of examScore){
//     total += score;
// }

// case 2 - use reduce method

// const total = examScore.reduce((total, score) => {
//     return total + score;
// });

// case 3 - use reduce in array object

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

// const bestAnime = animes.reduce((bestAnime, currAnime) => {
//     console.log(bestAnime, currAnime);
//     if(currAnime.rating > bestAnime.rating) {
//         return currAnime;
//     }
//     return bestAnime;
// });

// case 4 - ise reduce in low anime
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

// const lowAnime = animes.reduce((lowAnime, currAnime) => {
//     console.log(lowAnime, currAnime);
//     if(currAnime.rating < lowAnime.rating) {
//         return currAnime;
//     }
//     return lowAnime;
// });


// 9. Object This Di Dalam Arrow Function Mengarah Pada Object Global Window

// case 1
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     fullName: function () {
//         return `${this.firstName} ${this.lastName}`;
//     },
// };

// case 2 - use arrow function
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     fullName: () => {
//         console.log(this);
//         return `${this.firstName} ${this.lastName}`;
//     },
// };

// case 3 - use setTimeout arrow function
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     fullName: () => {
//         console.log(this);
//         return `${this.firstName} ${this.lastName}`;
//     },
//     panggilNanti: function () {
//         setTimeout(function () {
//             console.log(this);
//             // console.log(this.firstName);
//             // console.log(this.fullName);
//         }, 3000);
//     },
// };

// case 4 - use regular function
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     fullName: function (){
//         console.log(this);
//         return `${this.firstName} ${this.lastName}`;
//     },
// };