// Menu
let menubar = document.querySelector('nav');
const toggle = document.querySelector('.toggle');
let gohomebox = document.querySelector('#go-home');

const handleScroll = (event) => {
  let scroll = this.scrollY;
  if (scroll > 0) {
    menubar.classList.add('hide-menu');
    menubar.classList.remove('active');
    gohomebox.classList.remove('hide-go-home');
  } else {
    menubar.classList.remove('hide-menu');
    gohomebox.classList.add('hide-go-home');
  }
}

window.addEventListener("scroll", handleScroll);

menubar.onmouseover = () => menubar.classList.remove('hide-menu');

toggle.onclick = function (event) {
  menubar.classList.toggle('active');

  const active = menubar.classList.contains('active');

  event.currentTarget.setAttribute('aria-expanded', active)

  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
  }
}

// Scroll Reveal
const sr = ScrollReveal({
  distance: '40px',
  duration: 2500,
  reset: true
});

sr.reveal('.about-me, .skills, .experience', { delay: 100, origin: 'top' });

// Slide - Carrousel
document.getElementById("radio1").checked = true;

let count = 1,
  btns = document.querySelectorAll(".manual-navigation label");

setInterval(function () {
  nextImage();
}, 5000);

function nextImage() {
  btns[count - 1].classList.remove("auto");

  count++;

  if (count > 4) {
    count = 1;
  }

  document.getElementById("radio" + count).checked = true;

  btns[count - 1].classList.add("auto");
}