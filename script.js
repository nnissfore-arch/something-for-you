const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");
const card = document.getElementById("mainCard");

yesBtn.addEventListener("click", function () {

    for (let i = 0; i < 120; i++) {
        createConfetti();
    }

    card.innerHTML = `
        <div class="heart big-heart">♡</div>

        <p class="small-text">wait...</p>

        <h1>SHE SAID YES! ♡</h1>

        <p class="message">
            I guess this is where our little story begins.
        </p>

        <button id="nextBtn">one more thing →</button>
    `;

    document.getElementById("nextBtn").addEventListener("click", showMessage);
});

noBtn.addEventListener("mouseover", function () {

    const x = Math.random() * 220 - 110;
    const y = Math.random() * 160 - 80;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

function showMessage() {

    card.innerHTML = `
        <div class="heart big-heart">♡</div>

        <p class="small-text">for you, asha</p>

        <h1>Thank you. ♡</h1>

        <p class="message">
            I don't know what happens next,
            but I'm really happy that it's with you.
        </p>

        <p class="final-text">
            — from me, to you ♡
        </p>
    `;

    for (let i = 0; i < 40; i++) {
        createConfetti();
    }
}

function createConfetti() {

    const confetti = document.createElement("div");

    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "vw";

    confetti.style.animationDuration =
        (Math.random() * 2 + 2) + "s";

    confetti.style.transform =
        `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 4000);
}