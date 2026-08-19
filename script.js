let currentLang = 'am';

function toggleLanguage() {
  const amEls = document.querySelectorAll('.lang-am');
  const enEls = document.querySelectorAll('.lang-en');
  const btnText = document.getElementById('langBtnText');
  
  if (currentLang === 'am') {
    amEls.forEach(el => el.style.display = 'none');
    enEls.forEach(el => el.style.display = 'block');
    btnText.textContent = 'አማርኛ';
    currentLang = 'en';
  } else {
    amEls.forEach(el => el.style.display = 'block');
    enEls.forEach(el => el.style.display = 'none');
    btnText.textContent = 'English';
    currentLang = 'am';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.lang-en').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.lang-am').forEach(el => el.style.display = 'block');
});
