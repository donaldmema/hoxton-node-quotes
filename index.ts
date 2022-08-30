import express from "express";

const quotes = [
  {
    id: 1,
    text: "Life is like a box of chocolates, you never know what you are going to get.",
    author: " Forrest Gump",
  },
  {
    id: 2,
    text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle",
  },
  {
    id: 3,
    text: "Life is 10% what happens to me and 90% of how I react to it.",
    author: "Charles Swindoll",
  },
  {
    id: 4,
    text: "The most common way people give up their power is by thinking they don’t have any.",
    author: "Alice Walker",
  },
  {
    id: 5,
    text: "The most difficult thing is the decision to act, the rest is merely tenacity.",
    author: "Amelia Earhart",
  },
  {
    id: 6,
    text: "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
    author: "Confucius",
  },
  {
    id: 7,
    text: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    id: 8,
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    id: 9,
    text: "If you can dream it, you can do it.",
    author: "Walt Disney",
  },
  {
    id: 10,
    text: "The power of imagination makes us infinite.",
    author: "John Muir",
  },
  {
    id: 11,
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    id: 12,
    text: "Does wisdom perhaps appear on the earth as a raven which is inspired by the smell of carrion?",
    author: "Friedrich Nietzsche",
  },
  {
    id: 13,
    text: "If there is no struggle, there is no progress.",
    author: "Frederick Douglass",
  },
  {
    id: 14,
    text: "Blessed is the man who expects nothing, for he shall never be disappointed.",
    author: "Alexander Pope",
  },
  {
    id: 15,
    text: "Laughter is not at all a bad beginning for a friendship, and it is far the best ending for one.",
    author: "Oscar Wilde",
  },
  {
    id: 16,
    text: "We should all be thankful for those people who rekindle the inner spirit.",
    author: "Albert Schweitzer",
  },
  {
    id: 17,
    text: "The best way to predict your future is to create it.",
    author: "Peter Drucker",
  },
];

function get_random(listEl: any[]) {
  return listEl[Math.floor(Math.random() * listEl.length)];
}

const app = express();
const port = 3333;

const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

app.get("/quotes", (req, res) => {
  res.send(quotes);
});

app.get("/quotes/random", (req, res) => {
  res.send(get_random(quotes));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
