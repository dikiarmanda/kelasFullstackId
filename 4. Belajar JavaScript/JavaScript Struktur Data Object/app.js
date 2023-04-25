typeof []
const orang = {
    nama: 'Aim', 
    tanggal: 16,
    alamat: 'Malang', 
}

console.log(orang);

const barang = {
    judul: 'Sepatu', 
    harga: 2000000,
    isReady: true,
    size: ['38', '39', '40', '41', '42'],
    location: {
        indonesia: 48,
        singapore: 50
    }
}

console.log(barang); 

console.log(orang['nama']);
console.log(orang['tanggal']);
console.log(orang['alamat']);
console.log(orang.nama);
console.log(orang.tanggal);
console.log(orang.alamat);

console.log(barang['is' + 'Ready']);
console.log(barang['loca' + 'tion']);
console.log(barang.location.indonesia);

// mengubah nama object
console.log(orang['nama'] = 'febby');
console.log(orang);

// mengubah nama object use chain titik (".")
console.log(orang.tanggal = 2);

let alamat = 'alamat'
console.log(orang[alamat] = 'Medan');
console.log(orang);

console.log(orang.gender = 'Perempuan');
console.log(orang);

// new struktur data array shopping Cart
const shoppingCart = [
    {
        product: 'vue.js',
        price: 1.22,
        quantity: 3
    },
    {
        product: 'react.js',
        price: 2.22,
        quantity: 3
    },
    {
        product: 'angular.js',
        price: 3.22,
        quantity: 3
    },
]

console.log(shoppingCart[0]);
//console.log(shoppingCart);

console.log(shoppingCart[0].product);
console.log(shoppingCart[0].price);
console.log(shoppingCart[0].quantity);

// panggil data object use -> []
console.log(shoppingCart[0]['product']);





