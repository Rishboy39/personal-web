document.addEventListener('DOMContentLoaded', function() {
    //var lines = [
     // "Hello!"
      
   // ];
  
    
    function typeLine(index) {
      var lineElement = document.getElementById('line' + (index + 1));
      var text = lines[index];
      var charIndex = 0;
  
      function typeChar() {
        if (charIndex < text.length) {
          lineElement.textContent += text.charAt(charIndex);
          charIndex++;
          setTimeout(typeChar, 200); // Adjust typing speed here (in milliseconds)
        }
      }
  
      typeChar();
    }
  
    
    for (var i = 0; i < lines.length; i++) {
      typeLine(i);
    }
  });
  document.addEventListener("mousemove", function(event) {
    const mouseX = event.pageX;
    const mouseY = event.pageY;
  
    const background = document.querySelector(".background");
    const xOffset = window.innerWidth / 2 - mouseX;
    const yOffset = window.innerHeight / 2 - mouseY;
  
    const moveX = xOffset * 0.1;
    const moveY = yOffset * 0.1;
  
    background.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  window.addEventListener('scroll', function() {
    var content = document.getElementById('back');
    var position = content.getBoundingClientRect();

    if (position.top <= window.innerHeight * 0.25) { // Adjust this threshold as needed
        content.style.opacity = 1;
    }
});