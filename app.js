/* FAMPROV app
   Simple collapsible category + game menu
   Content comes from games.js
*/

const els = {
  menu: document.getElementById("menu"),
  welcomeText: document.getElementById("welcomeText")
};

function uniqueCategories(games) {
  return Array.from(new Set(games.map((g) => g.category)));
}

function gamesForCategory(games, category) {
  return games.filter((g) => g.category === category);
}

function escapeHTML(str) {
  return String(str || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function formatText(text) {
  if (!text) return "";

  let formatted = escapeHTML(text);

  // bold markdown-style headings
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  // bullet lines
  formatted = formatted.replace(/^•\s(.+)$/gm, '<div class="game-bullet">• $1</div>');

  // preserve spacing
  formatted = formatted.replace(/\n{2,}/g, "<br><br>");
  formatted = formatted.replace(/\n/g, "<br>");

  return formatted;
}

function renderWelcome() {
  if (!els.welcomeText) return;
  els.welcomeText.innerHTML = formatText(WELCOME_TEXT || "");
}

function renderMenu() {
  if (!els.menu) return;

  const cats = uniqueCategories(GAMES);

  const html = cats.map((cat) => {
    const items = gamesForCategory(GAMES, cat).map((g) => {
      return `
        <details class="menu-game">
          <summary class="menu-item">
            <span class="menu-item__title"><strong>${escapeHTML(g.title)}</strong></span>
          </summary>
          <div class="inline-game">
            <div class="game-pill">${escapeHTML(g.category)}</div>
            <div class="game-title"><strong>${escapeHTML(g.title)}</strong></div>
            <div class="game-text">${formatText(g.text)}</div>
          </div>
        </details>
      `;
    }).join("");

    return `
      <details class="menu-cat">
        <summary class="menu-cat__summary">${escapeHTML(cat)}</summary>
        <div class="menu-cat__items">${items}</div>
      </details>
    `;
  }).join("");

  els.menu.innerHTML = html;

  // only one game open at a time
  els.menu.querySelectorAll(".menu-game").forEach((details) => {
    details.addEventListener("toggle", () => {
      if (details.open) {
        els.menu.querySelectorAll(".menu-game").forEach((other) => {
          if (other !== details) other.open = false;
        });
      }
    });
  });
}

function init() {
  renderWelcome();
  renderMenu();
}

init();
