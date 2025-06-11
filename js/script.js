document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("main section");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  sections.forEach(section => {
    section.classList.add("fade-in");
    observer.observe(section);
  });
});

// Animación de escritura automática
const text = "Ingeniero en Sistemas Computacionales";
const typewriter = document.getElementById("typewriter");
let i = 0;

function typingEffect() {
  if (i < text.length) {
    typewriter.textContent += text.charAt(i);
    i++;
    setTimeout(typingEffect, 80);
  }
}

typingEffect();

document.addEventListener("DOMContentLoaded", function () {
  const animatedItems = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // solo una vez
      }
    });
  }, {
    threshold: 0.1
  });

  animatedItems.forEach(item => observer.observe(item));
});

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Anima solo una vez
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
});

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'es',        // idioma original de tu página
      includedLanguages: 'es,en', // idiomas disponibles
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
  }