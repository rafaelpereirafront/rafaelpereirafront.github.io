export default function initCount() {
  const sum = document.querySelectorAll('.countPlus');
  const less = document.querySelectorAll('.countLess');
  const count = document.querySelectorAll('.result');

  for (let i = 0; i < sum.length; i++) {
    let n = 0;
    sum[i].addEventListener('click', () => {
      n++;
      count[i].innerHTML = n;
    });

    less[i].addEventListener('click', () => {
      n !== 0 ? n-- : undefined;
      count[i].innerHTML = n;
    });
  }
}
