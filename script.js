/* ========================================
   إعدادات كرت استقبال يس
======================================== */

const EVENT_DATE =
  new Date("2027-07-07T19:00:00+03:00").getTime();


const RSVP_NUMBER = "97058494977";


/* ========================================
   الحصول على عناصر الصفحة
======================================== */

const music =
  document.getElementById("music");


const cover =
  document.getElementById("cover");


const intro =
  document.getElementById("intro");


const handVideo =
  document.getElementById("handVideo");


const revealVideo =
  document.getElementById("revealVideo");


const openButton =
  document.getElementById("openInvitation");


const musicButton =
  document.getElementById("musicButton");


const invitation =
  document.getElementById("invitation");


const guestNameInput =
  document.getElementById("guestName");


const rsvpButton =
  document.getElementById("rsvpButton");


/* ========================================
   فتح الدعوة بعد الضغط على يد يس
======================================== */

async function openInvitation() {

  /* منع الضغط مرتين */

  openButton.disabled = true;


  /* إخفاء صورة الغلاف */

  cover.hidden = true;


  /* إظهار فيديو حركة اليد */

  handVideo.classList.add("visible");


  /* إعادة الفيديو إلى بدايته */

  handVideo.currentTime = 0;


  /* مستوى صوت الطفل والموسيقى */

  music.volume = 0.9;


  /*
    تشغيل الصوت بعد الضغط مباشرة.
    الضغط على اليد يسمح بتشغيل الصوت
    على أجهزة الهاتف.
  */

  try {

    await music.play();

    musicButton.textContent = "♫";

    musicButton.classList.add("playing");

  } catch (error) {

    console.log(
      "تعذر تشغيل الصوت تلقائيًا:",
      error
    );

    musicButton.textContent = "♪";

    musicButton.classList.remove("playing");

  }


  /* إظهار زر تشغيل وإيقاف الصوت */

  musicButton.hidden = false;


  /* تشغيل فيديو اليد */

  try {

    await handVideo.play();

  } catch (error) {

    console.log(
      "تعذر تشغيل فيديو اليد:",
      error
    );


    /* إعادة الغلاف إذا لم يعمل الفيديو */

    cover.hidden = false;

    handVideo.classList.remove("visible");

    openButton.disabled = false;

  }

}


/* تشغيل الفتح عند الضغط على يد يس */

openButton.addEventListener(
  "click",
  openInvitation,
  {
    once: true
  }
);


/* ========================================
   الانتقال من فيديو اليد إلى الفيديو الثاني
======================================== */

handVideo.addEventListener(
  "ended",
  async function () {

    /* إخفاء فيديو اليد */

    handVideo.classList.remove("visible");


    /* إظهار الفيديو الثاني */

    revealVideo.classList.add("visible");


    /* إعادة الفيديو الثاني إلى بدايته */

    revealVideo.currentTime = 0;


    /* تشغيل الفيديو الثاني */

    try {

      await revealVideo.play();

    } catch (error) {

      console.log(
        "تعذر تشغيل الفيديو الثاني:",
        error
      );


      /*
        إذا لم يعمل الفيديو الثاني،
        يتم فتح الدعوة مباشرة.
      */

      showInvitation();

    }

  }
);


/* ========================================
   إظهار الدعوة بعد انتهاء الفيديو الثاني
======================================== */

revealVideo.addEventListener(
  "ended",
  showInvitation
);


function showInvitation() {

  /* إيقاف الفيديوهات */

  handVideo.pause();

  revealVideo.pause();


  /* إخفاء صفحة الفيديو */

  intro.hidden = true;


  /* إظهار صفحات الدعوة */

  invitation.hidden = false;


  /* العودة إلى أول صفحة في الدعوة */

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant"
  });

}


/* ========================================
   زر تشغيل وإيقاف الصوت
======================================== */

musicButton.addEventListener(
  "click",
  async function () {

    /*
      إذا كان الصوت متوقفًا،
      يتم تشغيله.
    */

    if (music.paused) {

      music.volume = 0.9;


      try {

        await music.play();

        musicButton.textContent = "♫";

        musicButton.classList.add("playing");

        musicButton.setAttribute(
          "aria-label",
          "إيقاف الموسيقى"
        );

      } catch (error) {

        console.log(
          "تعذر تشغيل الصوت:",
          error
        );

      }

    } else {

      /*
        إذا كان الصوت يعمل،
        يتم إيقافه.
      */

      music.pause();

      musicButton.textContent = "♪";

      musicButton.classList.remove("playing");

      musicButton.setAttribute(
        "aria-label",
        "تشغيل الموسيقى"
      );

    }

  }
);


/* ========================================
   إيقاف حركة زر الموسيقى عند انتهاء الصوت
======================================== */

music.addEventListener(
  "pause",
  function () {

    musicButton.textContent = "♪";

    musicButton.classList.remove("playing");

    musicButton.setAttribute(
      "aria-label",
      "تشغيل الموسيقى"
    );

  }
);


music.addEventListener(
  "play",
  function () {

    musicButton.textContent = "♫";

    musicButton.classList.add("playing");

    musicButton.setAttribute(
      "aria-label",
      "إيقاف الموسيقى"
    );

  }
);


/* ========================================
   تأكيد الحضور عبر واتساب
======================================== */

rsvpButton.addEventListener(
  "click",
  function () {

    /*
      الحصول على الاسم المكتوب.
      إذا لم يكتب الزائر اسمه،
      تظهر كلمة ضيف.
    */

    const guestName =
      guestNameInput.value.trim();


    const finalName =
      guestName || "ضيف";


    /*
      نص رسالة تأكيد الحضور.
    */

    const message =
      encodeURIComponent(
`تأكيد حضور استقبال يس
الاسم: ${finalName}
التاريخ: 07/07/2027
الساعة: 7:00 مساءً`
      );


    /*
      إنشاء رابط واتساب.
    */

    const whatsappURL =
      `https://wa.me/${RSVP_NUMBER}?text=${message}`;


    /*
      فتح واتساب.
    */

    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );

  }
);


/* ========================================
   السماح بإرسال تأكيد الحضور بزر Enter
======================================== */

guestNameInput.addEventListener(
  "keydown",
  function (event) {

    if (event.key === "Enter") {

      event.preventDefault();

      rsvpButton.click();

    }

  }
);


/* ========================================
   العد التنازلي
======================================== */

function updateCountdown() {

  /*
    حساب الوقت المتبقي حتى موعد الاستقبال.
  */

  const currentTime =
    Date.now();


  const remaining =
    Math.max(
      0,
      EVENT_DATE - currentTime
    );


  /*
    تحويل الوقت إلى:
    أيام، ساعات، دقائق، ثوانٍ.
  */

  const days =
    Math.floor(
      remaining / 86400000
    );


  const hours =
    Math.floor(
      (remaining / 3600000) % 24
    );


  const minutes =
    Math.floor(
      (remaining / 60000) % 60
    );


  const seconds =
    Math.floor(
      (remaining / 1000) % 60
    );


  /*
    وضع النتائج داخل الدوائر.
  */

  document
    .getElementById("days")
    .textContent =
      String(days).padStart(2, "0");


  document
    .getElementById("hours")
    .textContent =
      String(hours).padStart(2, "0");


  document
    .getElementById("minutes")
    .textContent =
      String(minutes).padStart(2, "0");


  document
    .getElementById("seconds")
    .textContent =
      String(seconds).padStart(2, "0");

}


/* تشغيل العد التنازلي فور فتح الموقع */

updateCountdown();


/* تحديث العد التنازلي كل ثانية */

setInterval(
  updateCountdown,
  1000
);


/* ========================================
   معالجة أخطاء تحميل الفيديو
======================================== */

handVideo.addEventListener(
  "error",
  function () {

    console.log(
      "لم يتم تحميل ملف baby-hand.mp4"
    );

  }
);


revealVideo.addEventListener(
  "error",
  function () {

    console.log(
      "لم يتم تحميل ملف reveal.mp4"
    );

    /*
      إذا تعذر تحميل الفيديو الثاني،
      تظهر الدعوة مباشرة بعد فيديو اليد.
    */

    if (handVideo.ended) {

      showInvitation();

    }

  }
);


/* ========================================
   معالجة خطأ تحميل الصوت
======================================== */

music.addEventListener(
  "error",
  function () {

    console.log(
      "لم يتم تحميل ملف yaseen-calm-baby.mp3"
    );

    musicButton.hidden = true;

  }
);


/* ========================================
   ربط الإعجابات والمشاهدات مع Supabase
======================================== */

const SUPABASE_URL = "https://jzswtwicvgppisasrkqe.supabase.co";
const SUPABASE_KEY = "sb_publishable_qJGOZoWBOrZ952qJnYTqNg_oaMSIStu";
const INVITATION_SLUG = "babyboy";

const likeButton = document.getElementById("likeButton");
const likeCount = document.getElementById("likeCount");

function getVisitorKey() {
  const storageKey = "invitation_visitor_key";
  let visitorKey = localStorage.getItem(storageKey);

  if (!visitorKey) {
    visitorKey = self.crypto?.randomUUID?.() ||
      "visitor-" + Date.now() + "-" + Math.random().toString(36).slice(2);
    localStorage.setItem(storageKey, visitorKey);
  }

  return visitorKey;
}

const VISITOR_KEY = getVisitorKey();

async function callInvitationRpc(functionName, body) {
  const response = await fetch(
    SUPABASE_URL + "/rest/v1/rpc/" + functionName,
    {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: "Bearer " + SUPABASE_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }
  );

  if (!response.ok) {
    throw new Error(await response.text());
  }

  const text = await response.text();
  return text ? JSON.parse(text) : null;
}

function firstResult(value) {
  return Array.isArray(value) ? value[0] : value;
}

function updateLikeDisplay(stats) {
  const result = firstResult(stats) || {};
  const count = result.likes_count ?? result.like_count ?? result.likes ?? 0;
  const liked = Boolean(result.liked ?? result.has_liked ?? result.is_liked);

  likeCount.textContent = String(count);
  likeButton.classList.toggle("liked", liked);
  likeButton.querySelector("span").textContent = liked ? "♥" : "♡";
  likeButton.setAttribute("aria-pressed", String(liked));
}

async function refreshInvitationStats() {
  const stats = await callInvitationRpc("get_invitation_stats", {
    p_slug: INVITATION_SLUG,
    p_visitor_key: VISITOR_KEY
  });
  updateLikeDisplay(stats);
}

async function startInvitationTracking() {
  try {
    await callInvitationRpc("record_invitation_view", {
      p_slug: INVITATION_SLUG,
      p_visitor_key: VISITOR_KEY
    });
    await refreshInvitationStats();
    likeButton.hidden = false;
  } catch (error) {
    console.error("تعذر تحميل بيانات الدعوة:", error);
  }
}

likeButton.addEventListener("click", async function () {
  if (likeButton.disabled) return;
  likeButton.disabled = true;

  try {
    const result = await callInvitationRpc("toggle_invitation_like", {
      p_slug: INVITATION_SLUG,
      p_visitor_key: VISITOR_KEY
    });
    updateLikeDisplay(result);
    await refreshInvitationStats();
  } catch (error) {
    console.error("تعذر تسجيل الإعجاب:", error);
  } finally {
    likeButton.disabled = false;
  }
});

startInvitationTracking();
