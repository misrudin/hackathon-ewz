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

let scores = {
  "Pahlawan Hangat": 0,
  "Penyihir Kreatif": 0,
  "Sahabat Petualang": 0,
  "Penemu Visioner": 0,
  "Singa Ramah": 0,
  "Burung Hantu Visioner": 0
};

const personaExplanation = {
    "Pahlawan Hangat": {
      "description": "Kamu cenderung mencari bisnis yang bersifat ramah, hangat, dan memberikan pengalaman yang menyentuh hati bagi pelanggan. Kamu mungkin berfokus pada kolaborasi dengan komunitas dan nilai-nilai yang mendalam",
      "businessRecomendation": "Bisnis yang cocok untukmu adalah yang fokus pada pelayanan pelanggan yang hangat dan ramah. Jadikan kepedulian terhadap kebutuhan pelanggan sebagai prioritas utama. Pertimbangkan untuk membangun komunitas loyal melalui layanan pelanggan yang unggul dan dukungan yang hangat.",
      "businessPartner": {
        "persona": "Penemu Visioner",
        "description": "berkolaborasi dengan Penemu Visioner untuk menghadirkan ide-ide inovatif dalam sebuah bisnis yang juga memperhatikan nilai-nilai emosional dan kehangatan. Kedua ini saling melengkapi, dengan Pahlawan Hangat membawa aspek kebersamaan dan kepedulian, sementara Penemu Visioner membawa inovasi dan ketajaman visi"
      },
      "luckyDay": "Selasa",
      "radarChart": "https://storage-dev.mysooltan.co.id/ewz-indibiz-pub-dev/hackathon/group5/pahlawan-hangat.png"
    },
    "Penyihir Kreatif": {
      "description": "Kamu tertarik pada bisnis yang unik, kreatif, dan menarik perhatian. Kamu mungkin lebih fokus pada inovasi dan ide-ide baru yang bisa mengubah cara tradisional berbisnis.",
      "businessRecomendation": "Dengan kekreatifanmu, kamu bisa mengembangkan bisnis yang unik dan inovatif. Manfaatkan kreativitasmu untuk menciptakan produk atau layanan yang menarik dan memukau pelanggan. Jangan ragu untuk berpikir di luar kotak dan mencoba hal-hal baru yang belum pernah dilakukan sebelumnya.",
      "businessPartner": {
        "persona": "Burung Hantu Visioner",
        "description": "berinspirasi oleh Burung Hantu Visioner untuk mengembangkan ide-ide baru yang lebih terstruktur dan mempertimbangkan implikasi jangka panjangnya. Kalian dapat saling memperkaya dengan kreativitas dan ketajaman analitis Kalian, menciptakan sebuah bisnis yang tidak hanya unik, tetapi juga berdaya saing tinggi."
      },
      "luckyDay": "Kamis",
      "radarChart": "https://storage-dev.mysooltan.co.id/ewz-indibiz-pub-dev/hackathon/group5/penyihir-kreatif.png"
    },
    "Sahabat Petualang": {
      "description": "Kamu cenderung memilih bisnis yang menawarkan kenyamanan, kehangatan, dan kesetiaan bagi pelanggan. Kamu mungkin lebih fokus pada hubungan personal dan kolaboratif dengan tim dan pelanggan.",
      "businessRecomendation": "Bisnis yang cocok untukmu adalah yang berfokus pada membangun hubungan yang kuat dengan pelanggan. Dengarkan dengan teliti kebutuhan dan keinginan pelangganmu, dan berikan layanan yang memenuhi ekspektasi Kalian. Pertahankan kesetiaan pelanggan dengan memastikan bahwa Kalian merasa dihargai dan didengar.",
      "businessPartner": {
        "persona": "Singa Ramah",
        "description": "Bekerja sama dengan Singa Ramah untuk membangun hubungan yang kuat dengan pelanggan. Kedua persona ini memahami pentingnya nilai-nilai seperti kepercayaan dan kesetiaan dalam bisnis, dan bersama-sama Kalian dapat menciptakan lingkungan yang hangat dan ramah bagi pelanggan Kalian"
      },
      "luckyDay": "Jumat",
      "radarChart": "https://storage-dev.mysooltan.co.id/ewz-indibiz-pub-dev/hackathon/group5/sahabat-petualang.png"
    },
    "Penemu Visioner": {
      "description": "Kamu tertarik pada bisnis yang dinamis, inovatif, dan selalu mencari cara baru untuk berkembang. Kamu mungkin memiliki visi jauh ke depan dan berani mengambil risiko dalam mencapai tujuan Kamu.",
      "businessRecomendation": "Dengan visi jauh ke depanmu, kamu bisa memimpin bisnis menuju keberhasilan yang besar. Manfaatkan kecerdasan analitis dan visimu untuk mengidentifikasi tren pasar dan peluang pertumbuhan. Jangan ragu untuk mengambil risiko dan berinovasi untuk membedakan bisnismu dari yang lain.",
      "businessPartner": {
        "persona": "Pahlawan Hangat",
        "description": "berkolaborasi dengan Pahlawan Hangat untuk menghadirkan ide-ide inovatif dalam sebuah bisnis yang juga memperhatikan nilai-nilai emosional dan kehangatan. Kedua ini saling melengkapi, dengan Pahlawan Hangat membawa aspek kebersamaan dan kepedulian, sementara Penemu Visioner membawa inovasi dan ketajaman visi"
      },
      "luckyDay": "Sabtu",
      "radarChart": "https://storage-dev.mysooltan.co.id/ewz-indibiz-pub-dev/hackathon/group5/penemu-visioner.png"
    },
    "Singa Ramah": {
      "description": "menunjukkan kecenderungan yang seimbang antara sifat hangat dan kreatif. Kamu mungkin menggabungkan elemen kehangatan personal dengan inovasi yang menarik untuk menciptakan bisnis yang unik dan berdampak.",
      "businessRecomendation": "Dengan sifat ramah dan hangatmu, kamu bisa membangun hubungan yang erat dengan pelanggan. Fokuslah pada memberikan pengalaman pelanggan yang menyenangkan dan berkesan. Jaga agar suasana di tempat bisnismu selalu ramah dan menyambut, sehingga pelanggan merasa seperti di rumah sendiri.",
      "businessPartner": {
        "persona": "Sahabat Petualang",
        "description": "Bekerja sama dengan Sahabat Petualang untuk membangun hubungan yang kuat dengan pelanggan. Kedua persona ini memahami pentingnya nilai-nilai seperti kepercayaan dan kesetiaan dalam bisnis, dan bersama-sama Kalian dapat menciptakan lingkungan yang hangat dan ramah bagi pelanggan Kalian"
      },
      "luckyDay": "Minggu",
      "radarChart": "https://storage-dev.mysooltan.co.id/ewz-indibiz-pub-dev/hackathon/group5/singa-ramah.png"
    },
    "Burung Hantu Visioner": {
      "description": "Kamu yang campuran antara jawaban A dan B, menunjukkan kecenderungan yang seimbang antara sifat cerdas dan kreatif. Kamu mungkin menggabungkan kecerdasan analitis dengan inovasi yang mendalam untuk menciptakan bisnis yang cerdas dan berdaya saing tinggi.",
      "businessRecomendation": "Dengan kepintaran analitis dan visi jangka panjangmu, kamu bisa mengarahkan bisnis ke arah yang sukses. Manfaatkan pengetahuan dan wawasanmu untuk membuat keputusan strategis yang cerdas. Jadikan inovasi dan efisiensi sebagai kunci untuk mencapai tujuan bisnis jangka panjangmu.",
      "businessPartner": {
        "persona": "Penyihir Kreatif",
        "description": "berinspirasi oleh Penyihir Kreatif untuk mengembangkan ide-ide baru yang lebih terstruktur dan mempertimbangkan implikasi jangka panjangnya. Kalian dapat saling memperkaya dengan kreativitas dan ketajaman analitis Kalian, menciptakan sebuah bisnis yang tidak hanya unik, tetapi juga berdaya saing tinggi."
      },
      "luckyDay": "Senin",
      "radarChart": "https://storage-dev.mysooltan.co.id/ewz-indibiz-pub-dev/hackathon/group5/burung-hantu-visioner.png"
    }
  };


const calculateResult = () => {
  answers.forEach((answer, index) => {
    switch (index) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 8:
        if (answer === 0) {
          scores["Pahlawan Hangat"] += 1;
        } else if (answer === 1) {
          scores["Penyihir Kreatif"] += 1;
        }
        break;
      case 5:
      case 6:
      case 7:
      case 9:
      case 10:
      case 11:
        if (answer === 0) {
          scores["Sahabat Petualang"] += 1;
        } else if (answer === 1) {
          scores["Penemu Visioner"] += 1;
        }
        break;
    }

  });

  // Sisipkan penambahan skor untuk pertanyaan-pertanyaan lain di sini

  // Mendapatkan kategori persona dengan skor tertinggi
  let maxScore = 0;
  let topCategory = "";
  for (let category in scores) {
    if (scores[category] > maxScore) {
      maxScore = scores[category];
      topCategory = category;
    }
  }
  if (topCategory === "Pahlawan Hangat" || topCategory === "Penyihir Kreatif" || topCategory === "Penemu Visioner") {
    if (scores["Pahlawan Hangat"] === scores["Penyihir Kreatif"]) {
      topCategory = "Singa Ramah";
    } else if (scores["Penemu Visioner"] === scores["Penyihir Kreatif"]) {
      topCategory = "Burung Hantu Visioner";
    }
  }

  console.log("Top Category: ", topCategory);
  console.log(personaExplanation[topCategory]);
  
}


const handleNext = () => {
  index++;
  if (index === questions.length) {
    calculateResult();
    window.location.href = "/result.html?persona=" + topCategory;
    return;
  }
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
  if (answers[index] !== undefined) {
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
