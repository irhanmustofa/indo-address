// provinces
fetch(`https://kanglerian.github.io/api-wilayah-indonesia/api/provinces.json`)
  .then((response) => response.json())
  .then((provinces) => {
    let options = `<option value="">--Pilih Provinsi--</option>`;
    provinces.forEach((province) => {
      options += `<option value="${province.id}">${province.name}</option>`;
    });
    document.getElementById("provinsi").innerHTML = options;
  });

// cities
provinsi.addEventListener("change", function () {
  fetch(
    `https://kanglerian.github.io/api-wilayah-indonesia/api/regencies/${this.value}.json`
  )
    .then((response) => response.json())
    .then((regencies) => {
      let options = `<option value="">--Pilih Kabupaten/Kota--</option>`;
      regencies.forEach((regency) => {
        options += `<option value="${regency.id}">${regency.name}</option>`;
      });
      document.getElementById("regency").innerHTML = options;
    });
});

// districts
regency.addEventListener("change", function () {
  fetch(
    `https://kanglerian.github.io/api-wilayah-indonesia/api/districts/${this.value}.json`
  )
    .then((response) => response.json())
    .then((districts) => {
      let options = `<option value="">--Pilih Kecamatan--</option>`;
      districts.forEach((district) => {
        options += `<option value="${district.id}">${district.name}</option>`;
      });
      document.getElementById("district").innerHTML = options;
    });
});

// villages
district.addEventListener("change", function () {
  fetch(
    `https://kanglerian.github.io/api-wilayah-indonesia/api/villages/${this.value}.json`
  )
    .then((response) => response.json())
    .then((villages) => {
      let options = `<option value="">--Pilih Kelurahan--</option>`;
      villages.forEach((village) => {
        options += `<option value="${village.id}">${village.name}</option>`;
      });
      document.getElementById("village").innerHTML = options;
    });
});

// Form data
let form = document.getElementById("myForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let provinsi =
    document.getElementById("provinsi").options[
      document.getElementById("provinsi").selectedIndex
    ].text;
  let kabupaten =
    document.getElementById("regency").options[
      document.getElementById("regency").selectedIndex
    ].text;
  let kecamatan =
    document.getElementById("district").options[
      document.getElementById("district").selectedIndex
    ].text;
  let kelurahan =
    document.getElementById("village").options[
      document.getElementById("village").selectedIndex
    ].text;
  alert(`${provinsi}, ${kabupaten}, ${kecamatan}, ${kelurahan}`);
});
