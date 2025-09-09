const stage = document.getElementById('stage');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
function placeButtons(){
  const rect = stage.getBoundingClientRect();
  const centerY = rect.height / 2;
  yesBtn.style.left = rect.width * 0.3 + 'px';
  yesBtn.style.top = centerY + 'px';
  noBtn.style.left = rect.width * 0.6 + 'px';
  noBtn.style.top = centerY + 'px';
}
function moveNoButton(){
  const s = stage.getBoundingClientRect();
  const b = noBtn.getBoundingClientRect();
  const padding = 10;
  const maxX = s.width - b.width - padding;
  const maxY = s.height - b.height - padding;
  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);
  noBtn.style.left = newX + 'px';
  noBtn.style.top = newY + 'px';
}
noBtn.addEventListener('mouseenter', moveNoButton);
window.addEventListener('load', placeButtons);
window.addEventListener('resize', placeButtons);

 
const audio = new Audio('mio-mio (3).mp3');
audio.loop = true; // اگر میخوای صدا تکرار بشه
// وقتی روی دکمه کلیک شد، صدا شروع به پخش می‌کنه
yesBtn.addEventListener('click', function() {
  audio.play();
  alert("me too baby ❤😍");
});