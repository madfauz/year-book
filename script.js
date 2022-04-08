// preload
const load = document.getElementById("preload");
// window.setTimeout(function () {
//   load.style.display = "none";
// }, 2500);
window.addEventListener("load", function () {
  load.style.display = "none";
});

// profile guru
// const guru = document.getElementsByClassName("guru");

// profile siswa
const student = document.getElementsByClassName("card");
const studentImage = document.getElementsByClassName("card-img-top");
const namaSiswa = document.getElementsByClassName("nama-siswa");
const motoStudent = document.getElementsByClassName("card-text");
const birthday = document.getElementsByClassName("birthday");
const advice = document.getElementsByClassName("advice");
const siswaIg = document.getElementsByClassName("siswa-ig");
const siswaWa = document.getElementsByClassName("siswa-wa");

const profile = document.getElementsByClassName("profile")[0];
const closeButton = document.getElementsByClassName("close-button")[0];
const invisibleClose = document.getElementsByClassName("invisible-close")[0];
const elementStudentImage = document.getElementsByClassName("image-student")[0];
const elementNamaSiswa = document.getElementsByClassName("name-student")[0];
const elementMotoStudent = document.getElementsByClassName("moto-student")[0];
const elementBirthday = document.getElementsByClassName("template-birthday")[0];
const elementAdvice = document.getElementsByClassName("template-advice")[0];
const elementSiswaIg = document.getElementsByClassName("template-siswa-ig")[0];
const elementSiswaWa = document.getElementsByClassName("template-siswa-wa")[0];

const selectSiswa = document.getElementById("select-siswa");

let arraySiswa = [];
for (let siswa = 0; siswa < namaSiswa.length; siswa++) {
  arraySiswa.push(namaSiswa[siswa].innerHTML);
  // for (let select = 0; select < selectSiswa.length; select++){

  // }
}
console.log(arraySiswa.sort());

for (let person = 0; person < student.length; person++) {
  student[person].addEventListener("click", function () {
    elementStudentImage.src = studentImage[person].src;
    elementNamaSiswa.innerHTML = namaSiswa[person].innerHTML;
    elementMotoStudent.innerHTML = motoStudent[person].innerHTML;
    elementBirthday.innerHTML = birthday[person].innerHTML;
    elementAdvice.innerHTML = advice[person].innerHTML;
    elementSiswaIg.href = siswaIg[person].href;
    elementSiswaWa.href = siswaWa[person].href;
    profile.style.display = "block";
    invisibleClose.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    profile.style.display = "none";
    elementStudentImage.src = "";
    elementNamaSiswa.innerHTML = "";
    elementBirthday.innerHTML = "";
    elementAdvice.innerHTML = "";
    invisibleClose.style.display = "none";
  });

  invisibleClose.addEventListener("click", function () {
    profile.style.display = "none";
    elementStudentImage.src = "";
    elementNamaSiswa.innerHTML = "";
    elementBirthday.innerHTML = "";
    elementAdvice.innerHTML = "";
    invisibleClose.style.display = "none";
  });
}
