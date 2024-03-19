// fungsi untuk menginput data dari client
function inputData() {
  var nama = document.getElementById('nama').value;
  var umur = document.getElementById('umur').value;
  var jenisKelamin = document.getElementById('jenisKelamin').value;
  var alamat = document.getElementById('alamat').value;
  var noTelp = document.getElementById('noTelp').value;

  // mengirim data dari client ke server
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://example.com/your_api_endpoint', true);
  xhr.setRequestHeader('Content-Type', 'application/json');

  var data = JSON.stringify({
    nama: nama,
    umur: umur,
    jenisKelamin: jenisKelamin,
    alamat: alamat,
    noTelp: noTelp,
  });

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var json = JSON.parse(xhr.responseText);
      console.log(json);
    }
  };

  xhr.send(data);
}
