const startTime = 120; // Початковий час

document.addEventListener("mousemove", function(event) {
  const trail = document.getElementById("trail");
  const trailClone = trail.cloneNode(true);
  trailClone.style.width = "100px"; // Діаметр кружечка - 100px
  trailClone.style.height = "100px"; // Діаметр кружечка - 100px
  trailClone.style.borderRadius = "50%"; // Зробити кружечок

  const elapsed = Date.now() - startTime; // Поточний час від початку
  const hue = (elapsed / 10) % 360; // Обчислення тону в залежності від часу
  const color = "hsla(" + hue + ", 100%, 50%, 0.1)";
  trailClone.style.background = "radial-gradient(circle, " + color + " 0%, rgba(0, 0, 0, 0) 50%)"; // Круговий градієнт залежно від часу

  trailClone.classList.add("fade");

  const elements = document.getElementsByClassName('glas');
  const sections = document.getElementsByTagName('section')
  for (let i = 0; i < elements.length; i++) {
    const section = sections[i].getBoundingClientRect();
    const glasRect = elements[i].getBoundingClientRect();
    const elementX = event.clientX;
    const elementY = event.clientY - glasRect.top;
    const deltaY = (section.height - glasRect.height)/2;

    if (elementX >= glasRect.left && elementX <= glasRect.width + glasRect.left && elementY >= 0 && elementY <= glasRect.height) {
      const clone = trailClone.cloneNode(true);
      clone.style.left = `calc(${elementX - 50}px)`;
      clone.style.top = `calc(${elementY - 50 + deltaY}px)`;
      elements[i].appendChild(clone);
      setTimeout(function() {
        clone.remove();
      }, 5000);
      let k = 1
      if (elementX <= glasRect.left + 50) {
        k *= Math.sin(Math.PI*0.5*(elementX - glasRect.left)/50);  
      }
      if (elementX >= glasRect.width + glasRect.left - 50) {
        k *= Math.sin(Math.PI*0.5*(glasRect.width + glasRect.left - elementX)/50);  
      }
      if (elementY < 50) {
        k *= Math.sin(Math.PI*0.5*(elementY)/50);  
      }
      if (elementY >= glasRect.height - 50) {
        k *= Math.sin(Math.PI*0.5*(elementY - glasRect.height)/50);  
      }
    clone.style.transform = `scale(${k})`;  
    }
    }

    
  
});
