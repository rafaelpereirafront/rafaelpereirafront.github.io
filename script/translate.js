export default function InitTranslate() {
  const languageBr = document.querySelector('#flagBr');
  const languageEn = document.querySelector('#flagEn');

  function changeLanguage(e) {
    const id = e.composedPath()[2];
    if (id === languageBr) {
      languageEn.style.display = 'block';
      languageBr.style.display = 'none';
      document.body.className = 'pt';
    } else {
      languageEn.style.display = 'none';
      languageBr.style.display = 'block';
      document.body.className = 'en';
    }
  }

  languageBr.addEventListener('click', changeLanguage);
  languageEn.addEventListener('click', changeLanguage);
}
