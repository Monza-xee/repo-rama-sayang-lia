onload = () =>{
        document.body.classList.remove("container");
};
// ===== LOVE DIALOG =====
function openDialog() {
  const overlay = document.getElementById('overlay');
  const dialog = document.getElementById('loveDialog');

  overlay.style.display = 'block';
  dialog.style.display = 'block';

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      overlay.classList.add('show');
      dialog.classList.add('show');
    });
  });

  spawnPetals();
}

function closeDialog() {
  const overlay = document.getElementById('overlay');
  const dialog = document.getElementById('loveDialog');

  overlay.classList.remove('show');
  dialog.classList.remove('show');

  setTimeout(() => {
    overlay.style.display = 'none';
    dialog.style.display = 'none';
    document.getElementById('petalRain').innerHTML = '';
  }, 400);
}

function spawnPetals() {
  const container = document.getElementById('petalRain');
  container.innerHTML = '';
  const emojis = ['🌸', '🌺', '✨', '💕', '🌷'];

  for (let i = 0; i < 18; i++) {
    const petal = document.createElement('span');
    petal.className = 'petal';
    petal.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    petal.style.left = Math.random() * 100 + '%';
    petal.style.animationDuration = (2.5 + Math.random() * 3) + 's';
    petal.style.animationDelay = (Math.random() * 3) + 's';
    petal.style.fontSize = (10 + Math.random() * 12) + 'px';
    container.appendChild(petal);
  }
}

document.getElementById('loveBtn').addEventListener('click', openDialog);
