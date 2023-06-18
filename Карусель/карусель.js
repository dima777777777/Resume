 // Знаходимо елемент .slider
 const slider = document.querySelector('.slider');
  
 // Прокручуємо до другої секції
 slider.scrollLeft = slider.offsetWidth;
const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
a.style.order = '1'
b.style.order = '2'
c.style.order = '3'
const sections = Array.from(document.querySelectorAll('section'));

slider.addEventListener('scroll', handleSliderScroll);

function handleSliderScroll() {
 if (slider.scrollLeft === 0) {
   reorderSections(1);
   slider.scrollLeft = slider.offsetWidth;
 } else if (slider.scrollLeft === slider.offsetWidth * 2) {
   reorderSections(-1);
   slider.scrollLeft = slider.offsetWidth;
 }
}

function reorderSections(x) {
 a.style.order = `${+a.style.order + x}`;
 b.style.order = `${+b.style.order + x}`;
 c.style.order = `${+c.style.order + x}`;
 if (a.style.order == 4) {a.style.order = '1'};
 if (a.style.order == 0) {a.style.order = '3'};

 if (b.style.order == 4) {b.style.order = '1'};
 if (b.style.order == 0) {b.style.order = '3'};

 if (c.style.order == 4) {c.style.order = '1'};
 if (c.style.order == 0) {c.style.order = '3'};
}


const buttonA = document.getElementById('a-1');
buttonA.addEventListener('click', function() {
  a.scrollIntoView({ behavior: 'smooth' });
});
const buttonB = document.getElementById('b-1');
buttonB.addEventListener('click', function() {
  b.scrollIntoView({ behavior: 'smooth' });
});
const buttonC = document.getElementById('c-1');
buttonC.addEventListener('click', function() {
  c.scrollIntoView({ behavior: 'smooth' });
});