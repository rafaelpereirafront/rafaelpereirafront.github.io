export default function initModal() {
  const modalOpen = document.querySelectorAll('.list-img');
  const closeModal = document.querySelector('[data-modal="close"]');
  const containModal = document.querySelector('[data-modal="wrapper"]');
  const imageList = document.querySelectorAll('.list-img img');
  const setImage = document.getElementById('imageModal');

  function OpenModal() {
    containModal.classList.toggle('active');
  }

  function clickOutside(event) {
    if (event.target === this) OpenModal(event);
  }

  function srcTarget(event) {
    let src = event.target.attributes.src.value;
    setImage.setAttribute('src', src);
  }

  function tagImage() {
    for (let n = 0; n < imageList.length; n++)
      document
        .getElementById(`image${n + 1}`)
        .addEventListener('click', srcTarget);
  }

  for (let i = 0; i < modalOpen.length; i++)
    modalOpen[i].addEventListener('click', OpenModal);

  closeModal.addEventListener('click', OpenModal);
  containModal.addEventListener('click', clickOutside);

  tagImage();
}
