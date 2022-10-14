export default async function initModal() {
  const modalOpen = document.querySelectorAll('.list-img');
  const closeModal = document.querySelector('[data-modal="close"]');
  const containModal = document.querySelector('[data-modal="wrapper"]');

  function OpenModal() {
    containModal.classList.toggle('active');
  }

  function ClickOutside(event) {
    if (event.target === this) OpenModal(event);
  }

  const modal = document.querySelector('.modal');
  const modalDiv = document.querySelector('.modal-div');
  const createImage = document.createElement('img');
  const getImage = document.querySelectorAll('.list-img img');
  let imageArray = [...getImage];

  function SetAttributeImage(event) {
    let src = event.target.attributes.src.value;
    let alt = event.target.attributes.alt.value;
    createImage.setAttribute('data-modal', 'imageModal');
    createImage.setAttribute('src', src);
    createImage.setAttribute('alt', alt);
    modal.insertBefore(createImage, modalDiv);
  }

  function SetImage() {
    for (let n = 0; n < getImage.length; n++)
      document
        .getElementById(`image${n + 1}`)
        .addEventListener('click', SetAttributeImage);
  }

  const modalText = document.querySelector('.modal-text');
  const createTitle = document.createElement('h2');

  function SetTitle() {
    createTitle.setAttribute('data-modal', 'title');
    for (let n = 0; n < getImage.length; n++)
      document.getElementById(`image${n + 1}`).addEventListener('click', () => {
        let h2 = document.getElementById(`title${n + 1}`);
        createTitle.textContent = h2.textContent;
        modalText.insertBefore(createTitle, setParagraphModal);
      });
  }

  const getParagraph = document.querySelectorAll('.paragraph-modal');
  const setParagraphModal = document.querySelector('[data-modal="paragraph"]');

  function SetParagraph() {
    for (let n = 0; n < getImage.length; n++)
      document.getElementById(`image${n + 1}`).addEventListener('click', () => {
        setParagraphModal.textContent = getParagraph[n].textContent;
      });
  }

  function jsonModal() {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => setJson(jsonData));
  }

  function setJson(jsonData) {
    for (let i = 0; i < getImage.length; i++)
      (getParagraph[i].innerText = jsonData.projectBr[i].paragraph),
        imageArray[i].addEventListener('click', (e) => {
          let id = imageArray.indexOf(e.target);
          urlPage.setAttribute('href', jsonData.projectBr[id].page),
            urlGit.setAttribute('href', jsonData.projectBr[id].github);
        });
  }
  const resJson = await fetch('text.json');
  const data = await resJson.json();
  const modalTecnology = document.querySelector('.modal-technology');

  function SetTechnology() {
    for (let i = 0; i < getImage.length; i++)
      imageArray[i].addEventListener('click', (e) => {
        let idLogo = imageArray.indexOf(e.target);
        const arrayTecnology = data.projectBr[idLogo].src;
        const imgModal = document.querySelectorAll('.modal-technology img');
        for (let i = 0; i < imgModal.length; i++)
          imgModal[i] ? imgModal[i].parentNode.removeChild(imgModal[i]) : null;
        arrayTecnology.forEach((dados) => {
          const elementCreate = document.createElement('img');
          elementCreate.setAttribute('src', dados);
          modalTecnology.appendChild(elementCreate);
        });
      });
  }

  for (let i = 0; i < modalOpen.length; i++)
    modalOpen[i].addEventListener('click', OpenModal);
  closeModal.addEventListener('click', OpenModal);
  containModal.addEventListener('click', ClickOutside);

  const url = 'text.json';
  const urlPage = document.querySelector('.modal-a');
  const urlGit = document.querySelector('.modal-git');

  SetTechnology();
  SetImage();
  SetTitle();
  SetParagraph();
  jsonModal();
}
