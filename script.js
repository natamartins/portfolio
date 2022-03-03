function menuAnburgue() {
  const menu = document.getElementById('btn-menu');

  function ativoMenu() {
    const list = document.getElementById('nav-list');
    list.classList.toggle('ativo');
  }
  menu.addEventListener('click', ativoMenu);
}
menuAnburgue();

function typeWriter(elemento) {
  const textoArroy = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArroy.forEach((letra, i) => {
    setTimeout(() => (elemento.innerHTML += letra), 70 * i);
  });
}

function decoreText() {
  const animationText = document.querySelector('.container-home-text h1');
  typeWriter(animationText);
}
decoreText();

function scrollsite() {
  window.sr = ScrollReveal({ reset: true });
  sr.reveal('.conhecimento-01, .conhecimento-img, .conhecimento-text', {
    rotate: { x: 0, y: 80, z: 0 },
    duration: 3000,
  });

  sr.reveal('.conhecimento-02, .conhecimento-02 >div img ', {
    rotate: { x: 0, y: 80, z: 0 },
    duration: 3000,
  });
}
scrollsite();
