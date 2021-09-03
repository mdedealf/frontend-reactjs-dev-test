# Frontend React-js Dev Test 

## Scripts yang digunakan

Ketika didalam project directori, dapat memanggil command line dibawah:

### `npm install`

Jalankan command line npm install diatas ketika project baru di clone dari github repository\.


### `npm start`

Setelah selesai menjalankan perintah npm install.\
untuk menjalankan project secara lokal dapat menggunakan command line npm start diatas .

## Deskripsi dari project


### `Fitur yang tersedia`

**Note: Ketika sudah masuk dihalaman utama!**

`Melihat Daftar Movie` yang tersedia ketika project dijalankan. 

`Melakukan Pencarian Movie` dengan memasukkan keyword di field input.

`Melihat Gambar Movie` dengan mengklik gambar dari movie.

`Melihat Detail Movie` dengan mengklik tombil Lihat Detail yang ada di card movie.


## Struktur Project

Struktur Project dibuat dengan memisahkan komponen, container(UI), dan logic menjadi beberapa folder.\

`components` folder yang berisi komponen dari UI yang sudah di custom.\

`constant` folder yang berisi komponen dari file yang berisi dari nilai yang konstant agar mudah dipanggil berulang dan mudah dalam maintenance. 

`container` folder container berisikan file-file logic UI yang berupa komponen-komponen dari folder `components` yang dipanggil sesuai dengan kebutuhan dan disini juga menjalankan logic untuk mendapatkan data dari API. 

`redux` folder ini berisikan redux dari tiap logical UI, dan menyimpan store. didalam folder `movie` terbagi menjadi beberapa file seperti actions, fetcher, reducer, types yang digunakan untuk menjalankan state management dengan redux dan lebih mudah dalam maintenance.
 