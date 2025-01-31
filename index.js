// script.js
document.getElementById("calculate-btn").addEventListener("click", function() {
  // Ambil nilai input
  const fixedCost = parseFloat(document.getElementById("fixed-cost").value);
  const variableCost = parseFloat(document.getElementById("variable-cost").value);
  const sellingPrice = parseFloat(document.getElementById("selling-price").value);

  // Validasi input
  if (isNaN(fixedCost) || isNaN(variableCost) || isNaN(sellingPrice)) {
    alert("Harap masukkan semua nilai dengan benar.");
    return;
  }

  if (sellingPrice <= variableCost) {
    alert("Harga jual harus lebih besar dari biaya variabel.");
    return;
  }

  // Hitung titik impas
  const breakEvenPoint = fixedCost / (sellingPrice - variableCost);

  // Tampilkan hasil
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = `Anda perlu menjual ${Math.ceil(breakEvenPoint)} unit untuk mencapai titik impas.`;
});
