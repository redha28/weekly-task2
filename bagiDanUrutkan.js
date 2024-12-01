function bagiDanUrutkan(number) {
  // Mengubah angka menjadi string agar bisa dipisahkan
  let strAngka = number.toString();

  // Pisahkan angka berdasarkan angka nol
  let groupNumber = strAngka.split("0");

  // Urutkan setiap kelompok angka
  groupNumber = groupNumber.map((kelompok) => {
    return kelompok.split("").sort().join("");
  });

  // Gabungkan kembali hasil yang sudah diurutkan tanpa nol
  let hasil = groupNumber.join("");

  // Mengubah kembali hasil menjadi integer
  return parseInt(hasil, 10);
}

let result = bagiDanUrutkan(5956560159466056);
console.log(result);
