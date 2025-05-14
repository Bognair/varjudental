// i18n.js

// ----- Konstansok -----
const DEFAULT_LANG = 'hu';
const STORAGE_KEY = 'site_lang';

// ----- Segédfüggvény: JSON betöltése -----
async function loadJSON(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Nem sikerült betölteni: ${path}`);
  return res.json();
}

// ----- Nyelv alkalmazása az oldalon -----
async function applyTranslations(lang) {
  try {
    const dict = await loadJSON(`./locales/${lang}.json`);
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        if (el.tagName.toLowerCase() === 'title') {
          document.title = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });
    document.documentElement.lang = lang;
  } catch (e) {
    console.error(e);
  }
}

// ----- Zászlós nyelvváltó logika -----
const switcher    = document.getElementById('lang-switcher');
const button      = document.getElementById('lang-button');
const flagIcon    = document.getElementById('lang-flag');
const optionsList = document.getElementById('lang-options');

// Segédfüggvény a zászló frissítéséhez
function setFlag(lang) {
  const emojis = { hu: '🇭🇺', en: '🇬🇧', de: '🇩🇪' };
  flagIcon.textContent = emojis[lang] || '🏳️';
}

// Gomb kattintásra nyitjuk/zárjuk
button.addEventListener('click', e => {
  e.stopPropagation();
  switcher.classList.toggle('open');
});

// Opció választás
optionsList.addEventListener('click', e => {
  const li = e.target.closest('li[data-lang]');
  if (!li) return;
  const lang = li.dataset.lang;
  localStorage.setItem(STORAGE_KEY, lang);
  setFlag(lang);
  applyTranslations(lang);
  switcher.classList.remove('open');
});

// Klikk máshova: zárjuk a listát
document.addEventListener('click', () => {
  switcher.classList.remove('open');
});

// ----- Inicializálás oldalbetöltéskor -----
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  setFlag(savedLang);
  applyTranslations(savedLang);
});