
// audio when logo is clicked
const image = document.getElementById('idiote');
const audio = document.getElementById('prototype');

image.addEventListener('click', () => {
  audio.play();
});

// Function to fetch a random line from an array
function getRandomLine(lines) {
  return lines[Math.floor(Math.random() * lines.length)];
}

// Function to read the file and display a random line
async function displayRandomLine() {
  const response = await fetch('../assets/random_messages.txt');
  const text = await response.text();
  const lines = text.split('\n').filter(line => line.trim() !== '');

  const randomLine = getRandomLine(lines);
  document.getElementById('random-subtitle').textContent = randomLine;
}

// Call the function to display random line
displayRandomLine();

// twittermoji
twemoji.parse(
  document.body,
  { base: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/' }
)

