document.addEventListener("DOMContentLoaded", () => {

  /* ============================
     INTRO DATA
  ============================ */

  const introPages = [
    { title: "Hey ❤️", sub: "" },
    { title: "I made something for you", sub: "Just a small surprise 😊" },
    { title: "Because you matter to me", sub: "More than you know 💕" },
    { title: "Every moment feels better", sub: "When you’re around 🌸" },
    { title: "So I wanted to ask you something...", sub: "And I hope you smile 😌" }
  ];

  let pageIndex = 0;
  let isTyping = false;

  const introText = document.getElementById("introText");
  const subText = document.getElementById("subText");
  const nextBtn = document.getElementById("nextBtn");

  /* ============================
     TYPEWRITER EFFECT
  ============================ */

  function typeText(text, element, callback) {
    isTyping = true;
    element.textContent = "";
    let i = 0;

    const interval = setInterval(() => {
      element.textContent += text.charAt(i);
      i++;

      if (i >= text.length) {
        clearInterval(interval);
        isTyping = false;
        if (callback) callback();
      }
    }, 50);
  }

  function loadPage() {
    typeText(introPages[pageIndex].title, introText, () => {
      typeText(introPages[pageIndex].sub, subText);
    });
  }

  loadPage();

  nextBtn.addEventListener("click", () => {
    if (isTyping) return;

    pageIndex++;

    if (pageIndex < introPages.length) {
      loadPage();
    } else {
      showValentinePage();
    }
  });

  /* ============================
     SHOW FINAL PAGE
  ============================ */

  function showValentinePage() {
    document.getElementById("introContainer").classList.add("hidden");
    document.getElementById("valentineSection").classList.remove("hidden");
  }

  /* ============================
     VALENTINE LOGIC
  ============================ */

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const messageEl = document.getElementById("message");

  let noClicks = 0;

  const cuteMessages = [
    "Are you sure? 🥺",
    "Think again 💗",
    "I’ll make it special 🌸",
    "One cute date, please? 😌",
    "I’ll bring chocolates 🍫",
    "You’re making me blush 😳",
    "My heart says yes 💕",
    "You know you want to 😄"
  ];

  noBtn.addEventListener("click", () => {
    noClicks++;

    yesBtn.style.transform = `scale(${1 + noClicks * 0.18})`;
    noBtn.style.transform = `scale(${Math.max(1 - noClicks * 0.12, 0.3)})`;

    messageEl.textContent =
      cuteMessages[noClicks % cuteMessages.length];
  });

  yesBtn.addEventListener("click", () => {
    document.getElementById("valentineSection").innerHTML = `
      <h1>YAYYYY 💖🥰</h1>
      <p>You just made me really happy 💕</p>
      <p>Can’t wait for our date 💐</p>
    `;
  });

});
