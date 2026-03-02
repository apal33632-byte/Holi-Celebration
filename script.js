function generateWish() {
    let name = document.getElementById("nameInput").value;
    let message = document.getElementById("personalWish");

    if(name === "") {
        message.innerHTML = "Please apna naam likho 😊";
    } else {
        message.innerHTML = "🎉 " + name + " ki taraf se sabko Happy Holi 2026 🌈";
        confettiEffect();
    }
}

function playMusic() {
    let song = document.getElementById("holiSong");
    song.play();
}

function confettiEffect() {
    for(let i = 0; i < 50; i++) {
        let confetti = document.createElement("div");
        confetti.style.position = "fixed";
        confetti.style.width = "8px";
        confetti.style.height = "8px";
        confetti.style.background = getRandomColor();
        confetti.style.top = "0px";
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.animation = "fall 3s linear";
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 3000);
    }
}

function getRandomColor() {
    const colors = ["red", "yellow", "blue", "green", "pink", "orange"];
    return colors[Math.floor(Math.random() * colors.length)];
}