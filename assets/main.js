// ini agar dalam form nya itu kereset, walaupun tidak mengirim kemana mana
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

// togle nav
// ini saya buat agar, nav nya masuk di burger, dan ini di ambil dari clas, dan dari yang saya ingin tampilkan dalam burger untuk melakukan apa dan apa yang terjadinya
const nSlide = () => {
  const burger = document.querySelector(".burger");
  const nList = document.querySelector("nav");

  burger.addEventListener("click", () => {
    nList.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};
nSlide();
