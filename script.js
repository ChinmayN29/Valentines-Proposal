document.addEventListener("DOMContentLoaded", () => {

  /* ---------------- INTRO PAGES ---------------- */

  const introPages = [
    "Hey 👀",
    "I have something important to ask you 💭",
    "But before that…",
    "I hope this makes you smile 😊"
  ];

  let pageIndex = 0;
  let isTyping = false;

  const textEl = document.getElementById("text");
  const nextBtn = document.getElementById("nextBtn");

  function typeText(text, i = 0) {
    isTyping = true;
    textEl.textContent = "";

    const interval = setInterval(() => {
      textEl.textContent += text.charAt(i);
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        isTyping = false;
      }
    }, 50);
  }

  function loadPage() {
    typeText(introPages[pageIndex]);
  }

  loadPage();
  changeBackground();

  nextBtn.addEventListener("click", () => {
    if (isTyping) return;

    pageIndex++;
    changeBackground();

    if (pageIndex < introPages.length) {
      loadPage();
    } else {
      showValentinePage();
    }
  });

  /* ---------------- BACKGROUND COLORS ---------------- */

  const pastelColors = [
    "#ffe4ec", // pink
    "#e8f5e9", // green
    "#e3f2fd", // blue
    "#fffde7", // yellow
    "#f3e5f5"  // lavender
  ];

  function changeBackground() {
    const random =
      pastelColors[Math.floor(Math.random() * pastelColors.length)];
    document.body.style.backgroundColor = random;
  }

  /* ---------------- FINAL PAGE ---------------- */

  function showValentinePage() {
    document.getElementById("introContainer").classList.add("hidden");
    document.getElementById("valentineSection").classList.remove("hidden");
    changeBackground();
  }

  /* ---------------- YES / NO LOGIC ---------------- */

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const message = document.getElementById("message");

  let yesSize = 18;
  let noSize = 18;

  const cuteMessages = [
    "Are you sure? 🥺",
    "Think again 💭",
    "I’ll wait 💕",
    "You’re breaking my heart 😢",
    "Okay last chance 😭"
  ];

  noBtn.addEventListener("click", () => {
    yesSize += 6;
    noSize = Math.max(8, noSize - 2);

    yesBtn.style.fontSize = yesSize + "px";
    noBtn.style.fontSize = noSize + "px";

    message.textContent =
      cuteMessages[Math.floor(Math.random() * cuteMessages.length)];
  });

  yesBtn.addEventListener("click", () => {
    message.textContent = "YAYYY!!! 💖🥹 You just made me the happiest!";
  });

  /* ---------------- FLOATING HEARTS ---------------- */

  const heartsContainer = document.getElementById("hearts-container");

  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "💓";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 4 + Math.random() * 3 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 7000);
  }

  setInterval(createHeart, 400);

});
