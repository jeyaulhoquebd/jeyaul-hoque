// Typewriter Effect
const texts = ["Computer Science Student.", "Web Developer.", "Programmer."];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typewriter").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Wait before starting next text
    } else {
        setTimeout(type, 100); // Typing speed
    }
}());

// Skill Card Toggle Function
function toggleSkill(card) {
    // If you want only one card to open at a time, uncomment the 3 lines below:
    /* document.querySelectorAll('.skill-card').forEach(c => {
        if (c !== card) c.classList.remove('active');
    }); */
    
    // Toggle the clicked card
    card.classList.toggle('active');
}

// Project Card Toggle Function
function toggleProject(card) {
    // This will toggle the 'active' class when clicked
    card.classList.toggle('active');
}