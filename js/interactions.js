// Button menu toggle
const ButtonMenu = document.getElementById('button-menu');
const navbar = document.getElementById('navbar-item');
const stick = document.querySelectorAll('.Stick');

if (ButtonMenu && navbar && stick) {
  ButtonMenu.addEventListener('click', function() {
    stick.forEach(f => {
      f.classList.toggle('active');
    });
    navbar.classList.toggle('slide');
  });
}
// DARK MODE
document.addEventListener("DOMContentLoaded", () => {
  const mode = document.getElementById("mode");
  const icon = mode?.querySelector(".icon i");
  const answer = document.querySelectorAll('.answer');
  const elements = [
    document.getElementById("navbar"),
    document.querySelector('.menu-toggle-button'),
    document.querySelector('body'),
    document.querySelector('.home'),
    document.querySelector('#container'),
    document.querySelector('.content'),
  ];

  // Fungsi untuk mengatur mode
  function setMode(isDark) {
    icon?.classList.replace(isDark ? "fa-sun" : "fa-moon", isDark ? "fa-moon" : "fa-sun");
    icon?.style.setProperty("color", isDark ? "#FFF" : "#FFD43B");
    elements.forEach(el => el?.classList.toggle('active', isDark));
    answer.forEach(e => e?.classList.toggle('active', isDark));
  }

  // Toggle mode saat diklik
  mode?.addEventListener("click", () => {
    const newMode = icon?.classList.contains("fa-sun");
    setMode(newMode);
    localStorage.setItem('darkMode', newMode);
  });
  // Inisialisasi dari localStorage
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  setMode(isDarkMode);

});
// DARK MODE

// Login button redirect
const loginButton = document.querySelector('.Login-Button');
const secondaryButton = document.querySelector('.button-secondary');
const buttonSecondLogin = document.getElementById('Login');

if (loginButton) {
  loginButton.addEventListener('click', function() {
    window.location.href = 'https://quickcert.alphabetincubator.id/login';
  });
}

if (secondaryButton) {
  secondaryButton.addEventListener('click', function() {
    window.location.href = 'https://quickcert.alphabetincubator.id/login';
  });
}

if (buttonSecondLogin) {
  buttonSecondLogin.addEventListener('click', function() {
    window.location.href = 'https://quickcert.alphabetincubator.id/login';
  });
}

// Hubungi Kami Modal
const hubungiKamiButtons = document.querySelectorAll('.hubungi-kami');
const modal = document.getElementById('modal-content');
const closeModal = document.querySelector('.modal-close');
const closeButton = document.querySelector('.button-close');

if (hubungiKamiButtons && modal && closeModal && closeButton) {
  // Event Listener untuk membuka modal pada setiap tombol "Hubungi Kami"
  hubungiKamiButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      modal.style.display = 'flex';
    });
  });

  // Event Listener untuk menutup modal
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}

// faq interaction  //
const Faq = document.querySelectorAll('.faq');

if (Faq) {
  Faq.forEach(e => {
    const question = e.querySelector('.question'); 
    if (question) {
      question.addEventListener('click', () => {
        e.classList.toggle('SlideDown'); 
      });
    }
  });
}

function addNewUser() {
  const userCountElement = document.getElementById("user-count");
  const certificateCountElement = document.getElementById("certificate-count");
  const fileSizeElement = document.getElementById("file-size");

  if (userCountElement && certificateCountElement && fileSizeElement) {
    let userCount = parseInt(userCountElement.textContent.replace('+', ''));
    let certificateCount = parseInt(certificateCountElement.textContent.replace('+', ''));
    let fileSize = parseFloat(fileSizeElement.innerHTML.replace(' MB+', ''));

    // Tambah pengguna baru
    userCount += 1;
    certificateCount += 1;
    fileSize += 0.5;

    userCountElement.textContent = userCount + '+';
    certificateCountElement.textContent = certificateCount + '+';
    fileSizeElement.innerHTML = fileSize.toFixed(2) + ' MB+';
  }
}
addNewUser();
