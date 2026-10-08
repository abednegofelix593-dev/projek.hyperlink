// 1. Memilih elemen
const judul = document.getElementById("judul");
const sapaan = document.getElementById("sapaan");
 
// 2. Melihat elemen di Console
console.log(judul);
console.log(sapaan);
 
// 3. Mengubah isi teks
judul.textContent = "Judul Sudah Diubah!";
 
// 4. Mengubah warna
judul.style.color = "crimson";
 
// 5. Mengubah isi dengan tag HTML
sapaan.innerHTML = "Halo, saya sedang <b>belajar DOM</b>!";
 
// 6. Mencoba id yang tidak ada
const hantu = document.getElementById("tidakada");
console.log(hantu);
const kelas = document.getElementById("kelas");
kelas.textContent = "XRPL 5";
kelas.style.fontSize = "30px";