let index = 0;

const questions = [
  {
    question:
      "Jika bisnismu bisa menjadi karakter dalam sebuah cerita, ia akan menjadi...",
    options: [
      "A. Pahlawan yang selalu siap membantu dan memperjuangkan kebaikan.",
      "B. Penyihir cerdik yang selalu punya trik baru untuk menarik perhatian.",
    ],
  },
  {
    question:
      "Ketika memilih nama untuk bisnismu, kamu lebih tertarik pada yang terdengar...",
    options: [
      "A. Hangat dan ramah seperti panggilan dari teman lama.",
      "B. Unik dan menarik perhatian seperti mantra ajaib.",
    ],
  },
  {
    question:
      "Di antara suasana berikut, mana yang paling mendeskripsikan suasana yang kamu inginkan di tempat bisnismu?",
    options: [
      "A. Hangat dan santai seperti berada di ruang tamu sendiri.",
      "B. Dinamis dan penuh semangat seperti di pesta perayaan.",
    ],
  },
  {
    question: "Jika bisnismu bisa menjadi makanan, ia akan menjadi...",
    options: [
      "A. Sup kental yang menghangatkan hati dan perut.",
      "B. Hidangan eksotis yang menggugah selera dan penasaran.",
    ],
  },
  {
    question:
      "Saat membangun tim untuk bisnismu, karakter yang kamu cari adalah...",
    options: [
      "A. Pendengar yang baik dan selalu siap membantu, seperti sahabat setia.",
      "B. Orang yang penuh ide-ide segar dan kreatif, seperti penemu baru.",
    ],
  },
  {
    question: "Jika bisnismu bisa menjadi hewan, ia akan menjadi...",
    options: [
      "A. Anjing peliharaan yang setia dan selalu siap memberikan kebahagiaan.",
      "B. Burung hantu yang cerdas dan selalu berpikir di luar kotak.",
    ],
  },
  {
    question:
      "Ketika berhadapan dengan tantangan, kamu lebih cenderung untuk...",
    options: [
      "A. Mencari dukungan dari komunitas dan berkolaborasi untuk menemukan solusi.",
      "B. Membuat strategi baru dan berinovasi untuk menemukan jalan keluar.",
    ],
  },
  {
    question:
      "Saat membayangkan logo untuk bisnismu, kamu lebih suka yang terlihat...",
    options: [
      "A. Sederhana dan mudah diingat seperti senyuman yang hangat.",
      "B. Berwarna-warni dan unik seperti lukisan abstrak yang menarik perhatian.",
    ],
  },
  {
    question: "Jika bisnismu bisa menjadi lagu, ia akan menjadi...",
    options: [
      "A. Lagu yang penuh makna dan menyentuh hati, seperti lagu tema dari film favoritmu.",
      "B. Lagu yang penuh energi dan ritme, seperti lagu yang membuatmu ingin menari.",
    ],
  },
  {
    question: "Saat menghadapi kegagalan, kamu lebih suka...",
    options: [
      "A. Mengambil hikmah dari pengalaman dan melanjutkan perjalanan dengan semangat baru.",
      "B. Mencari solusi baru dan berpikir kreatif untuk mengatasi masalah.",
    ],
  },
  {
    question: "Jika bisnismu bisa menjadi warna, ia akan menjadi...",
    options: [
      "A. Warna yang menenangkan dan menghadirkan kedamaian, seperti biru langit yang jernih.",
      "B. Warna yang mencolok dan memikat perhatian, seperti merah menyala yang membara.",
    ],
  },
  {
    question: "Ketika memikirkan tentang kesuksesan, kamu lebih fokus pada...",
    options: [
      "A. Pengaruh positif yang bisa kamu berikan kepada orang lain dan dunia.",
      "B. Prestasi pribadi dan keunggulan dalam hal inovasi dan kreativitas.",
    ],
  },
];

const answers = [];

const handleNext = () => {
  index++;
  const question = questions[index];
  updateUI(question);
};

const handlePrev = () => {
  if (index < 1) {
    window.location.href = "/story.html";
  }
  index--;
  const question = questions[index];
  updateUI(question);
};

const updateUI = (question) => {
  const questionText = document.getElementById("question");
  const optionsContainer = document.getElementById("options");
  const progressWidth = document.getElementById("progress");
  const nextButton = document.getElementById("button-next");

  questionText.innerHTML = question.question;
  if(answers[index] !== undefined) {
    nextButton.classList.remove('disabled');
  } else {
    nextButton.classList.add('disabled');
  }
  const optionList = question.options.map((e, i) => {
    const classActive = answers[index] === i ? "selected" : "";
    return `
      <div class="card shadow-sm border border-0 answer ${classActive}" onclick="handleSelect(${i})">
        <div class="card-body">${e}</div>
      </div>
    `;
  });
  optionsContainer.innerHTML = optionList.join(" ");
  const width = ((index + 1) / questions.length) * 100;
  progressWidth.style.width = `${Math.round(width)}%`;
};

window.onload = function (event) {
  updateUI(questions[0]);
};

// select
const handleSelect = (value) => {
  answers[index] = value;
  updateUI(questions[index]);
};
