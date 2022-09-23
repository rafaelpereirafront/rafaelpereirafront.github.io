export default function initModal() {
  const modalOpen = document.querySelectorAll('.list-img');
  const closeModal = document.querySelector('[data-modal="close"]');
  const containModal = document.querySelector('[data-modal="wrapper"]');

  function OpenModal() {
    containModal.classList.toggle('active');
  }

  function clickOutside(event) {
    if (event.target === this) OpenModal(event);
  }

  for (let i = 0; i < modalOpen.length; i++)
    modalOpen[i].addEventListener('click', OpenModal);

  closeModal.addEventListener('click', OpenModal);
  containModal.addEventListener('click', clickOutside);
}
