@import url("https://fonts.googleapis.com/css2?family=Aref+Ruqaa:wght@400;700&family=Noto+Kufi+Arabic:wght@400;500;600;700&display=swap");


:root {
  --blue: #78acd1;
  --blue-deep: #4f83ad;
  --silver: #aebcc8;
  --ink: #496476;
  --white: #ffffff;
}


* {
  box-sizing: border-box;
}


[hidden] {
  display: none !important;
}


html {
  scroll-behavior: smooth;
  background: #e8f3fa;
}


body {
  margin: 0;
  background: #e8f3fa;
  color: var(--ink);
  font-family: "Noto Kufi Arabic", Tahoma, Arial, sans-serif;
}


button,
a {
  -webkit-tap-highlight-color: transparent;
}


/* الإطار الرئيسي للكرت */

.site-shell {
  width: min(100%, 540px);
  min-height: 100svh;
  margin: 0 auto;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 0 50px rgba(57, 93, 119, 0.15);
}


/* صفحة الغلاف */

.intro-stage {
  position: fixed;
  z-index: 100;
  inset: 0;
  width: min(100%, 540px);
  height: 100svh;
  margin: auto;
  overflow: hidden;
  background: #ffffff;
}


/* صورة الغلاف */

.cover-image {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  background: #ffffff;
}


/* فيديو اليد والفيديو الثاني */

.intro-video {
  position: absolute;
  z-index: 2;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  background: #ffffff;
  transition:
    opacity 0.35s ease,
    visibility 0.35s ease;
}


.intro-video.visible {
  opacity: 1;
  visibility: visible;
}


/* الزر الشفاف فوق يد يس */

.hand-hotspot {
  position: absolute;
  z-index: 10;
  top: 42%;
  left: 24%;
  width: 52%;
  height: 34%;
  padding: 0;
  border: 0;
  border-radius: 46%;
  outline: none;
  background: transparent;
  cursor: pointer;
  touch-action: manipulation;
}


.hand-hotspot:disabled {
  pointer-events: none;
}


.hand-hotspot:focus-visible {
  outline: 3px solid rgba(79, 131, 173, 0.65);
  outline-offset: 4px;
}


/* خلفية صفحات الدعوة */

.invitation-flow {
  min-height: 100svh;
  background-color: #ffffff;
  background-image: url("cloud-background.png");
  background-position: center top;
  background-repeat: repeat-y;
  background-size: 100% auto;
}


/* تصميم كل صفحة */

.cloud-section {
  position: relative;
  display: grid;
  min-height: 100svh;
  padding: 90px 34px;
  place-content: center;
  justify-items: center;
  text-align: center;
}


/* صفحة اسم يس */

.welcome-section p {
  margin: 0;
  font-size: 1rem;
}


.welcome-section h1 {
  margin: 12px 0;
  color: var(--blue-deep);
  font-family: "Aref Ruqaa", serif;
  font-size: clamp(5rem, 24vw, 8rem);
  font-weight: 700;
  line-height: 1;
  text-shadow: 0 8px 30px rgba(92, 155, 200, 0.16);
}


.star {
  color: #9fc8e5;
  font-size: 1.35rem;
}


.soft-copy {
  color: #7d98aa !important;
}


/* إشارة السحب */

.scroll-cue {
  position: absolute;
  bottom: 7%;
  display: grid;
  gap: 5px;
  color: #8da6b7;
  font-size: 0.78rem;
}


.scroll-cue b {
  font-size: 1.8rem;
  animation: float 1.7s ease-in-out infinite;
}


@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(7px);
  }
}


/* العناوين الصغيرة */

.eyebrow {
  margin: 0 0 22px;
  color: var(--blue-deep);
  font-size: 1rem;
  font-weight: 600;
}


/* صفحة التاريخ */

.date-section {
  padding-block: 68px;
}


.date-display {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 15px;
  width: 100%;
  max-width: 390px;
}


.date-display strong {
  display: grid;
  width: 100px;
  height: 100px;
  place-items: center;
  border: 1px solid #b8d6ea;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.72);
  color: var(--blue-deep);
  box-shadow: 0 14px 35px rgba(80, 130, 165, 0.12);
  font-family: Georgia, serif;
  font-size: 2.65rem;
  font-weight: 500;
}


.date-display span {
  color: #6d8b9e;
  font-size: 0.9rem;
}


.time-pill {
  margin-top: 24px;
  padding: 11px 24px;
  border-radius: 999px;
  background: #eef7fc;
  color: var(--blue-deep);
  font-weight: 600;
}


/* العد التنازلي */

.countdown-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  width: min(100%, 420px);
  margin-top: 34px;
}


.countdown-item {
  display: grid;
  min-height: 82px;
  padding: 10px 5px;
  place-content: center;
  border: 1px solid rgba(115, 172, 211, 0.3);
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.72);
  box-shadow: 0 10px 24px rgba(67, 118, 153, 0.09);
}


.countdown-item strong {
  color: var(--blue-deep);
  font-family: Georgia, serif;
  font-size: 1.48rem;
  font-weight: 500;
}


.countdown-item span {
  margin-top: 6px;
  color: #819aaa;
  font-size: 0.67rem;
}


/* صورة الطفل المدمجة */

.baby-blend {
  position: relative;
  width: calc(100% + 68px);
  height: 68svh;
  margin-inline: -34px;
  overflow: hidden;

  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    #000000 14%,
    #000000 82%,
    transparent 100%
  );

  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    #000000 14%,
    #000000 82%,
    transparent 100%
  );
}


.baby-blend img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}


.photo-section p {
  position: relative;
  z-index: 2;
  max-width: 355px;
  margin: -26px 0 0;
  color: #63879f;
  font-family: "Aref Ruqaa", serif;
  font-size: 1.45rem;
  line-height: 2.15;
}


/* رسمة الموقع */

.funky-location-art {
  position: relative;
  width: 190px;
  height: 135px;
  margin-bottom: 12px;
}


.funky-location-art b {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  color: #dceffa;
  font-size: 8.5rem;
  filter: drop-shadow(
    0 12px 18px rgba(82, 139, 178, 0.13)
  );
}


.funky-location-art i {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  color: var(--blue-deep);
  font-family: Georgia, serif;
  font-size: 2.4rem;
  font-style: normal;
  transform: translate(-50%, -40%);
}


.funky-location-art span {
  position: absolute;
  z-index: 3;
  color: #9cc8e5;
  font-size: 1.2rem;
}


.funky-location-art span:first-child {
  top: 24px;
  left: 12px;
}


.funky-location-art span:last-child {
  right: 10px;
  bottom: 20px;
}


/* عناوين الصفحات */

.location-section h2,
.rsvp-section h2,
.closing-section h2 {
  margin: 0 0 20px;
  color: var(--ink);
  font-family: "Aref Ruqaa", serif;
  font-size: 2rem;
}


/* أزرار الموقع وواتساب */

.location-section a,
.rsvp-section button {
  display: inline-block;
  padding: 14px 27px;
  border: 0;
  border-radius: 999px;
  background: linear-gradient(
    135deg,
    #5c95bd,
    #83badb
  );
  color: #ffffff;
  box-shadow: 0 12px 28px rgba(61, 111, 146, 0.2);
  font-family: "Noto Kufi Arabic", sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
}


/* صفحة تأكيد الحضور */

.rsvp-section {
  align-content: center;
}


.rsvp-section label {
  display: block;
  width: min(100%, 360px);
  margin: 8px 0 18px;
  text-align: right;
}


.rsvp-section label span {
  display: block;
  margin: 0 8px 8px;
  font-size: 0.8rem;
}


.rsvp-section input {
  width: 100%;
  height: 52px;
  padding: 0 18px;
  border: 1px solid #c7dfef;
  border-radius: 16px;
  outline: none;
  background: rgba(255, 255, 255, 0.85);
  color: var(--ink);
  font: inherit;
}


.rsvp-section input:focus {
  border-color: var(--blue);
  box-shadow: 0 0 0 4px rgba(120, 172, 209, 0.12);
}


.rsvp-section button {
  cursor: pointer;
}


.rsvp-section small {
  margin-top: 14px;
  color: #8ba2b1;
}


/* الصفحة الختامية */

.closing-section strong {
  margin-top: 25px;
  color: var(--blue-deep);
  font-family: Georgia, serif;
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.18em;
}


.closing-section p {
  max-width: 350px;
  color: #728fa2;
  line-height: 2.15;
}


.closing-section em {
  color: var(--blue-deep);
  font-family: "Aref Ruqaa", serif;
  font-size: 1.3rem;
  font-style: normal;
}


/* توقيع وروابط Inviteation by Ghada */

.brand-signature {
  display: grid;
  justify-items: center;
  gap: 5px;
  width: 100%;
  margin-top: 46px;
  padding-top: 22px;
  border-top: 1px solid rgba(120, 172, 209, 0.24);
  color: #8aa4b5;
}


.brand-signature > span {
  font-size: 0.72rem;
}


.brand-signature > b {
  color: var(--blue-deep);
  font-family: Georgia, serif;
  font-size: 0.86rem;
  font-weight: 600;
  letter-spacing: 0.04em;
}


.brand-signature nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 7px;
  margin-top: 9px;
}


.brand-signature a {
  padding: 7px 11px;
  border: 1px solid rgba(120, 172, 209, 0.28);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.62);
  color: #63879f;
  box-shadow: 0 6px 14px rgba(75, 126, 161, 0.06);
  font-family: Arial, sans-serif;
  font-size: 0.67rem;
  font-weight: 500;
  text-decoration: none;
}


/* زر تشغيل وإيقاف الصوت */

.music-button {
  position: fixed;
  z-index: 120;
  right: max(
    15px,
    calc((100vw - 540px) / 2 + 15px)
  );
  bottom: 18px;
  display: grid;
  width: 46px;
  height: 46px;
  padding: 0;
  place-items: center;
  border: 1px solid rgba(112, 166, 204, 0.42);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.88);
  color: var(--blue-deep);
  box-shadow: 0 9px 25px rgba(63, 109, 141, 0.18);
  backdrop-filter: blur(8px);
  font-family: Georgia, serif;
  font-size: 1.35rem;
  font-weight: 700;
  cursor: pointer;
}


.music-button.playing {
  animation: pulse 1.8s ease-in-out infinite;
}


@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.08);
  }
}


/* الشاشات الصغيرة */

@media (max-width: 370px) {

  .cloud-section {
    padding-inline: 22px;
  }

  .countdown-grid {
    gap: 5px;
  }

  .countdown-item {
    min-height: 74px;
  }

  .countdown-item strong {
    font-size: 1.25rem;
  }

  .date-display {
    gap: 9px;
  }

  .date-display strong {
    width: 88px;
    height: 88px;
  }

  .baby-blend {
    width: calc(100% + 44px);
    margin-inline: -22px;
  }

}


/* تقليل الحركة لمن يفعّل هذا الخيار */

@media (prefers-reduced-motion: reduce) {

  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }

}
