const button = document.getElementById('button');

button.addEventListener('click', function (event) {
event.preventDefault();


const yourname = document.getElementById('yourname');
const namavalue = yourname.value;

const yournumber = document.getElementById('yournumber');
const numbervalue = yournumber.value;



const nama = document.getElementById('nama');
nama.innerHTML = namavalue;
const numberkartu = document.getElementById('numberkartu');
numberkartu.innerHTML = numbervalue;

});

