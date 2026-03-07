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




document.getElementById('telegramForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const btn = document.getElementById('sendBtn');
    const status = document.getElementById('status-message');
    
    // তোমার তথ্য এখানে দাও
    const token = "8741763293:AAHQGjfQxEpspnf6np7LfPGdW1_fFAH5Rx4"; 
    const chat_id = "8654581323"; 
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const fullText = `🔔 **New Message!**\n\n👤 Name: ${name}\n📧 Email: ${email}\n💬 Message: ${message}`;

    btn.innerText = "Sending...";
    btn.style.opacity = "0.7";
    btn.disabled = true;

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(fullText)}&parse_mode=Markdown`;

    fetch(url)
        .then(response => {
            if (response.ok) {
                status.className = "success-text";
                status.innerText = "✅ The message has been sent successfully!";
                this.reset();
            } else {
                status.className = "error-text";
                status.innerText = "❌ The message could not be sent. Please check the token.";
            }
        })
        .catch(error => {
            status.className = "error-text";
            status.innerText = "🌐 There is an issue with the internet connection.";
        })
        .finally(() => {
            btn.innerText = "Send Message";
            btn.style.opacity = "1";
            btn.disabled = false;
        });
});