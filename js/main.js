document.addEventListener("DOMContentLoaded", function() {
    const inicioSection = document.getElementById("inicio");
    const contactoSection = document.getElementById("contacto");
    const inicioLink = document.querySelector('.menu li:nth-child(1) a');
    const contactoLink = document.querySelector('.menu li:nth-child(2) a');
  
    function changeLinkColor(section, link) {
      const sectionRect = section.getBoundingClientRect();
      if (sectionRect.top >= 0 && sectionRect.bottom <= window.innerHeight) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  
    window.addEventListener("scroll", function() {
      changeLinkColor(inicioSection, inicioLink);
      changeLinkColor(contactoSection, contactoLink);
    });
  });
  