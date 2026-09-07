const keranjang = {};

const daftarKeranjangEl = document.getElementById('daftar-keranjang');
const totalHargaEl = document.getElementById('total-harga');
const tombolTambah = document.querySelectorAll('.btn-tambah');
const tombolKosongkan = document.getElementById('btn-kosongkan');

function formatRupiah(angka) {
  return 'Rp' + angka.toLocaleString('id-ID');
}

function renderKeranjang() {
  daftarKeranjangEl.innerHTML = '';
  const namaItem = Object.keys(keranjang);

  if (namaItem.length === 0) {
    daftarKeranjangEl.innerHTML = '<li class="kosong">Keranjang masih kosong</li>';
    totalHargaEl.textContent = formatRupiah(0);
    return;
  }

  let total = 0;

  namaItem.forEach((nama) => {
    const item = keranjang[nama];
    const subtotal = item.harga * item.jumlah;
    total += subtotal;

    const li = document.createElement('li');
    li.innerHTML = `
      <span>${nama} x${item.jumlah}</span>
      <span class="harga">${formatRupiah(subtotal)}</span>
      <button class="btn-hapus" data-nama="${nama}">Hapus</button>
    `;
    daftarKeranjangEl.appendChild(li);
  });

  totalHargaEl.textContent = formatRupiah(total);
}

tombolTambah.forEach((btn) => {
  btn.addEventListener('click', () => {
    const li = btn.closest('li');
    const nama = li.dataset.nama;
    const harga = parseInt(li.dataset.harga, 10);

    if (keranjang[nama]) {
      keranjang[nama].jumlah += 1;
    } else {
      keranjang[nama] = { harga, jumlah: 1 };
    }

    renderKeranjang();
  });
});

daftarKeranjangEl.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-hapus')) {
    const nama = e.target.dataset.nama;
    delete keranjang[nama];
    renderKeranjang();
  }
});

tombolKosongkan.addEventListener('click', () => {
  Object.keys(keranjang).forEach((nama) => delete keranjang[nama]);
  renderKeranjang();
});