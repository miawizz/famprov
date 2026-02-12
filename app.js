/* FAMPROV app skeleton
   Next step: paste your full, exact game copy into GAMES exactly as written.
   Do not “clean up” spacing or punctuation unless you want it changed.
*/

const GAMES = [

{
  number: 1,
  category: "WARM UP / CONNECTING GAMES",
  title: "Counting to Ten",
  text: `How to play
Try to count to ten as a pair or group without speaking at the same time and without deciding who goes next. One person starts by saying “one.” Anyone can say the next number in order, but if two people speak at once, you must start over at “one!”
Example
One person says “one.” Another says “two.” Someone else says “three.” If two people say “four” at the same time, you reset and begin again at “one.”
Optional challenge
- Once you succeed, try counting to twenty for a bigger challenge!
- try looking at the floor so you’re not tempted to signal to each other to speak!`,
  videoUrl: ""
},

{
  number: 2,
  category: "WARM UP / CONNECTING GAMES",
  title: "Rules",
  text: `How to play
Start by counting to five together. Then take turns creating a new silly rule to replace one number.
Example
One player says, “Instead of saying ‘four,’ we’re going to clap.”
You then count together: 1, 2, 3, clap, 5.
Next, another player adds a rule, such as, “Instead of saying ‘two,’ we shout ‘Yippee!’”
Now you count: 1, Yippee!, 3, clap, 5.
Continue adding rules for numbers (including ones already changed) until you can count to five using only the rules.
Optional challenge
Speed it up once you get the hang of it, or increase the number beyond five!`,
  videoUrl: ""
},

{
  number: 3,
  category: "WARM UP / CONNECTING GAMES",
  title: "Word Association A to B",
  text: `How to play
One player says a random word. The next player immediately says the first word that comes to mind based on what they just heard. Players go back and forth, each word directly responding to the previous one.
Example
Player one says “horse.”
Player two says “shoe.”
Player one says “sock.”
Focus
Let each word be truly based on what the other person just said. Avoid planning ahead or taking too long. The goal is to stay present and tuned in to each other.`,
  videoUrl: ""
},

{
  number: 4,
  category: "WARM UP / CONNECTING GAMES",
  title: "Word Association A to C",
  text: `How to play

This is a more challenging twist on word association where players secretly skip a step. The first person says a random word. The next person thinks of a word related to it but does not say it out loud. Instead, they say a word associated with that secret middle word.
Each player continues using the same “secret middle” rule.
Example
Player one says “banana.”
Player two thinks “yellow” but says “sun.”
The next player might think “hot” and say “cheese.”
Because everyone is skipping a step, the words become very random very quickly!`,
  videoUrl: ""
},

{
  number: 5,
  category: "WARM UP / CONNECTING GAMES",
  title: "Word Ball",
  text: `How to play
This game follows the same rules as Word Association A to B, but players pretend to throw and catch an imaginary ball. Each time you catch the ball, you repeat the word you were thrown before saying your new word.
Example
Player one says “potato” and pretends to throw the ball.
Player two “catches” it, repeats “potato,” then throws it back saying “mash.”
Player one catches, repeats “mash,” and throws it back saying “squish.”
Optional variation
You can use a real ball if you want, but an imaginary one works just as well. The physical action alone helps keep everyone engaged and focused.`,
  videoUrl: ""
},

{
  number: 6,
  category: "WARM UP / CONNECTING GAMES",
  title: "What If I Smiled Like This",
  text: `How to play
Players take turns saying, “What if I smiled like this?” and then immediately making the silliest, strangest, or most exaggerated smile they can think of.
Example
One player asks, “What if I smiled like this?” and freezes in a wildly goofy grin. The next player takes a turn with their own made-up smile.
Challenge
Try not to smile for real in between turns. Keep a straight face until it’s your turn again.`,
  videoUrl: ""
},

{
  number: 7,
  category: "WARM UP / CONNECTING GAMES",
  title: "What If I Laughed Like This",
  text: `How to play
Players take turns saying, “What if I laughed like this?” and then letting out the goofiest, strangest, or most unexpected laugh they can come up with on the spot.
Example
One player asks, “What if I laughed like this?” and bursts into an over-the-top laugh. When they’re done, they snap back to a straight face before the next player goes.
Challenge
Try not to laugh for real in between turns, and see if you can return to a neutral face immediately after your laugh.
Optional variations
8. What if I cried like this
9. What if I sang like this
10. What if I farted like this (use funny mouth sounds)
11. What if I burped like this
12. What if I yawned like this (this works especially well when everyone is tired! Try turning your yawn into a dramatic opera-style song or weird sound to brighten the mood)`,
  videoUrl: ""
},

{
  number: 13,
  category: "WARM UP / CONNECTING GAMES",
  title: "Read My Mind",
  text: `How to play
One player freezes in a dramatic facial expression. The other player looks at the face and says out loud what they think the inner thoughts of that face might be.
Example
Player one makes an over-the-top grossed-out face with their tongue sticking out and eyes squinting.
Player two says, “Ewww, I can’t believe I just drank milk that expired in 1972!”
Then switch roles and repeat.
Optional challenge
Encourage bigger, more exaggerated faces or longer inner monologues to increase the silliness. This could include incorporating movement into the facial expressions, like doing three different facial expressions back-to-back to give the other player a bit of a story to tell.

Example: a frown, then a scared face, then a sleepy face might prompt the other player to say, “Aw man, I dropped my sandwich… Aaa! There’s a tarantula crawling on it! Oh, that was just a hairball and now I’m sleepy from all that excitement and no snack.”`,
  videoUrl: ""
},

{
  number: 14,
  category: "WARM UP / CONNECTING GAMES",
  title: "Mind Meld",
  text: `How to play — Option 1: Simple Mind Reading
Count down together from three. On “one,” try to say the same word at the same time. This works best when one person (often the child) acts as the leader and the other player carefully observes and tunes in, with the leader speaking slowly and clearly.
How to play — Option 2: Category Mind Meld
Choose a category such as food, animals, or sports. Count down and try to say the same word from that category at the same time. See how many tries it takes to match.
How to play — Option 3: Convergence
This version works best with slightly older kids.
Count down from three and say two random words at the same time. Without speaking, both players think of a word that could connect those two words. On the next count of three, say that connecting word. Continue repeating this process until you end up saying the same word at the same time.
Tip
If you start feeling stuck, reset and begin again with a brand-new word. In improv, this is sometimes called “going out to go in,” meaning you zoom out of the game so you can re-enter with fresh energy. The goal is to have fun, not to force it!`,
  videoUrl: ""
}

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
