document.addEventListener('DOMContentLoaded', function () {
    const loader = document.querySelector('.main');
    const audio = document.querySelector('.music');

    loader.addEventListener('click', function () {
        loader.style.display = "none";
        audio.play(); 
        var text = document.querySelector('.typing-effect-container h2').textContent;
        document.querySelector('.typing-effect-container h2').textContent = '';
    
        for (var i = 0; i < text.length; i++) {
            setTimeout(function (index) {
                document.querySelector('.typing-effect-container h2').textContent += text[index];
            }, i * 50, i);
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const main = document.querySelector('.main');
    let lastSpawnTime = 0;
    const spawnDelay = 45; // Delay in milliseconds
    
    main.addEventListener('mousemove', function (event) {
        const currentTime = Date.now();
        if (currentTime - lastSpawnTime > spawnDelay) {
            createParticle(event.clientX, event.clientY);
            lastSpawnTime = currentTime;
        }
    });

    function createParticle(x, y) {
        const particle = document.createElement('i');
        particle.classList.add('particle', 'ri-bard-fill');
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.color = getRandomColor();
        main.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 2000);
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const valentineImage = document.getElementById("valentineImage");
    const valentineQuestion = document.getElementById("valentineQuestion");
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");

    let noCount = 0;
    let yesPressed = false;

    const handleNoClick = () => {
        noCount++;
        updateNoButtonText();
    };

    const getNoButtonText = () => {
        const phrases = [
            "No",
            "Are you sure?",
            "Really sure?",
            "Think again!",
            "Last chance!",
            "Surely not?",
            "You might regret this!",
            "Give it another thought!",
            "Are you absolutely certain?",
            "This could be a mistake!",
            "Have a heart!",
            "Don't be so cold!",
            "Change of heart?",
            "Wouldn't you reconsider?",
            "Is that your final answer?",
            "You're breaking my heart ;(",
        ];

        return phrases[Math.min(noCount, phrases.length - 1)];
    };

    const updateNoButtonText = () => {
        noButton.textContent = noCount === 0 ? "No" : getNoButtonText();
    };

    yesButton.addEventListener("click", () => {
        if (!yesPressed) {
            yesPressed = true;
            valentineImage.src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
            valentineQuestion.textContent = "Ok yay!!!";
        }
    });

    noButton.addEventListener("click", handleNoClick);
});
