// preload
const profilSekolah = document.getElementById("profil-sekolah");
const load = document.getElementById("preload");
window.setTimeout(function () {
  load.style.display = "none";
  profilSekolah.style.display = "block";
}, 3000);
// window.addEventListener("load", function () {
//   load.style.display = "none";
// });

//close-link
const navButton = document.querySelector(".navbar-toggler");
const closeLink = document.getElementsByClassName("close-link");
const body = document.body;
const navCloseLink = document.querySelector(".nav-close-link");
const offCanvas = document.querySelector(".offcanvas");
const subCon = document.querySelector("#sub-con");

navButton.addEventListener("click", function () {
  const offCanvasBackdrop = document.querySelector(".offcanvas-backdrop");
  subCon.lastElementChild.style.display = "block";
  offCanvas.classList.add("show");
  offCanvas.style.visibility = "visible";
});

for (const link of closeLink) {
  link.addEventListener("click", function () {
    const offCanvasBackdrop = document.querySelector(".offcanvas-backdrop");
    navCloseLink.style.paddingRight = "";
    offCanvas.style.visibility = "hidden";
    offCanvas.classList.remove("show");
    offCanvas.removeAttribute("aria-modal", "true");
    offCanvas.removeAttribute("role", "dialog");
    offCanvas.setAttribute("aria-hidden", "true");
    body.style.overflow = "";
    body.style.paddingRight = "";
    subCon.removeChild(subCon.children[3]);
    setTimeout(function () {
      navButton.click();
    }, 500);
  });
}

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
const logoSosmed1 = document.getElementsByClassName("sosmed-siswa-1");
const logoSosmed2 = document.getElementsByClassName("sosmed-siswa-2");
const templatelogoSosmed1 = document.querySelector(".template-sosmed-siswa-1");
const templatelogoSosmed2 = document.querySelector(".template-sosmed-siswa-2");

const selectSiswa = document.getElementById("select-siswa");

// let arraySiswa = [];
// for (let siswa = 0; siswa < namaSiswa.length; siswa++) {
//   arraySiswa.push(namaSiswa[siswa].innerHTML);
//   for (let select = 0; select < selectSiswa.length; select++){

//   }
// }
// console.log(arraySiswa.sort());
function closeSidebar() {
  profile.style.display = "none";
  elementStudentImage.src = "";
  elementNamaSiswa.innerHTML = "";
  elementBirthday.innerHTML = "";
  elementAdvice.innerHTML = "";
  invisibleClose.style.display = "none";
}

for (let person = 0; person < student.length; person++) {
  student[person].addEventListener("click", function () {
    elementStudentImage.src = studentImage[person].src;
    elementNamaSiswa.innerHTML = namaSiswa[person].innerHTML;
    elementMotoStudent.innerHTML = motoStudent[person].innerHTML;
    elementBirthday.innerHTML = birthday[person].innerHTML;
    elementAdvice.innerHTML = advice[person].innerHTML;
    templatelogoSosmed1.src = logoSosmed1[person].src;
    templatelogoSosmed2.src = logoSosmed2[person].src;
    elementSiswaIg.href = siswaIg[person].href;
    elementSiswaWa.href = siswaWa[person].href;
    profile.style.display = "block";
    invisibleClose.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    closeSidebar();
  });

  invisibleClose.addEventListener("click", function () {
    closeSidebar();
  });
}

// Kegiatan
let kegiatan = document.getElementById("kegiatan");
let koleksiKegiatan = kegiatan.getElementsByTagName("img");
const selectKegiatan = document.getElementsByClassName("select-kegiatan")[0];
const templateKegiatan = selectKegiatan.getElementsByTagName("img")[0];
const closeButtonKegiatan = document.getElementById("close-button-kegiatan");

for (let i = 0; i < koleksiKegiatan.length; i++) {
  function closeKegiatan() {
    selectKegiatan.style.display = "none";
    invisibleClose.style.display = "none";
    templateKegiatan.src = "";
    closeButtonKegiatan.style.display = "none";
  }
  koleksiKegiatan[i].addEventListener("click", function () {
    selectKegiatan.style.display = "block";
    templateKegiatan.src = koleksiKegiatan[i].src;
    invisibleClose.style.display = "block";
    closeButtonKegiatan.style.display = "block";
  });
  closeButtonKegiatan.addEventListener("click", function () {
    closeKegiatan();
  });
  invisibleClose.addEventListener("click", function () {
    closeKegiatan();
  });
}
