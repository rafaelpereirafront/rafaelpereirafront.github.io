export default function initDrop() {
  const faqs = document.querySelectorAll('.faq');

  faqs.forEach((e) => {
    ['touchEnter', 'click'].forEach((user) => {
      e.addEventListener(user, () => {
        e.classList.toggle('activeDrop');
      });
    });
  });
}
