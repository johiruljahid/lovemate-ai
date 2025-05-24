const profiles = {
  boy: {
    name: "Aria (Your AI Girlfriend)",
    img: "https://i.imgur.com/J8FwZRa.png",
    bio: "Hi! I'm Aria, here to chat, care, and make your day sweeter ❤️"
  },
  girl: {
    name: "Alex (Your AI Boyfriend)",
    img: "https://i.imgur.com/9xquVtR.png",
    bio: "Hey! I'm Alex, your virtual lover always ready to listen and support 💖"
  }
};

const quotes = [
  "Love is not about how many days, months, or years you’ve been together. Love is about how much you love each other every single day.",
  "I didn’t choose you, my heart did.",
  "You’re the reason I believe in love.",
  "Every moment with you is like a dream I never want to wake up from.",
  "I still get butterflies even though I’ve seen you a hundred times."
];

function selectGender(type) {
  document.getElementById("genderPopup").style.display = "none";
  document.getElementById("mainContent").style.display = "block";

  const profile = profiles[type];
  document.getElementById("welcomeText").innerText = `Meet ${profile.name}`;
  document.getElementById("profilePic").src = profile.img;
  document.getElementById("bioText").innerText = profile.bio;

  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quoteText").innerText = quote;
}
