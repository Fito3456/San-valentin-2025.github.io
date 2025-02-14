   function selectVersion(version) {
            document.getElementById('version-selector').style.display = 'none';
            document.getElementById('mobile-version').style.display = 'none';
            document.getElementById('desktop-version').style.display = 'none';
            document.getElementById(version + '-version').style.display = 'block';
            document.querySelector('.back-btn').style.display = 'block';
        }

        function showSelector() {
            document.getElementById('version-selector').style.display = 'flex';
            document.getElementById('mobile-version').style.display = 'none';
            document.getElementById('desktop-version').style.display = 'none';
            document.querySelector('.back-btn').style.display = 'none';
        }
const openLetterBtn = document.getElementById('open-letter-btn');
const openLetterBtn1 = document.getElementById('open-letter-btn-desktop');
const closeBtn = document.getElementById('close-btn');
const letterModal = document.getElementById('letter-modal');

// Agregar evento de clic al botón de abrir carta
openLetterBtn.addEventListener('click', () => {
  document.querySelector('.letter-modal').style.display = 'none';
});
openLetterBtn1.addEventListener('click', () => {
  document.querySelector('.letter-modal').style.display = 'none';
});



letterModal.addEventListener('click', (e) => {
  if (e.target.id === 'close-btn') {
    letterModal.style.display = 'none';
    document.querySelector('.letter-modal').style.display = 'block';
  }
});