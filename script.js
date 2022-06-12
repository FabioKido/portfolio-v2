let menubar = document.querySelector('nav');
let gohomebox = document.querySelector('#go-home');

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if (scroll > 0) {
    menubar.classList.add('hide-menu');
    gohomebox.classList.remove('hide-go-home');
  } else {
    menubar.classList.remove('hide-menu');
    gohomebox.classList.add('hide-go-home');
  }
});

menubar.onmouseover = () => menubar.classList.remove('hide-menu');


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