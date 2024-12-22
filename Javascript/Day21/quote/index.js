const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
  "Do not wait to strike till the iron is hot; but make it hot by striking. - William Butler Yeats",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "In the middle of every difficulty lies opportunity. - Albert Einstein",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "Act as if what you do makes a difference. It does. - William James",
  "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
  "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "You miss 100% of the shots you don’t take. - Wayne Gretzky",
  "Whether you think you can or you think you can’t, you’re right. - Henry Ford",
  "The future depends on what you do today. - Mahatma Gandhi",
  "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
  "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
  "If you are not willing to risk the usual, you will have to settle for the ordinary. - Jim Rohn",
  "The best way to predict the future is to invent it. - Alan Kay",
  "Don’t Let Yesterday Take Up Too Much Of Today. - Will Rogers",
  "You learn more from failure than from success. Don’t let it stop you. Failure builds character. - Unknown",
  "It’s not whether you get knocked down, it’s whether you get up. - Vince Lombardi",
];

function getRandomHexColor() {
  const color = document.querySelector("body");
  const random_color = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
  color.style.backgroundColor = random_color;

  // const box_color = document.getElementsByClassName("quote-box");
  // box_color.style.borderLeftColor = random_color;

}
setInterval(getRandomHexColor, 2000);

function generate_quote() {
  const text = document.getElementById("root");
  const index = Math.floor(Math.random(0) * 20 + 1);
  text.innerHTML = quotes[index];
}
setInterval(generate_quote, 2000);
