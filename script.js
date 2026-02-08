let clickedSongs = new Set();

function initialize() {
  document.getElementById("menu").classList.remove("hidden");
}

function showMode(mode) {
  const content = document.getElementById("content");

  if (mode === "tennis") {
    content.innerHTML = `
      <h3>Tennis Intelligence Mode</h3>
      <p id="tennisFact">Click below to receive knowledge.</p>
      <button onclick="tennisFact()">Drop Fact</button>
    `;
  }

  if (mode === "cole") {
    clickedSongs.clear();

    content.innerHTML = `
      <h3>Cole Mode</h3>
      <p>Select all tracks to unlock Round 2.</p>

      <button onclick="coleVibe('Love Yours')">Love Yours</button>
      <button onclick="coleVibe('No Role Modelz')">No Role Modelz</button>
      <button onclick="coleVibe('Wet Dreamz')">Wet Dreamz</button>
      <button onclick="coleVibe('Power Trip')">Power Trip</button>

      <p id="coleResult"></p>

      <button id="round2Button" class="hidden" onclick="startRound2()">
        Proceed to Round 2
      </button>

      <div id="round2Area"></div>
    `;
  }

  if (mode === "dev") {
    content.innerHTML = `
      <h3>Developer Diagnostics</h3>
      <p id="devResult">Run system test.</p>
      <button onclick="breakSystem()">Execute</button>
      <div id="matrix" class="matrix hidden"></div>
    `;
  }
}

function tennisFact() {
  const facts = [
    "The longest tennis match lasted 11 hours and 5 minutes.",
    "Tennis balls were originally white or black.",
    "Pressure is a privilege – Billie Jean King",
    "Champions adjust. They don’t complain."
  ];

  document.getElementById("tennisFact").innerText =
    facts[Math.floor(Math.random() * facts.length)];
}

function coleVibe(song) {
  const responses = {
    "Love Yours": {
      lyric: "“No such thing as a life that's better than yours.”",
      analysis: "Gratitude over comparison. Peace over ego🔥🔥"
    },
    "No Role Modelz": {
      lyric: "“Fool me one time, shame on you…”",
      analysis: "Learning from illusion instead of repeating cycles ^_^"
    },
    "Wet Dreamz": {
    lyric: "“I ain’t never did this before.”",
    analysis: "Same Cole Same 😒.It captures the awkward reality of youth."
    },
    "Power Trip": {
      lyric: "“Would you believe me if I said I’m in love?”",
      analysis: "... speaks for itself tbh!"
    }
  };

  const selected = responses[song];

  document.getElementById("coleResult").innerHTML =
    `<strong>${selected.lyric}</strong><br><br>${selected.analysis}`;

  clickedSongs.add(song);

  if (clickedSongs.size === 4) {
    document.getElementById("round2Button").classList.remove("hidden");
  }
}

function startRound2() {
  document.getElementById("round2Area").innerHTML = `
    <hr>
    <h4>Round 2: Quick Q&A </h4>

    <p>Is "The Fall Off" gonna be a classic?</p>
    <button onclick="fallOffAnswer('Nahh.')">Nahh</button>
    <button onclick="fallOffAnswer('Need to hear it first.')">Need to hear it first</button>
    <button onclick="fallOffAnswer('Already legendary.')">Already legendary</button>

    <p id="fallOffResult"></p>
  `;
}

function fallOffAnswer(answer) {
  document.getElementById("fallOffResult").innerText =
    "Response logged: " + answer;
}

function breakSystem() {
  document.getElementById("devResult").innerText =
    "OOP system crashed.";

  const matrix = document.getElementById("matrix");
  matrix.classList.remove("hidden");

  let code = "";
  const chars = "01";

  for (let i = 0; i < 500; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
    if (i % 50 === 0) code += "<br>";
  }

  matrix.innerHTML = code;
}

