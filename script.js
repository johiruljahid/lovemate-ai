const crushNames = ["Ariana", "Rahul", "Maya", "Zayn", "Nila", "Leo", "Sara", "Asif", "Emily", "Rafi"];

const messages = [
  "Wow! তোমাদের মধ্যে দারুন ম্যাচিং 💞",
  "হতে পারে, চেষ্টা করতে পারো 😉",
  "Hmm... একটু দূরত্ব আছে 😅",
  "না ভাই, ভুলে যাও 😢",
  "তোমার ক্রাশকে মেসেজ দাও এখনই 📲"
];

function generateCrush() {
  const name = document.getElementById("nameInput").value.trim();
  if (name === "") {
    alert("তোমার নাম লিখো আগে!");
    return;
  }

  const randomCrush = crushNames[Math.floor(Math.random() * crushNames.length)];
  const match = Math.floor(Math.random() * 61) + 40; // 40% to 100%
  const msg = messages[Math.floor(Math.random() * messages.length)];

  document.getElementById("crushName").innerText = randomCrush;
  document.getElementById("matchPercent").innerText = match;
  document.getElementById("messageText").innerText = msg;
  document.getElementById("loveBar").style.width = match + "%";

  document.getElementById("resultBox").style.display = "block";
}
