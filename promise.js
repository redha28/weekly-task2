// Task 1
function fetchData(status) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (status !== true) {
        reject("Gagal mengambil Data");
      }
      resolve("Berhasil Mengambil Data");
    }, 2000);
  });
}

fetchData(true)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

function updateProfile(status) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (status !== true) {
        reject("Gagal Update Foto");
      }
      resolve("Berhasil Update Foto");
    }, 2000);
  });
}

updateProfile(true)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
