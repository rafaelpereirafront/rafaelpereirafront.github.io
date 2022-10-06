export default function initTranslate() {
  const languageBr = document.querySelector('#flagBr');
  const languageEn = document.querySelector('#flagEn');

  function changeLanguage(e) {
    const id = e.composedPath()[2];
    if (id === languageBr) {
      languageEn.style.display = 'block';
      languageBr.style.display = 'none';
    } else {
      languageEn.style.display = 'none';
      languageBr.style.display = 'block';
    }
  }

  languageBr.addEventListener('click', changeLanguage);
  languageEn.addEventListener('click', changeLanguage);
}
