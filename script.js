let menubar = document.querySelector('nav');
let gohomebox = document.querySelector('#go-home');

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if (scroll > 0) {
    menubar.classList.add('hide');
    gohomebox.classList.remove('hide');
  } else {
    menubar.classList.remove('hide');
    gohomebox.classList.add('hide');
  }
});

menubar.onmouseover = () => menubar.classList.remove('hide');


const sr = ScrollReveal({
  distance: '40px',
  duration: 2500,
  reset: true
});

sr.reveal('.about-me, .skills, .experience', { delay: 100, origin: 'top' });

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
  nextImage();
}, 5000);

function nextImage() {
  count++;
  if (count > 4) {
    count = 1;
  }

  document.getElementById("radio" + count).checked = true;
}