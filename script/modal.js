export default function initModal() {
  const modalOpen = document.querySelectorAll('.list-img');
  const closeModal = document.querySelector('[data-modal="close"]');
  const containModal = document.querySelector('[data-modal="wrapper"]');
  const getImage = document.querySelectorAll('.list-img img');
  const getParagraph = document.querySelectorAll('.paragraph-modal');
  const setImage = document.querySelector('[data-modal="imageModal"]');
  const setTitle = document.querySelector('[data-modal="title"]');
  const setParagraphModal = document.querySelector('[data-modal="paragraph"]');

  function OpenModal() {
    containModal.classList.toggle('active');
  }

  function ClickOutside(event) {
    if (event.target === this) OpenModal(event);
  }

  function SetAttributeImage(event) {
    let src = event.target.attributes.src.value;
    let alt = event.target.attributes.alt.value;
    setImage.setAttribute('src', src);
    setImage.setAttribute('alt', alt);
  }

  function SetImage() {
    for (let n = 0; n < getImage.length; n++)
      document
        .getElementById(`image${n + 1}`)
        .addEventListener('click', SetAttributeImage);
  }

  function SetTitle() {
    for (let n = 0; n < getImage.length; n++)
      document.getElementById(`image${n + 1}`).addEventListener('click', () => {
        let h2 = document.getElementById(`title${n + 1}`);
        setTitle.textContent = h2.textContent;
      });
  }

  function SetParagraph() {
    for (let n = 0; n < getImage.length; n++)
      document.getElementById(`image${n + 1}`).addEventListener('click', () => {
        setParagraphModal.textContent = getParagraph[n].textContent;
      });
  }

  for (let i = 0; i < modalOpen.length; i++)
    modalOpen[i].addEventListener('click', OpenModal);
  closeModal.addEventListener('click', OpenModal);
  containModal.addEventListener('click', ClickOutside);

  SetImage();
  SetTitle();
  SetParagraph();
}
