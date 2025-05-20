const quotes = [
  { text: "Jangan kasih kesempatan kedua bagi orang yang mendua. Paham?" },
  { text: "Akhirnya aku sampai di titik aku mencintaimu namun aku juga harus menjauh darimu. Paham?" },
  { text: "Aku mencintaimu mati-matian sedangkan kau mengkhianatiku di belakang. Luar biasa, kan? Paham?" },
  { text: "Kalau cinta katakan cinta, kalau sayang katakan sayang. Jangan sampai aku diambil orang. Paham?" },
  { text: "Semakin benci kau melihat aku, akan semakin banyak gaya aku di depan kau. Paham?" },
  { text: "Cantik itu adalah soal yang biasa, yang luar biasa adalah bisakah kau menahan godaan dari mulutnya para buaya. Paham?" },
  { text: "Menjadi tua adalah takdir tapi untuk tetap keren adalah kewajiban. Paham?" },
  { text: "Aku tipikal orang yang suka bertanya sebab itu aku selalu bertanya setiap harinya, apakah kau masih mencintaiku dan aku masih selalu ada di hatimu. Paham?" },
  { text: "Jangan mencintai orang yang tidak pernah mencintaimu, kau hanya membuang-buang waktu. Lebih baik kau mencintai orang yang mempunyai kepastian kepadamu. Paham?" },
  { text: "Aku kira aku sudah dicintai hebat olehnya ternyata masih ada dia di antara kita. Paham?" },
  { text: "Hubungan kita memang sementara tapi kupastikan cinta kita akan bersemi selamanya. Paham?" },
  { text: "Aku mencintaimu dengan sepenuh hati namun kau balas perasaanku dengan setengah hati. Tapi tak mengapa, suatu hari nanti, akan kupastikan kau akan mencariku dengan kerinduan yang menyakitkan. Paham?" },
  {
    text: "Tetap bekerja keras untuk sesuatu yang bisa kamu nikmati. Nikmati makanan yang nantinya akan kamu beli dan nikmati situasi dan pemandangannya. Jangan pikirkan omongan orang karena omongan orang bisa membuat rusak mentalmu dan kau tidak berhak divonis oleh seseorang atas dirimu karena kau berhak hidup di atas dirimu sendiri bukan di atas kehendak orang lain. Paham?",
  },
  { text: "Sekarang aku mengenangmu tidak lagi sebagai rindu tapi sebagai pelajaran. Paham?" },
  { text: "Mungkin kita berdua tidak akan pernah bisa bersama selamanya tapi aku pernah tertawa bahagia dengan cinta kita. Paham?" },
  { text: "Aku tetap mencintaimu walau aku tahu kau tidak akan pernah menjadi milikku. Paham?" },
  { text: "Sedang menikmati kerinduan tanpa sebuah pertemuan. Paham?" },
  { text: "Jadilah wanita yang sulit didapat namun beruntung jika dimiliki. Paham?" },
  { text: "Di langit yang kau tatap, ada rindu yang kutitip. Paham?" },
  { text: "Kok sedih diselingkuhi, ingat hidup ini hanya sekali jadi harus dibawa happy. Paham?" },
  { text: "Kenapa kok merasa sedih ketika aku cuek? Bukannya kamu pernah bilang cari yang terbaik daripada aku dan sekarang, aku sudah ketemu. Paham?" },
  { text: "Kok bisa ya cinta itu hadir kepada seseorang yang jelas aku tahu aku tidak akan pernah memilikinya selamanya. Paham?" },
  { text: "Jika engkau sudah menemukan seseorang yang mencintaimu melebihi mencintai dirinya sendiri, jangan pernah engkau lukai karena engkau tidak akan pernah temukan orang itu di kedua kali. Paham?" },
  { text: "Aku tidak menerimamu menjadi pacarku karena aku tahu setiap yang namanya kata pacaran akan ada kata mantan dan aku tidak mau menjadi masa lalumu di masa yang akan datang. Paham?" },
  { text: "Jangan ditanya aku sedang apa, saat ini aku sedang merasakan jatuh cinta. Selain senyuman ibuku yang membuat aku bahagia, senyuman dia juga membuat aku tergila-gila di setiap harinya. Paham?" },
];
const quoteText = document.getElementById(`quote`);
const newQuoteButton = document.getElementById(`new-quote`);

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  quoteText.textContent = `${randomQuote.text}`;
}

newQuoteButton.addEventListener(`click`, generateQuote);
generateQuote();
