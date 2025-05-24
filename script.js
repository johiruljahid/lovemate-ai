const femaleCrushes = [
  { name: "Ariana", img: "https://randomuser.me/api/portraits/women/65.jpg" },
  { name: "Maya", img: "https://randomuser.me/api/portraits/women/34.jpg" },
  { name: "Sara", img: "https://randomuser.me/api/portraits/women/21.jpg" },
  { name: "Emily", img: "https://randomuser.me/api/portraits/women/48.jpg" }
];

const maleCrushes = [
  { name: "Zayn", img: "https://randomuser.me/api/portraits/men/10.jpg" },
  { name: "Rahul", img: "https://randomuser.me/api/portraits/men/22.jpg" },
  { name: "Asif", img: "https://randomuser.me/api/portraits/men/33.jpg" },
  { name: "Leo", img: "https://randomuser.me/api/portraits/men/45.jpg" }
];

const messages = [
  "Wow! তোমাদের মধ্যে দারুন ম্যাচিং 💞",
  "হতে পারে, চেষ্টা করতে পারো 😉",
  "Hmm... একটু দূরত্ব আছে 😅",
  "না ভাই, ভুলে যাও 😢",
  "তোমার ক্রাশকে মেসেজ দাও এখনই 📲"
];

function generateCrush() {
  const name = document.getElementById("nameInput").value.trim();
  const gender = document.getElementById("genderSelect").value;

  if (name === "") {
    alert("তোমার নাম লিখো আগে!");
    return;
  }

  const crushList = gender === "female" ? femaleCrushes : maleCrushes;
  const crush = crushList[Math.floor(Math.random() * crushList.length)];
  const match = Math.floor(Math.random() * 61) + 40;
  const msg = messages[Math.floor(Math.random() * messages.length)];

  document.getElementById("crushName").innerText = crush.name;
  document.getElementById("matchPercent").innerText = match;
  document.getElementById("messageText").innerText = msg;
  document.getElementById("loveBar").style.width = match + "%";
  document.getElementById("crushImg").src = crush.img;

  document.getElementById("resultBox").style.display = "block";
}
