const music = document.getElementById("birthdayMusic");
const musicBtn = document.getElementById("musicBtn");
const musicText = document.getElementById("musicText");
const surpriseBtn = document.getElementById("surpriseBtn");
const celebrateBtn = document.getElementById("celebrateBtn");

musicBtn.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicText.textContent = "Pause Music";
      musicBtn.classList.add("playing");
    } catch (err) {
      alert("Music file nahi mila. music folder me inaam.mp3 add kar do.");
    }
  } else {
    music.pause();
    musicText.textContent = "Play Music";
    musicBtn.classList.remove("playing");
  }
});

surpriseBtn.addEventListener("click", () => {
  document.getElementById("message").scrollIntoView({ behavior: "smooth" });
  burstHearts(18);
});

celebrateBtn.addEventListener("click", () => {
  burstHearts(45);
  setTimeout(() => burstHearts(25), 350);
});

function burstHearts(count) {
  const symbols = ["♥", "♡", "✦", "✧"];
  for (let i = 0; i < count; i++) {
    const el = document.createElement("div");
    el.className = "float-heart";
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    el.style.left = `${Math.random() * 100}vw`;
    el.style.top = `${65 + Math.random() * 30}vh`;
    el.style.animationDelay = `${Math.random() * .5}s`;
    el.style.fontSize = `${12 + Math.random() * 20}px`;
    el.style.color = `hsl(${320 + Math.random() * 35}, 80%, ${70 + Math.random() * 20}%)`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3200);
  }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Small ambient hearts every few seconds.
setInterval(() => {
  if (document.visibilityState === "visible") burstHearts(1);
}, 4500);
