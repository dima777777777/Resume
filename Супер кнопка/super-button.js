const innerA = document.querySelector("#inner-a");
const padInnerA = document.querySelector("#pad-inner-a");

const handleMouseMove = (e) => {
  const target = e.target;
  const rect = target.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  innerA.style.setProperty("--x", `${x}px`);
  innerA.style.setProperty("--y", `${y}px`);
  innerA.style.setProperty("--height", `${rect.height}px`);
  innerA.style.setProperty("--width", `${rect.width}px`);

  padInnerA.style.setProperty("--x", `${x}px`);
  padInnerA.style.setProperty("--y", `${y}px`);
  padInnerA.style.setProperty("--height", `${rect.height}px`);
  padInnerA.style.setProperty("--width", `${rect.width}px`);
};

innerA.addEventListener("mousemove", handleMouseMove);
padInnerA.addEventListener("mousemove", handleMouseMove);

const innerB = document.querySelector("#inner-b");
const padInnerB = document.querySelector("#pad-inner-b");

const handleMouseMoveB = (e) => {
  const target = e.target;
  const rect = target.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  innerB.style.setProperty("--x", `${x}px`);
  innerB.style.setProperty("--y", `${y}px`);
  innerB.style.setProperty("--height", `${rect.height}px`);
  innerB.style.setProperty("--width", `${rect.width}px`);

  padInnerB.style.setProperty("--x", `${x}px`);
  padInnerB.style.setProperty("--y", `${y}px`);
  padInnerB.style.setProperty("--height", `${rect.height}px`);
  padInnerB.style.setProperty("--width", `${rect.width}px`);
};

innerB.addEventListener("mousemove", handleMouseMoveB);
padInnerB.addEventListener("mousemove", handleMouseMoveB);




  

// Отримуємо посилання на кнопку з id="sup-a"
const supAButton = document.querySelector('#sup-a');

// Отримуємо посилання на елементи з id="blob-a" і id="pad-blob-a"
const blobAElement = document.querySelector('#blob-a');
const padBlobAElement = document.querySelector('#pad-blob-a');

// Змінні для відстеження подій
let isMouseEntered = false;
let isMouseDown = false;

// Функція, яка додає/видаляє класи для стилізації елементів
function toggleStyles() {
  const shouldAddHoverClass = isMouseEntered;
  blobAElement.classList.toggle('hover', shouldAddHoverClass);
  padBlobAElement.classList.toggle('pad-hover', shouldAddHoverClass);

  const shouldAddActiveClass = isMouseEntered && isMouseDown;
  blobAElement.classList.toggle('active', shouldAddActiveClass);
  padBlobAElement.classList.toggle('pad-active', shouldAddActiveClass);
}

// Додаємо обробник подій до кнопки
supAButton.addEventListener('mouseenter', () => {
  isMouseEntered = true;
  toggleStyles();
});

supAButton.addEventListener('mouseleave', () => {
  isMouseEntered = false;
  toggleStyles();
});

supAButton.addEventListener('mousedown', () => {
  isMouseDown = true;
  toggleStyles();
});

document.addEventListener('mouseup', () => {
  isMouseDown = false;
  toggleStyles();
});





// Отримуємо посилання на кнопку з id="sup-a"
const supAButtonB = document.querySelector('#sup-b');

// Отримуємо посилання на елементи з id="blob-a" і id="pad-blob-a"
const blobAElementB = document.querySelector('#blob-b');
const padBlobAElementB = document.querySelector('#pad-blob-b');

// Змінні для відстеження подій
let isMouseEnteredB = false;
let isMouseDownB = false;

// Функція, яка додає/видаляє класи для стилізації елементів
function toggleStylesB() {
  const shouldAddHoverClass = isMouseEnteredB;
  blobAElementB.classList.toggle('hover', shouldAddHoverClass);
  padBlobAElementB.classList.toggle('pad-hover', shouldAddHoverClass);

  const shouldAddActiveClass = isMouseEnteredB && isMouseDownB;
  blobAElementB.classList.toggle('active', shouldAddActiveClass);
  padBlobAElementB.classList.toggle('pad-active', shouldAddActiveClass);
}

// Додаємо обробник подій до кнопки
supAButtonB.addEventListener('mouseenter', () => {
  isMouseEnteredB = true;
  toggleStylesB();
});

supAButtonB.addEventListener('mouseleave', () => {
  isMouseEnteredB = false;
  toggleStylesB();
});

supAButtonB.addEventListener('mousedown', () => {
  isMouseDownB = true;
  toggleStylesB();
});

document.addEventListener('mouseup', () => {
  isMouseDownB = false;
  toggleStylesB();
});
