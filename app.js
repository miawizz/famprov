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

   formatted = formatted.replace(
  /\[course\]/g,
  '<a href="https://www.playfulheartparenting.com/view/courses/famprov-family-improv-games-for-connection" target="_blank" rel="noopener">course</a>'
);

  formatted = formatted.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  formatted = formatted.replace(/^•\s(.+)$/gm, '<div class="game-bullet">• $1</div>');
   // inline bold
formatted = formatted.replace(/__(.*?)__/g, "<span class='inline-bold'>$1</span>");

  formatted = formatted.replace(
    /^(Optional challenge|Challenge|Example|Examples|Variation|Variations|Fun variations|Helpful guidelines|Helpful guideline|Tips|Tip|Helpful tip|Helpful way to start|Ways to play|Ways to play with more people|Ways to make it easier|Optional variations|Optional prompts|Optional prompts to inspire characters|Optional prompts to get you started|Prompt ideas|Fun twists|Roles|Note|Remember|Keep going|Other fun word-at-a-time variations|Silly scenarios|Opposing emotions|Infomercial|Shark Tank|Convergence|Magic Towel version|Face Filters version|Without sound|With sound|Two-device version|Two-device challenge|Helpful tip before playing|Ways to play anywhere|Example prompts|Tips for creating prompts|Tips for making prompts|Pressure-reducing tip|Warm-up option|Warm-up idea for younger kids|Variation: Nature Narrator)$/gm,
    "<strong>$1</strong>"
  );

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
