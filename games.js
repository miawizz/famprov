const WELCOME_TEXT = `
**Welcome to FAMPROV!**
This guide includes all the games from the FAMPROV digital library in one place, so you can flip through them anytime when you want a quick idea for play.
Each game includes simple instructions to get you started, but feel free to adapt, remix, and invent your own versions as you go.
**Other FAMPROV resources**
• Cheat sheet: a one-page list of game titles for quick inspiration  
• Printable guide booklet  
• Video demonstrations, in-depth instructions, and extra tips in the course library, organized by category  
**A few reminders as you play**
• There are no winners or losers.  
• There are no right or wrong answers.  
• The goal is simply to have fun together.  
• In improv, you are on the same team.  
**A helpful improv idea**
• Improv games work best when everyone listens, collaborates, and builds on each other’s ideas.  
• In improv, this is called “Yes, and” — going along with where the game is headed and adding something new.  
**★ = games that work well with younger children**
• Every child is different, and what works best can vary based on age, speech development, mood, and personality.  
• Kids often learn best by watching others play.  
• Modeling the games with a partner, friend, or older sibling over time can help younger children join in.
`;
const GAMES = [
  {
    category: "WARM UP / CONNECTING GAMES",
    title: "Counting to Ten",
    text: `**How to play**
• Try to count to ten as a pair or group without speaking at the same time and without deciding who goes next.
• One person starts by saying “one.”
• Anyone can say the next number in order, but if two people speak at once, you must start over at “one!”

**Optional challenge**
• Once you succeed, try counting to twenty for a bigger challenge.
• Try looking at the floor so you’re not tempted to signal to each other to speak!`
  },

  {
    category: "WARM UP / CONNECTING GAMES",
    title: "Rules",
    text: `**How to play**
• Start by counting to five together.
• Then take turns creating a new silly “rule” to replace one number.

**Example**
• One player says, “Instead of saying ‘four,’ we’re going to clap.”
• You then count together: 1, 2, 3, clap, 5.
• Next, another player adds a rule, such as, “Instead of saying ‘two,’ we shout ‘Yippee!’”
• Now you count: 1, Yippee!, 3, clap, 5.
• Continue adding rules for numbers, including ones already changed, until you can count to five using only the rules.`
  },

  {
    category: "WARM UP / CONNECTING GAMES",
    title: "Word Association A to B",
    text: `**How to play**
• One player says a random word.
• The next player immediately says the first word that comes to mind based on what they just heard.
• Players go back and forth, each word directly responding to the previous one.

**Example**
• Player one says “horse.”
• Player two says “shoe.”
• Player one says “sock.”`
  },

  {
    category: "WARM UP / CONNECTING GAMES",
    title: "Word Association A to C",
    text: `**How to play**
• This is a more challenging twist on word association where players secretly skip a step.
• The first person says a random word.
• The next person thinks of a word related to it but does not say it out loud.
• Instead, they say a word associated with that secret middle word.
• Each player continues using the same “secret middle” rule.

**Example**
• Player one says “banana.”
• Player two thinks “yellow” but says “sun.”
• The next player might think “hot” and say “cheese.”`
  },

  {
    category: "WARM UP / CONNECTING GAMES",
    title: "Word Ball",
    text: `**How to play**
• This game follows the same rules as Word Association A to B, but players pretend to throw and catch an imaginary ball.
• Each time you catch the ball, you repeat the word you were thrown before saying your new word.

**Example**
• Player one says “potato” and pretends to throw the ball.
• Player two “catches” it, repeats “potato,” then throws it back saying “mash.”
• Player one catches, repeats “mash,” and throws it back saying “squish.”`
  },

  {
    category: "WARM UP / CONNECTING GAMES",
    title: "★ What If I Smiled Like This?",
    text: `**How to play**
• Players take turns saying, “What if I smiled like this?” and then immediately making the silliest, strangest, or most exaggerated smile they can think of.

**Fun variations**
• What if I laughed like this
• What if I cried like this
• What if I sang like this
• What if I farted like this (use funny mouth sounds)
• What if I burped like this
• What if I yawned like this (this works especially well when everyone is tired! Try turning your yawn into a dramatic opera-style song or weird sound to brighten the mood)

**Challenge**
• Try not to smile or laugh for real in between turns, and see if you can snap back to a neutral face!`
  },

  {
    category: "WARM UP / CONNECTING GAMES",
    title: "★ Read My Mind",
    text: `**How to play**
• One player freezes in a dramatic facial expression.
• The other player looks at the face and says out loud what they think the inner thoughts of that face might be.

**Example**
• Player one makes an over-the-top grossed-out face with their tongue sticking out and eyes squinting.
• Player two says, “Ewww, I can’t believe I just drank milk that expired in 1972!”`
  },

  {
    category: "WARM UP / CONNECTING GAMES",
    title: "★ Mind Meld",
    text: `**How to play**
• Count down together from three.
• After “one,” try to say the same word at the same time.
• This works best when one person, often the child, acts as the leader and the other player carefully observes and tunes in, with the leader speaking slowly and clearly.

**Variations**
• Choose a category such as food, animals, or sports.

**Convergence**
• This works best with slightly older kids.
• Count down from three and say two random words at the same time.
• Without speaking, both players think of a word that could connect those two words.
• On the next count of three, say that connecting word.
• Continue repeating this process until you end up saying the same word at the same time.

**Tip**
• If you start feeling stuck, reset and begin again with a brand-new word! The goal is to have fun, not to force it.`
  }
  ,
  {
    category: "SOUND AND FACIAL EXPRESSION GAMES",
    title: "★ Magic Mirror",
    text: `**Without sound**
• Choose one player to be the leader.
• The leader slowly changes their facial expression, moving into big, dramatic faces.
• The other player or players act as a mirror, copying the face in real time as closely as possible.

**With sound**
• The leader begins making a sound while slowly changing their facial expression.
• The mirror players copy both the face and the sound in real time, continuing to match it as it changes.`
  },

  {
    category: "SOUND AND FACIAL EXPRESSION GAMES",
    title: "Opposite Emotions",
    text: `**How to play**
• Try to make the facial expression of one emotion while using the voice or sound of the opposite emotion.

**Example**
• Make the face of someone who is really happy, but the sound of someone who is really sad.

**Opposing emotions**
• Angry face / calm and peaceful voice
• Scared face / brave superhero voice
• Excited face / bored and monotone voice

**Silly scenarios**
• Face: just stepped in dog poop / Sound: won the lottery
• Face: lost your favorite teddy bear / Sound: about to eat ice cream
• Face: dropped your donut / Sound: just heard a funny joke
• Face: stuck in traffic / Sound: relaxing on vacation
• Face: just got splashed with muddy water / Sound: dancing at a party`
  },

  {
    category: "SOUND AND FACIAL EXPRESSION GAMES",
    title: "★ Be My Voice",
    text: `**How to play**
• One player is the Voice, and one player is the Face.
• The Voice talks out loud while the Face silently lip-syncs in real time.
• The Face tries to match the mouth movements and facial expressions so it looks like the voice belongs to them.

**Example**
• The Voice says: “Let me tell you about my favorite thing to do on a rainy day…” while the Face mouths the words and exaggerates expressions to match the tone.

**Fun twists**
• Set up a camera so the Voice is off-screen. When you watch it back, it looks like the person lip syncing is actually talking.

**Prompt ideas**
• “Here’s my most embarrassing story…”
• “This is the craziest thing that ever happened to me…”`
  },

  {
    category: "SOUND AND FACIAL EXPRESSION GAMES",
    title: "★ I Make the Face, You Make the Sound",
    text: `**How to play**
• One player makes a silent facial expression.
• The other player creates the sound they think matches that face.

**Ways to play**
• Real-time: One player makes the face while the other makes the sound at the same time.
• Two-step: The face is shown once silently. Then it is repeated while the other player adds the sound.

**Variation**
• I Make the Sound, You Make the Face
• One player makes a sound effect and the other creates a facial expression that matches it.`
  },

  {
    category: "SOUND AND FACIAL EXPRESSION GAMES",
    title: "★ Guess the Emoji",
    text: `**How to play**
• Take turns secretly choosing an emoji from the chart or from a device.
• Act it out using only your face while the other player guesses which emoji you are portraying.

**Two-device version**
• One player secretly chooses three emojis and acts them out one at a time.
• The other player writes or types the emojis they think are being performed.
• Compare lists at the end to see how many matched.

**Optional challenge**
• Limit yourself to only facial movement with no sound.
• Make the sound you think that emoji would be making.
• Exaggerate expressions as much as possible.`
  },

  {
    category: "SOUND AND FACIAL EXPRESSION GAMES",
    title: "★ Face Filters or Magic Towel",
    text: `**Magic Towel version**
• Hold a towel, blanket, or piece of fabric in front of your face.
• While your face is covered, quickly change your facial expression.
• Lower the towel to reveal the new face as if it appeared by magic.

**Challenge**
• Speed it up so the expression appears to change instantly behind the towel, like a magic trick.

**Face Filters version**
• Instead of a towel, swipe your hand in front of your face (or have someone else swipe their hand).
• Each swipe “changes the filter,” meaning you instantly switch to a new facial expression.`
  }

    ,
  {
    category: "CONVERSATION GAMES",
    title: "Yes, And",
    text: `**How to play**
• One person starts by saying a simple statement.
• The other person must respond beginning with the words “Yes, and…”, agreeing with what was just said and adding a new detail that goes along with it.
• Players take turns continuing the exchange, always accepting the last idea and building on it.
• The only “rule” is that responses must start with “Yes, and...”

**Example**
• “I’m so excited it’s your birthday today!”
• “Yes, and it’s almost time to eat cake...”
• “Yes, and it’s our favorite kind, chocolate with sprinkles!”
• “Yes, and I can’t believe the sprinkles were on sale for half-off at the grocery store!”`
  },

  {
    category: "CONVERSATION GAMES",
    title: "Yes, But",
    text: `**How to play**
• One person makes a statement.
• The next person responds starting with “Yes, but…”, agreeing with what was said and then adding a surprising or silly detail that changes the direction slightly.
• The key is that the “but” adds interest, not resistance.

**Example**
• “I heard there’s a new ice cream shop down the street.”
• “Yes, but they only serve pickle-flavored ice cream…”
• “Yes, but it’s apparently really delicious!”
• “Yes, but they serve it with chopsticks instead of spoons.”
• “Yes, but the chopsticks help you pick out the pickle chunks.”`
  },

  {
    category: "CONVERSATION GAMES",
    title: "Out-Compliment Each Other",
    text: `**How to play**
• One person starts by giving a compliment.
• The other person responds by saying “Thank you, but…”, then uses something from the first compliment to inspire a new, bigger, or more unexpected compliment back.
• Players take turns continuing the exchange, always building off the last compliment.

**Example**
• “I just love your shoes!”
• “Thank you, well I love the way your shoes squeak when you walk. It reminds me of a cute mouse!”
• “Ohhh, thank you, and speaking of mice, I love the way you eat cheese so carefully!”
• “Thank you, but the way I eat cheese is nothing compared to your cheesy jokes. You always make me laugh!”`
  },

  {
    category: "CONVERSATION GAMES",
    title: "Pretend Interview",
    text: `**How to play**
• Choose one person to be the Interviewer and one person to be the Special Guest.
• You can pretend it’s a radio show, podcast, or talk show.
• The interviewer greets the “audience” and introduces the guest, inventing a random personality, job, or character for them.
• The guest accepts the character and answers questions as that character, building on the details using that Yes, And principle.

**Optional prompts to inspire characters**
• A famous chef
• A superhero
• An explorer
• A musician or singer
• An actor promoting a new film`
  },

  {
    category: "CONVERSATION GAMES",
    title: "Questions Only",
    text: `**How to play**
• Have a conversation where every response must be a question.
• Players take turns responding to each other, and if someone accidentally makes a statement instead of asking a question, you can either laugh and keep going or decide to reset and start over.
• The goal is to stay curious and keep the conversation moving.

**Example**
• “Did you see Susan yesterday?”
• “Susan Bumsquat?”
• “Isn’t that the Susan we met at the holiday party?”
• “Was she the one dressed like an elf?”
• “Why do elves wear pointy shoes?”`
  },

  {
    category: "CONVERSATION GAMES",
    title: "★ Gibberish",
    text: `**How to play**
• Have a conversation using only gibberish.
• Players make up sounds instead of real words while using facial expressions, gestures, and tone to communicate.
• The goal is to listen closely and respond as if the gibberish is a real language.

**Example**
• One player speaks in expressive gibberish with dramatic gestures.
• The other player responds in gibberish, reacting as if they fully understand what was just said.

**Optional variations**
• Make silly blubbering sounds by gently dragging a finger up and down over your lips.
• After the “scene,” guess what the other person was “saying” and see if you were close!`
  },

  {
    category: "CONVERSATION GAMES",
    title: "Gibberish Translator",
    text: `**How to play**
• Choose one player to be the Gibberish Speaker and another to be the Translator.
• The Gibberish Speaker talks in gibberish while the Translator listens.
• After each gibberish sentence, pause and let the Translator explain what they think was just said.
• If there are multiple players, you can have several Gibberish Speakers talking to each other, pausing periodically so one or more Translators can interpret.

**Optional prompts to get you started**
• Tell a story that begins with “Once upon a time…”
• Explain something that happened earlier that day
• Give a dramatic speech
• Share exciting news`
  },

  {
    category: "CONVERSATION GAMES",
    title: "Alphabet Conversation",
    text: `**How to play**
• Have a conversation together, taking turns speaking.
• Each new sentence must begin with the next letter of the alphabet in order.
• The conversation can be completely made up.
• You can give each other new names, invent situations, and go in any direction you want.

**Example**
• “Ahh, Gerald, how are you today?”
• “Been better!”
• “Cat ran away again?”
• “Dang cat always running away, yes!”

**Tip**
• If someone gets stuck, the other player can help by suggesting a word, reminding them of the letter, or jumping in to support!`
  },

  {
    category: "CONVERSATION GAMES",
    title: "Counting Conversation",
    text: `**How to play**
• Take turns saying a sentence at a time to each other, having a made-up conversation.
• Each turn must include one more word than the previous turn.
• Start with one word, then two words, then three, and continue building upward.
• Try to work your way up to ten, or more!

**Example**
• “Hi.”
• “Hi, Barbara!”
• “How are you?”
• “I’m feeling excited today!”
• “Did you get that job??”`
  },

  {
    category: "CONVERSATION GAMES",
    title: "Book Conversation",
    text: `**How to play**
• Pick a random book.
• Chapter books or kid-friendly novels work best.
• One player starts a conversation by speaking normally.
• The other player may only respond by flipping through the book and reading a line out loud that could somewhat make sense as a reply.

**Example**
• Player one: “How was your day today?”
• Player two flips through the book and reads: “It was the strangest afternoon he could remember.”
• Player one: “Oh… I’m sorry to hear that! What happened?”

**Ways to play**
• The adult must respond only with lines from the book while the child can say anything.
• If both players can read, each person uses their own book and the entire conversation happens through book lines only!`
  }

  ,
{
  category: "STORYTELLING GAMES",
  title: "★ Popcorn Story",
  text: `**How to play**
• Sit in a circle or face each other.
• One person begins the story by saying, “Once upon a time…” and adds a few sentences to move the story forward.
• When they’re ready to pass the story along, they say “POPCORN… [next player’s name]!” and that person continues the story.
• Players keep trading off until the story reaches an ending.

**Helpful guidelines**
• Tell the story in the past tense
• Introduce a main character and name and describe them
• Present a problem or challenge
• Add an adventure
• Work toward a solution

**Example**
• “Once upon a time there was a horse named…”
• “POPCORN… Jamie!”
• Jamie: “…Harold. Harold lived in a magical forest...”

**Optional rule**
• To keep the story moving, you can agree that no characters die in the story, since that often brings things to a halt.

**Tip for very young players**
• Let little ones fill in the blanks like a Mad Lib.
• Example: “The horse’s name was…?” then pause and point to the child to choose the key word.`
},

{
  category: "STORYTELLING GAMES",
  title: "One Word Story",
  text: `**How to play**
• Create a story together by taking turns saying just one word.
• Work together as if you were one voice telling the story.

**Example**
• “Once”
• “upon”
• “a”
• “time”
• “there”
• “was”
• “a”
• “dragon…”

**Tips**
• This game is deceptively tricky, even for adults! It takes practice to get in sync with each other.
• Don’t get discouraged if it doesn’t flow right away.

**Variations**
• If one word feels too tricky, try every other sentence or every other phrase.
• Younger kids can say a few words while older kids or adults stick to one word.

**Other fun word-at-a-time variations**
• One Word Commercial
• One Word Motivational Speech
• One Word News Report: “This just in...”
• One Word Robot: Answer questions like a robot
• One Word Poem
• One Word Fortune Teller
• One Word Complaint Letter: “Dear...”
• One Word Dream: “Last night I dreamt...”
• One Word Customer Service Hotline
• One Word Movie Trailer: “In a world...”
• One Word GPS Directions
• One Word Love Letter: “Dear...”
• One Word Saying: “You know what they say...”`
},

{
  category: "STORYTELLING GAMES",
  title: "Fortunately / Unfortunately",
  text: `**How to play**
• Tell a story together, one sentence at a time.
• Players alternate sentences, starting each one with either “Fortunately…” or “Unfortunately…”
• Each sentence responds directly to the last one.
• The story keeps swinging between problems and silver linings.

**Example**
• “Unfortunately, I lost my shoes.”
• “Fortunately, I love being barefoot.”
• “Unfortunately, I stepped on a Lego.”
• “Fortunately, it was the Lego I’d been missing for two years!”`
},

{
  category: "STORYTELLING GAMES",
  title: "Tell Me About the Time",
  text: `**How to play**
• One person says, “[Name]… tell me about the time…” and finishes the sentence with a wild, imaginative prompt that is clearly not real.
• The other person immediately jumps into telling the story, fully committing to the idea using the “Yes, And” improv principle.
• The listener can ask questions along the way to help the story grow.

**Prompt ideas**
• Tell me about the time a cow wandered into your backyard and you had to find its owner.
• Tell me about the time you were about to bite into an orange and it started screaming.
• Tell me about the time you drank so much lemonade you bounced onto the roof.
• Tell me about the time your shoes ran away without you.`
}
  ,
{
  category: "CREATIVITY CHALLENGES",
  title: "Fake Definitions",
  text: `**How to play**
• One person invents a silly-sounding fake word.
• Everyone else takes turns pretending they know exactly what it means.
• Each person explains the definition and uses the word in a sentence.
• There are no wrong answers.
• Every explanation is treated as equally valid.

**Example**
• “Your word is scooperdinkle.”
• “A scooperdinkle is a measurement you use when you’re cooking without a recipe. ‘I added a scooperdinkle of sugar!’”

• Then choose a new word and repeat.`
},

{
  category: "CREATIVITY CHALLENGES",
  title: "Fake Band Names",
  text: `**How to play**
• Take turns quickly calling out fake band names.
• Do not pause to think.
• Say whatever pops into your head and keep the momentum going.
• The only goal is speed and silliness.
• The weirder the better.

**Example**
• One player calls out “Flat Pumpkin.”
• The next responds “Angry Duck Crossing.”
• Another adds “Diaper Blowout.”

**Optional variations**
• Make up the band’s hit song or album title.
• Decide what kind of music they play.
• Add a dramatic band introduction voice.`
},

{
  category: "CREATIVITY CHALLENGES",
  title: "Fake Slang",
  text: `**How to play**
• One person uses a made-up word naturally in a sentence even though it does not exist.
• The other player responds by saying “You mean…” and guesses what they think the word means.
• The original speaker must then go along with that interpretation in the Yes, And spirit.
• Then switch roles and repeat with a new fake slang word.

**Example**
• “Yesterday I was at the park and I totally barked.”
• “You mean you saw a dog you connected with so deeply it felt like you were speaking its language?”
• “Yes, and the owner even let me pet him!”`
},

{
  category: "CREATIVITY CHALLENGES",
  title: "Movie Critic / Book Review",
  text: `**How to play**
• One person comes up with a fake movie or book title.
• The other person immediately jumps in as the critic.
• The critic briefly describes the plot or cast and gives a review explaining whether they liked it or not.

**Optional additions**
• Add a star rating.
• Include surprising casting choices.
• Review a sequel, prequel, or reboot.
• Switch between loving it and totally hating it.`
},

{
  category: "CREATIVITY CHALLENGES",
  title: "Magic Spells",
  text: `**How to play**
• One person starts a spell by saying a rhythmic made-up phrase.
• The other person finishes the spell with a line that explains what the magic does.

**Example**
• Player one: “Hippity-hoppity-boopity-bear…”
• Player two: “…Make me have clean underwear!”`
},

{
  category: "CREATIVITY CHALLENGES",
  title: "Mystery Guest",
  text: `**How to play**
• One or two players act as the Interviewers.
• They secretly choose an identity for the Mystery Guest.
• This can be a celebrity, fictional character, someone everyone knows, or even something generic like an animal or object.
• The Mystery Guest either leaves the room or covers their ears while the identity is chosen.
• Once ready, the guest returns and is welcomed onto the “talk show.”
• The Interviewers ask questions and give playful clues to help the guest figure out who they are.

**Example**
Secret identity: a dragon

• “Welcome to the show. Before we bring out our next guest, please check under your seat for a fireproof poncho.”
• “So tell us, is it true you can fly, or are your wings just for decoration?”
• “And should we be worried if you breathe a little too hard?”

• The guest listens, plays along, and starts guessing based on the clues.`
},

{
  category: "CREATIVITY CHALLENGES",
  title: "TV Talking",
  text: `**How to play**
• Turn the volume down on a family-friendly sitcom or show.
• Players quickly choose which character they will voice.
• As the show plays, everyone voices their character in real time, saying whatever comes to mind.
• Accents, nonsense, dramatic monologues, and total absurdity are all welcome.

**Tip**
• Choose something you have not already watched so you are not tempted to repeat the real dialogue.

**Note**
• You do not need to match the plot or make sense.
• The goal is to keep the talking going and support each other’s ideas.

**Pressure-reducing tip**
• If you cannot think of what to say, or if your character is not talking at the moment, you can growl, make a nonsense word, or speak gibberish.

**★ Warm-up idea for younger kids**
• Instead of TV, use picture books.
• Flip through the pages and “talk” for each character using voices, sound effects, or short lines.

**Variation: Nature Narrator**
• Turn on a family-friendly nature documentary and mute or lower the volume.
• One player becomes the Narrator and describes what is happening in a dramatic voice.
• The other players create animal sounds or voice the animals’ inner thoughts.`
},

{
  category: "CREATIVITY CHALLENGES",
  title: "Interrogation",
  text: `**How to play**
• One player is the Criminal.
• One or more other players are the Interrogators.
• While the Criminal looks away or leaves the room, the Interrogators secretly decide:
  • What happened
  • Where it happened
  • Who it happened with
• Keep everything light, silly, and clearly imaginary.

• The Criminal returns and the interrogation begins.
• The Interrogators give clues to help the Criminal guess each part.

**Example**
Secret crime: tooting at the playground with Buzz Lightyear.

• “Let’s start with what you did. We’re all still recovering from the smell.”
• Criminal guesses: “I tooted?”
• “Exactly. But where you did it made it even worse.”
• Criminal guesses: “The playground?”
• “Yes. And we cannot believe who you did this with… to infinity and beyond.”
• Criminal guesses: “Buzz Lightyear!”

**Tips**
• Choose an accomplice everyone knows.
• Do not give all clues at once.
• Start with “what,” then “where,” then “who.”`
}

  ,
{
  category: "MUSICAL GAMES",
  title: "Song-on-the-Spot",
  text: `**How to play**
• Two players sing a song together simultaneously, inventing the lyrics as they go.
• One person leads while the other carefully follows, trying to match the words, melody, and timing in real time.
• Switch who leads after a verse or whenever it feels right.

**Helpful way to start**
• Come up with a made-up song title before you begin. This gives the song a shared direction right away.

**Ways to play with more people**
• One person can act as an interviewer, introducing the duo and asking questions about their “new album.”
• The duo responds by breaking into another song together on the spot.`
},

{
  category: "MUSICAL GAMES",
  title: "Build a Rap",
  text: `**How to play**
• Establish the rhythm: everyone starts and continues the same steady beat.

• Bum-ba-dadum-badum-badum-ba

• This rhythm happens at the beginning, in between every rhyming line, and anytime the group needs to reset or regroup.

**Example**
• Player one: “I’m thinking of a word that rhymes with bee.”
• Everyone: Bum-ba-dadum-badum-badum-ba
• Player two: “Oops, I fell and scraped my knee.”
• Everyone: Bum-ba-dadum-badum-badum-ba
• Player three: “And then I really had to pee.”
• Everyone: Bum-ba-dadum-badum-badum-ba
• Player four: “But look, I found my missing key!”
• Everyone: Bum-ba-dadum-badum-badum-ba`
},

{
  category: "MUSICAL GAMES",
  title: "Syllable Swap",
  text: `**How to play**
• Choose a song everyone knows well.
• Sing the song together but trade off every syllable, one at a time, rotating through the players.
• Each person only sings their assigned syllable, then immediately passes it to the next player.

**Ways to make it easier**
• Start by swapping every word instead of every syllable.
• Use a slower song.
• Practice one line at a time rather than the whole song.

**Optional challenge**
• Try moving your mouth the entire time even when it is not your syllable. This is very tricky and almost always ends in laughter!`
},

{
  category: "MUSICAL GAMES",
  title: "★ Bawk That Tune",
  text: `**How to play**
• Choose a familiar song.
• One person “sings” the song using only chicken bawking sounds while following the melody and rhythm.
• The other players listen and try to guess which song it is.

**Fun variations**
• “Baa” that tune
• “Moo” that tune
• “Croak” that tune
• “Yawn” that tune
• “Burp” that tune
• Or invent your own sound like “Blub that tune!”`
},

{
  category: "MUSICAL GAMES",
  title: "The Jingle Game",
  text: `**How to play**
• Pick a random item nearby.
• One person holds it up and sings a short opening line naming the “product.”
• The next person immediately finishes the jingle with any line that comes to mind.

**Example**
• Player one holds up a bar of soap and sings, “Bar of soap!”
• Player two responds, “The cleanest armpits you’ll ever smell!”

**Helpful tip before playing**
• It can help to remind kids what jingles are and sing a few familiar ones first.

**Ways to play anywhere**
• At home with household items
• In the car with billboards or businesses you pass
• At the store while shopping together`
},

{
  category: "MUSICAL GAMES",
  title: "5, 6, 7, 8!",
  text: `**How to play**
• One player claps out a steady beat and calls out “5, 6, 7, 8!”
• The other player immediately begins an improvised dance while the first player counts the beats out loud.
• Dance for two full 8-counts and finish with a strong pose.

**Ways to adjust**
• Do one 8-count instead of two or try more.
• Dance very slowly or very fast.
• Add themed dances such as robot, ballerina, dinosaur, or sleepy sloth.`
},

{
  category: "MUSICAL GAMES",
  title: "Fake Dance Trend",
  text: `**How to play**
• One person pretends they have discovered a new dance trend.
• They give the dance a name and teach it step by step.

**Example**
Leader: “Have you heard of this new dance trend? It’s called I Ate Too Many Donuts.”

**Example dance steps**
• Put one hand on your belly.
• Put the other hand on your belly.
• Bend over and say “ouch.”
• Sit down and roll on the floor.

• Once everyone knows the steps, play music or sing and perform the dance together.`
},

{
  category: "MUSICAL GAMES",
  title: "One Word Song",
  text: `**How to play**
• Make up a song by switching off every word.
• One person says or sings a word, then the next person adds the next word.
• Continue building the song together.

**Optional additions**
• Clap or snap to keep a beat.
• Try to rhyme.
• Ignore rhyming completely and just be silly.

**Ways to make it easier**
• Switch off every line instead of every word.

**Helpful tip**
• Choose a silly song title before starting, such as:
• “I Love Beans”
• “Don’t You Worry ’Bout That Pimple”
• “Goody Goody Gumdrops”

**Warm-up option**
• Start by rewriting a song you both know into a simple parody.`
}

  ,
{
  category: "PHYSICAL GAMES",
  title: "Be My Arms",
  text: `**How to play**
• One person stands or kneels and places their arms behind their back.
• The other person stands behind them and gently slides their arms under the front person’s armpits, becoming their “arms.”

• The person in front is the Voice and Face.
• The person in back is the Arms.

• If the front person is talking or singing, the Arms try to match the words with expressive gestures.
• If the Arms make a bold or unexpected gesture, the front person goes along with it and justifies it out loud.

**Example ideas**
• Sing a song together with big, dramatic arm movements.
• Act out a story or short scene.
• Record a silly birthday message for someone.
• Use props like hats, scarves, or balloons to add chaos.`
},

{
  category: "PHYSICAL GAMES",
  title: "★ Sculptor",
  text: `**How to play**
• One person is the Sculptor.
• The other person is the Sculpture.

• Before you begin, quickly agree on consent and boundaries so everyone feels comfortable.

• The Sculpture stays loose and relaxed while the Sculptor gently guides them into a position using light, respectful movement.

• Once the pose is complete, the Sculptor names the sculpture.

**Example**
• The Sculptor positions the Sculpture sitting down with hands on their head.
• The Sculptor says, “I call this sculpture: You’re on a roller coaster and your wig just flew off.”`
},

{
  category: "PHYSICAL GAMES",
  title: "★ Lights On / Lights Off",
  text: `**How to play**
• One person is the Prompt-Giver.
• They give a funny or vivid prompt for a pose.
• Then they turn off the lights and count down: “3… 2… 1…”

• While the lights are off, the other player or players strike a pose that matches the prompt as dramatically as possible.

• At the end of the countdown, the Prompt-Giver turns the lights back on to reveal the poses.

**Example prompts**
• You just looked up and saw a grandma skydiving straight toward you.
• You’re a frog who just fell off your lily pad and feels very embarrassed.
• You’re a snowman whose carrot nose just got eaten by the neighbor’s dog.
• You just caught a whiff of your own stinky armpit and you’re about to faint.

**Tip**
• If you can’t turn the lights off, the person counting can simply close their eyes.`
},

{
  category: "PHYSICAL GAMES",
  title: "★ Guess What I’m Eating",
  text: `**How to play**
• One person silently pretends to eat a specific food using exaggerated facial expressions, hand movements, and body language.
• The other players watch closely and try to guess what food is being eaten.

**Example**
• Pretend to eat a giant cheeseburger by holding your hands wide and taking big dramatic bites.
• Pretend to eat a grape by pinching your fingers together and squishing it in your mouth.`
},

{
  category: "PHYSICAL GAMES",
  title: "Reverse Charades",
  text: `**How to play**
• One person is the Director.
• The other person is the Actor.

• Instead of acting something out themselves, the Director gives specific physical instructions to guide the Actor’s movements.

• The Actor follows the instructions exactly without knowing what they are supposed to be.

• Afterward, the Actor tries to guess what action, profession, animal, or scenario they were acting out.

**Example**
• Director: “Squat down.”
• “Put your hands on the ground between your legs.”
• “Stick your tongue out really fast and then pull it back in.”

• Actor guesses: “I’m a frog catching a fly?”

**Tip**
• If this feels tricky or frustrating, regular charades is always a great fallback.`
},

{
  category: "PHYSICAL GAMES",
  title: "Floating Dancer",
  text: `**How to play**
• Set up your camera before starting so you can watch it back later.

• One person puts an oversized T-shirt on over their head without putting their arms through the sleeves.

• They then put pants on their arms and socks and shoes on their hands.

• That person kneels down and places their hands on the ground. The hands now function as the “legs.”

• The second person hides behind them and slides their arms through the sleeves of the oversized T-shirt, becoming the upper body and arms.

• Now it looks like one person whose legs are floating in the air.

• Clap your feet together and try ridiculous dance moves or yoga poses.

**Note**
• This game is not about making fun of bodies.
• The humor comes from the illusion and the unrealistic flexibility.`
},

{
  category: "PHYSICAL GAMES",
  title: "★ Ten Seconds to Be a…",
  text: `**How to play**
• Take turns giving each other a random prompt.

• As soon as the prompt is given, count down from ten while the other person acts it out as fully as they can.

• When the countdown ends, stop, laugh, and switch roles with a new prompt.

**Example prompts**
• A baby bird hatching out of an egg, confused at first, then spotting its mom.
• A rocking chair being built and rocked for the very first time.
• A firework show going off in the sky.

**Tips for creating prompts**
• Look around the room for inspiration.
• Use objects as characters.
• Animals are always a great choice.
• Think of a type of movement and work backward.

• Exploding might become fireworks.
• Wobbling might become jelly.`
}

  ,
{
  category: "PROPS GAMES",
  title: "★ Props",
  text: `**How to play**
• Grab a random item nearby.
• One person starts by acting out a silly, unexpected purpose or meaning for the object.
• Use movement, expression, and a short line of dialogue if you want.

**Example**
• Someone holds a paper towel roll up to their forehead and says,
“I can’t believe my unicorn horn grew overnight after just one use of the new magic unicorn lotion!”

**Helpful tip**
• If you feel stuck, look at the shape, size, or texture of the object and let that guide your imagination.`
},

{
  category: "PROPS GAMES",
  title: "Infomercial or Shark Tank",
  text: `**How to play**
• Find a random object and assign it a brand-new purpose that is not its real use.
• The more unexpected, the better.

• Once the object has a new identity, choose one of two ways to play.

**Infomercial**
• One person acts as the Presenter and dramatically sells the invention.

**Include**
• What it is
• What problem it solves
• Why it’s amazing

• Add a slogan, jingle, or limited-time deal if you want.

**Shark Tank**
• One person pitches the invention like on the TV show "Shark Tank."
• The other players act as Investors and ask questions to decide whether they are “in” or “out.”`
},

{
  category: "PROPS GAMES",
  title: "★ 20-Second Costume",
  text: `**How to play**
• Set a timer for 20 seconds.
• When the timer starts, everyone rushes to grab nearby items and throws together a costume on the spot.
• Anything goes.

• When time is up, freeze.

• Take turns either proudly explaining your costume or delivering a line fully in character.

**Example ideas**
• A throw-blanket toga
• A paper towel roll as a rhino horn
• A coffee mug as a grumpy office worker
• A scarf cape superhero`
},

{
  category: "PROPS GAMES",
  title: "Unboxing Video",
  text: `**How to play**
• One person secretly fills a box with random everyday items.
• They hand the box to the other player, who pretends they are filming an unboxing video.

• The unboxer opens the box one item at a time and reacts with over-the-top excitement.

• Describe each object as if it is impressive, luxurious, or groundbreaking.

• You can even pretend the item is something completely different.

**Example**
• The unboxer pulls out a pencil and says,
“Look at this. It’s solid wood. This thing is definitely not snapping in half during homework. You can just feel the quality!”

**Tip**
• Treat every item like it is the best thing you have ever seen.`
}
  
];
