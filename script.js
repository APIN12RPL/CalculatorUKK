const inputField = document.querySelector('input'); // Mengambil referensi ke elemen input pada halaman web.

function display(value) { // Fungsi untuk menampilkan nilai pada input.
    inputField.value += value; // Menambahkan nilai yang diberikan ke nilai yang ada di input.
}

function Clear() { // Fungsi untuk menghapus semua nilai pada input.
    inputField.value = ''; // Mengosongkan nilai pada input.
}

function del() { // Fungsi untuk menghapus karakter terakhir dari input.
    inputField.value = inputField.value.slice(0, -1); // Menghapus satu karakter dari belakang pada nilai input.
}

function calculate() { // Fungsi untuk menghitung ekspresi matematika yang dimasukkan pengguna.
    try {
        inputField.value = eval(inputField.value); // Mengevaluasi ekspresi matematika yang dimasukkan pengguna dan menampilkan hasilnya di input.
    } catch (error) {
        inputField.value = 'SALAH'; // Jika terjadi kesalahan dalam evaluasi, menampilkan pesan kesalahan di input.
    }
}