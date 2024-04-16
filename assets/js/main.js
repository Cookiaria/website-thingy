// audio when logo is clicked
const logoimage = document.getElementById('idiote');
const meow = document.getElementById('prototype');

logoimage.addEventListener('click', () => {
  meow.play();
});

// random subtitle generator !!
function getRandomLine(lines) {
  return lines[Math.floor(Math.random() * lines.length)].replace(/^#.*/, '').trim();
}

async function displayRandomLine() {
  const response = await fetch('/assets/random_messages.txt');
  const text = await response.text();
  const lines = text.split('\n').filter(line => line.trim() !== '' && !line.startsWith('#'));

  const randomLine = getRandomLine(lines);
  const parser = new DOMParser();
  const dom = parser.parseFromString(randomLine, 'text/html');
  document.getElementById('random-subtitle').innerHTML = "";
  document.getElementById('random-subtitle').append(...dom.body.childNodes);
}


displayRandomLine();

// twittermoji
twemoji.parse(
  document.body,
  { base: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/' }
)


// scroll to top xd xd 
function backtotop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// funny console log stuff because why not
console.log("what are you doing here");

console.image = function(url, size = 100) {
  const image = new Image();
  image.src = url;
  image.onload = function() {
    var style = [
      'font-size: 1px;',
      'padding: ' + this.height/100*size + 'px ' + this.width/100*size + 'px;',
      'background: url('+ url +') no-repeat;',
      'background-size: contain;'
     ].join(' ');
     console.log('%c ', style);
  };
};

function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && (rawFile.status === 200 || rawFile.status == 0)) {
      var allText = rawFile.responseText;
      callback(allText);
    }
  }
  rawFile.send(null);
}

readTextFile('/assets/crack.txt', function(crack){
  console.image(crack, 40);
});

console.log("caught in 8K UHD dolby digital surround sound HDR RTX 4090");

