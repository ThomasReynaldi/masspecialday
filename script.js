function createBalloons() {
  const balloonContainer = document.getElementById('balloon-container');
  const names = ['Makasihh udah berjuang selama 24 tahun kamuu, sekarang di tahun ke 25 nya kamuu semoga kamu makinn kuat dengan cobaan didepannya yahh, dan kamu bisa ngelwatin semuanya, maaf di ulang tahun mu yang sekarang aku mungkin belum bisa menjadi yang perfect buat kamu, love youu so muchh  Maya Anjeli Siadari❤️‍🔥 '];
  const colors = ['#ff758c', '#ff7eb3', '#ffdc00', '#ffb3ff', '#ff66ff']; // Warna balon yang berbeda
  const balloonCount = 25; // Jumlah balon yang diinginkan

  for (let i = 0; i < balloonCount; i++) {
    const name = names[0]; // Karena hanya satu nama
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    balloon.style.left = `${Math.random() * 100}vw`; // Posisi horizontal acak
    balloon.style.animationDuration = `${Math.random() * 6 + 3}s`; // Durasi animasi acak
    balloon.style.animationDelay = `${Math.random() * 2}s`; // Jeda animasi acak
    balloon.setAttribute('data-name', name); // Set atribut data-name dengan nama
    balloon.addEventListener('click', function() {
      this.style.animation = 'explode 0.5s forwards'; // Animasi ledakan saat diklik
      setTimeout(() => {
        alert(` ${name}! 🎉`); // Tampilkan pesan ulang tahun
        this.remove(); // Hapus balon setelah ledakan
      }, 500);
    });
    balloonContainer.appendChild(balloon);
  }
}

function createFireworks() {
  setInterval(function() {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.left = `${Math.random() * 100}vw`;
    firework.style.top = `${Math.random() * 100}vh`;
    document.body.appendChild(firework);
    setTimeout(function() {
      firework.remove();
    }, 1000);
  }, 1000);
}

function createCandles() {
  const candleContainer = document.getElementById('candle-container');
  const candle = document.createElement('div');
  candle.classList.add('candle');
  const flame = document.createElement('div');
  flame.classList.add('flame');
  candle.appendChild(flame);
  candle.addEventListener('click', function() {
    flame.style.display = 'none'; // Matikan api lilin saat diklik
    alert('HAPPY BIRTHDAY AYYYYY'); // Tampilkan pesan ulang tahun
  });
  candleContainer.appendChild(candle);
}

function createFloatingText() {
  const phrases = ['Happy Birthday!', 'Semoga Panjang Umur Dan Sehat Selalu', 'Tercapaii Semua Cita-Cita Kamu', 'LOVE YOUU SO MUCHHH','Maya Anjeli Siadari Turns 25'];
  const textContainer = document.createElement('div');
  textContainer.classList.add('happy-birthday');
  setInterval(() => {
    const text = document.createElement('div');
    text.innerText = phrases[Math.floor(Math.random() * phrases.length)];
    text.style.left = `${Math.random() * 100}vw`;
    text.style.top = `${Math.random() * 100}vh`;
    text.style.fontSize = `${Math.random() * 2 + 1}rem`;
    text.style.opacity = Math.random();
    text.style.transition = 'top 10s ease-in-out';
    textContainer.appendChild(text);
    setTimeout(() => {
      text.remove();
    }, 10000);
  }, 1000);
  document.body.appendChild(textContainer);
}

createBalloons();
createFireworks();
createCandles();
createFloatingText();
