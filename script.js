const EVENT_DATE = new Date("2027-07-07T19:00:00+03:00").getTime();
const music = document.getElementById("music");
const cover = document.getElementById("cover");
const intro = document.getElementById("intro");
const handVideo = document.getElementById("handVideo");
const revealVideo = document.getElementById("revealVideo");
const openButton = document.getElementById("openInvitation");
const musicButton = document.getElementById("musicButton");
const invitation = document.getElementById("invitation");

async function openInvitation() {
  openButton.disabled = true;
  cover.hidden = true;
  handVideo.classList.add("visible");
  music.volume = 0.72;
  try { await music.play(); musicButton.classList.add("playing"); } catch (_) {}
  musicButton.hidden = false;
  handVideo.currentTime = 0;
  try { await handVideo.play(); } catch (_) {
    cover.hidden = false;
    handVideo.classList.remove("visible");
    openButton.disabled = false;
  }
}

openButton.addEventListener("click", openInvitation, { once: true });
handVideo.addEventListener("ended", async () => {
  handVideo.classList.remove("visible");
  revealVideo.classList.add("visible");
  revealVideo.currentTime = 0;
  try { await revealVideo.play(); } catch (_) { showInvitation(); }
});
revealVideo.addEventListener("ended", showInvitation);

function showInvitation() {
  intro.hidden = true;
  invitation.hidden = false;
  window.scrollTo({ top: 0, behavior: "instant" });
}

musicButton.addEventListener("click", async () => {
  if (music.paused) {
    music.volume = 0.72;
    try { await music.play(); musicButton.textContent = "♫"; musicButton.classList.add("playing"); } catch (_) {}
  } else {
    music.pause();
    musicButton.textContent = "♪";
    musicButton.classList.remove("playing");
  }
});

document.getElementById("rsvpButton").addEventListener("click", () => {
  const name = document.getElementById("guestName").value.trim() || "ضيف";
  const message = encodeURIComponent(`تأكيد حضور استقبال يس\nالاسم: ${name}\nالتاريخ: 07/07/2027\nالساعة: 7:00 مساءً`);
  window.open(`https://wa.me/97058494977?text=${message}`, "_blank", "noopener,noreferrer");
});

function updateCountdown() {
  const remaining = Math.max(0, EVENT_DATE - Date.now());
  const values = {
    days: Math.floor(remaining / 86400000),
    hours: Math.floor((remaining / 3600000) % 24),
    minutes: Math.floor((remaining / 60000) % 60),
    seconds: Math.floor((remaining / 1000) % 60)
  };
  Object.entries(values).forEach(([id, value]) => {
    document.getElementById(id).textContent = String(value).padStart(2, "0");
  });
}
updateCountdown();
setInterval(updateCountdown, 1000);
