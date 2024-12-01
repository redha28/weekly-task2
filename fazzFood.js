function FazzFood(harga, voucher, jarak, pajak) {
  let discount = 0;
  let ongkir = 0;
  let tax = 0;
  let alertVoucher = "";

  if (voucher != "FAZZFOOD50" && voucher != "DITRAKTIR60") {
    alertVoucher = "Voucher Tidak Valid";
  }

  if (voucher == "FAZZFOOD50") {
    harga < 50000
      ? (alertVoucher = "Voucher Minimal Pesanan Rp 50.000")
      : (discount = harga * 0.5);
    discount > 50000 ? (discount = 50000) : discount;
  }

  if (voucher == "DITRAKTIR60") {
    harga < 25000
      ? (alertVoucher = "Voucher Minimal Pesanan Rp 25.000")
      : (discount = harga * 0.6);
    discount > 30000 ? (discount = 30000) : discount;
  }

  if (jarak <= 2) {
    ongkir = jarak * 5000;
  }

  ongkir = (jarak - 2) * 3000 + 5000;

  if (pajak) {
    tax = harga * 0.05;
  }

  let subTotal = harga - discount + ongkir + tax;

  console.log(`Harga: Rp ${harga}`);
  console.log(`Potongan: Rp ${discount}`);
  console.log(`Biaya Antar: Rp ${ongkir}`);
  console.log(`Pajak: Rp ${tax}`);
  console.log(`Total Harga: Rp ${subTotal}`);
  console.log(`info ${alertVoucher != "" ? alertVoucher : "Succes"}`);
}

// Contoh pemanggilan
FazzFood(50000, "asdsa", 2, false);
