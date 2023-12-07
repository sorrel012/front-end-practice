const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

addEventListener('load', () => {
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  const tagRect = tag.getBoundingClientRect();
  const tagWidth = tagRect.width / 2;
  const tagHeight = tagRect.height / 5;

  document.addEventListener('mousemove', (evt) => {
    const x = evt.clientX;
    const y = evt.clientY;

    vertical.style.transform = `translateX(${x}px)`;
    horizontal.style.transform = `translateY(${y}px)`;
    target.style.transform = `translate(${x - targetHalfWidth}px, ${y - targetHalfHeight}px)`;
    tag.style.transform = `translate(${x + tagWidth}px, ${y + tagHeight}px)`;
    // vertical.style.left = `${x}px`;
    // horizontal.style.top = `${y}px`;
    // target.style.left = `${x}px`;
    // target.style.top = `${y}px`;
    // tag.style.left = `${x}px`;
    // tag.style.top = `${y}px`;
    tag.innerText = `${x}px ${y}px`;
  });
});
