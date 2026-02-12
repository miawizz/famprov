/* FAMPROV app skeleton
   Next step: paste your full, exact game copy into GAMES exactly as written.
   Do not “clean up” spacing or punctuation unless you want it changed.
*/

const GAMES = [
  // Example entry format (delete this example after you paste real data)
  // {
  //   number: 1,
  //   category: "Warm-Up / Connecting Games",
  //   title: "Counting to Ten",
  //   text: `How to play
  // Try to count to ten as a pair or group without speaking at the same time...`,
  //   videoUrl: "" // later, set to "videos/counting-to-ten.mp4" or a full URL
  // },
];

const els = {
  categorySelect: document.getElementById("categorySelect"),
  gameSelect: document.getElementById("gameSelect"),
  gameCard: document.getElementById("gameCard"),
  gamePill: document.getElementById("gamePill"),
  gameNumber: document.getElementById("gameNumber"),
  gameTitle: document.getElementById("gameTitle"),
  gameText: document.getElementById("gameText"),
  gameVideo: document.getElementById("gameVideo"),
  gameVideoSource: document.getElementById("gameVideoSource"),
  videoEmpty: document.getElementById("videoEmpty"),
};

function uniqueCategories(games) {
  const set = new Set(games.map(g => g.category));
  return Array.from(set);
}

function gamesForCategory(games, category) {
  return games.filter(g => g.category === category);
}

function escapeHTML(str) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function renderTextPreserveLines(text) {
  // We keep line breaks exactly as stored.
  // Using pre-wrap in CSS, so we can just set textContent.
  els.gameText.textContent = text || "";
}

function setVideo(url) {
  const hasUrl = Boolean(url && String(url).trim().length);
  if (!hasUrl) {
    els.gameVideo.classList.add("hidden");
    els.videoEmpty.classList.remove("hidden");
    els.gameVideoSource.src = "";
    try { els.gameVideo.load(); } catch (e) {}
    return;
  }

  els.videoEmpty.classList.add("hidden");
  els.gameVideo.classList.remove("hidden");
  els.gameVideoSource.src = url;
  try { els.gameVideo.load(); } catch (e) {}
}

function populateCategories() {
  const cats = uniqueCategories(GAMES);

  // Reset
  els.categorySelect.innerHTML = `<option value="" selected disabled>Select a category</option>`;

  cats.forEach((cat) => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    els.categorySelect.appendChild(opt);
  });
}

function populateGamesDropdown(category) {
  const list = gamesForCategory(GAMES, category);

  els.gameSelect.disabled = false;
  els.gameSelect.innerHTML = `<option value="" selected disabled>Select a game</option>`;

  list.forEach((g, idx) => {
    const opt = document.createElement("option");
    opt.value = String(g.number);
    opt.textContent = g.title;
    els.gameSelect.appendChild(opt);
  });
}

function showGameByNumber(number) {
  const g = GAMES.find(x => String(x.number) === String(number));
  if (!g) return;

  els.gameCard.classList.remove("hidden");
  els.gamePill.textContent = g.category || "";
  els.gameNumber.textContent = `#${g.number}`;
  els.gameTitle.textContent = g.title || "";
  renderTextPreserveLines(g.text || "");
  setVideo(g.videoUrl || "");

  // Scroll into view on mobile
  els.gameCard.scrollIntoView({ behavior: "smooth", block: "start" });
}

function init() {
  populateCategories();

  els.categorySelect.addEventListener("change", function () {
    const cat = els.categorySelect.value;
    els.gameCard.classList.add("hidden");
    els.gameSelect.disabled = true;
    els.gameSelect.innerHTML = `<option value="" selected disabled>Select a game</option>`;
    if (cat) populateGamesDropdown(cat);
  });

  els.gameSelect.addEventListener("change", function () {
    const n = els.gameSelect.value;
    if (n) showGameByNumber(n);
  });
}

init();
