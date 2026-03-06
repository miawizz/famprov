/* FAMPROV app skeleton
   Cheat-sheet version
   Collapsible categories and games stay the same
   Game numbers remain internal only and are not shown
*/

const GAMES = [
{
  number: 1,
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
  number: 2,
  category: "WARM UP / CONNECTING GAMES",
  title: "Rules",
  text: `**How to play**
• Start by counting to five together.
• Then take turns creating a new silly rule to replace one number.

**Example**
• One player says, “Instead of saying ‘four,’ we’re going to clap.”
• You then count together: 1, 2, 3, clap, 5.
• Next, another player adds a rule, such as, “Instead of saying ‘two,’ we shout ‘Yippee!’”
• Now you count: 1, Yippee!, 3, clap, 5.

**Keep going**
• Continue adding rules for numbers, including ones already changed, until you can count to five using only the rules.`
},
{
  number: 3,
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
  number: 4,
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
  number: 5,
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
  number: 6,
  category: "WARM UP / CONNECTING GAMES",
  title: "What If I Smiled Like This",
  text: `**How to play**
• Players take turns saying, “What if I smiled like this?”
• Then immediately make the silliest, strangest, or most exaggerated smile you can think of.

**Fun variations**
• What if I laughed like this
• What if I cried like this
• What if I sang like this
• What if I farted like this
• What if I burped like this
• What if I yawned like this

**Challenge**
• Try not to smile or laugh for real in between turns, and see if you can snap back to a neutral face.`
},
{
  number: 13,
  category: "WARM UP / CONNECTING GAMES",
  title: "Read My Mind",
  text: `**How to play**
• One player freezes in a dramatic facial expression.
• The other player looks at the face and says out loud what they think the inner thoughts of that face might be.

**Example**
• Player one makes an over-the-top grossed-out face with their tongue sticking out and eyes squinting.
• Player two says, “Ewww, I can’t believe I just drank milk that expired in 1972!”`
},
{
  number: 14,
  category: "WARM UP / CONNECTING GAMES",
  title: "Mind Meld",
  text: `**How to play**
• Count down together from three.
• After “one,” try to say the same word at the same time.
• This works best when one person acts as the leader and the other player carefully observes and tunes in.

**Variations**
• Choose a category such as food, animals, or sports.
• Try “Convergence” by each saying two random words, then thinking of a word that could connect them, and repeating until you match.

**Tip**
• If you start feeling stuck, reset and begin again with a brand-new word.
• The goal is to have fun, not to force it.`
},
{
  number: 15,
  category: "SOUND AND FACIAL EXPRESSION GAMES",
  title: "Magic Mirror",
  text: `**Without sound**
• Choose one player to be the leader.
• The leader slowly changes their facial expression, moving into big, dramatic faces.
• The other player or players act as a mirror, copying the face in real time as closely as possible.

**With sound**
• The leader begins making a sound while slowly changing their facial expression.
• The mirror players copy both the face and the sound in real time, continuing to match it as it changes.`
},
{
  number: 17,
  category: "SOUND AND FACIAL EXPRESSION GAMES",
  title: "Opposite Emotions",
  text: `**How to play**
• Make the facial expression of one emotion while using the voice or sound of the opposite emotion.

**Example**
• Make the face of someone who is really happy, but the sound of someone who is really sad.

**Try combinations like**
• Angry face / calm and peaceful voice
• Scared face / brave superhero voice
• Excited face / bored and monotone voice

**Silly scenarios**
• Face: just stepped in dog poop / sound: won the lottery
• Face: lost your favorite teddy bear / sound: about to eat ice cream
• Face: stuck in traffic / sound: relaxing on vacation`
},
{
  number: 18,
  category: "SOUND AND FACIAL EXPRESSION GAMES",
  title: "Be My Voice",
  text: `**How to play**
• One player is the Voice, and one player is the Face.
• The Voice talks out loud while the Face silently lip-syncs in real time, matching mouth movements and facial expressions as closely as possible.

**Example**
• The Voice says, “Let me tell you about my favorite thing to do on a rainy day…”
• The Face mouths the words and exaggerates expressions to match the tone.

**Fun twists**
• Set up a camera so the Voice is off-screen.
• Use prompts like “Here’s my most embarrassing story…” or “This is the craziest thing that ever happened to me…”`
},
{
  number: 19,
  category: "SOUND AND FACIAL EXPRESSION GAMES",
  title: "I Make the Face, You Make the Sound",
  text: `**How to play**
• One player makes a silent facial expression while the other player creates the sound they think matches that face.

**Ways to play**
• Real-time: do both at once.
• Two-step: show the face once silently, then repeat it with the sound added.

**Variation**
• I Make the Sound, You Make the Face`
},
{
  number: 21,
  category: "SOUND AND FACIAL EXPRESSION GAMES",
  title: "Guess the Emoji",
  text: `**How to play**
• Take turns secretly choosing an emoji from a chart or a device.
• Act it out using only your face while the other player guesses which emoji you’re portraying.

**How to play with two devices**
• One player secretly chooses three emojis and acts them out one at a time.
• The other player types the emojis they think are being performed.
• Compare lists at the end to see how many matched.

**Optional challenge**
• Use only facial movement with no sound.
• Make the sound you think that emoji would make.
• Exaggerate expressions as much as possible.`
},
{
  number: 23,
  category: "SOUND AND FACIAL EXPRESSION GAMES",
  title: "Face Filters or Magic Towel",
  text: `**Magic Towel version**
• Hold a towel, blanket, or piece of fabric in front of your face.
• While your face is covered, quickly change your facial expression.
• Lower the towel to reveal the new face as if it appeared by magic.

**Face Filters version**
• Swipe your hand in front of your face.
• Each swipe “changes the filter,” meaning you instantly switch to a new facial expression.`
},
{
  number: 24,
  category: "CONVERSATION GAMES",
  title: "Yes, And",
  text: `**How to play**
• One person starts by saying a simple statement.
• The other person must respond beginning with “Yes, and…”
• Keep taking turns, always accepting the last idea and building on it.

**Example**
• “I’m so excited it’s your birthday today!”
• “Yes, and it’s almost time to eat cake…”
• “Yes, and it’s our favorite kind, chocolate with sprinkles.”

**Remember**
• The only rule is that responses start with “Yes, and…”`
},
{
  number: 25,
  category: "CONVERSATION GAMES",
  title: "Yes, But",
  text: `**How to play**
• One person makes a statement.
• The next person responds starting with “Yes, but…”
• Agree with what was said, then add a surprising or silly detail that changes the direction slightly.

**Example**
• “I heard there’s a new ice cream shop down the street.”
• “Yes, but they only serve pickle-flavored ice cream…”
• “Yes, but it’s apparently really delicious!”`
},
{
  number: 26,
  category: "CONVERSATION GAMES",
  title: "Out-Compliment Each Other",
  text: `**How to play**
• One person starts by giving a compliment.
• The other person responds by saying “Thank you, but…” and uses that compliment to inspire a new one back.
• Keep building off the last compliment.

**Example**
• “I just love your shoes!”
• “Thank you, but I love the way your shoes squeak when you walk.”
• “Speaking of mice, I love the way you eat cheese so carefully!”`
},
{
  number: 27,
  category: "CONVERSATION GAMES",
  title: "Pretend Interview",
  text: `**How to play**
• Choose one person to be the Interviewer and one person to be the Special Guest.
• Pretend it’s a radio show, podcast, or talk show.
• The interviewer introduces the guest with a made-up job, character, or personality.
• The guest answers as that character.

**Optional prompts**
• A famous chef
• A superhero
• An explorer
• A musician or singer
• An actor promoting a new film`
},
{
  number: 28,
  category: "CONVERSATION GAMES",
  title: "Questions Only",
  text: `**How to play**
• Have a conversation where every response must be a question.
• If someone accidentally makes a statement, either laugh and keep going or reset.

**Example**
• “Did you see Susan yesterday?”
• “Susan Bumsquat?”
• “Isn’t that the Susan we met at the holiday party?”
• “Was she the one dressed like an elf?”`
},
{
  number: 29,
  category: "CONVERSATION GAMES",
  title: "Gibberish",
  text: `**How to play**
• Have a conversation using only gibberish.
• Use facial expressions, gestures, and tone to communicate.
• Respond as if the gibberish is a real language.

**Optional variations**
• Make silly blubbering sounds by dragging a finger up and down over your lips.
• After the scene, guess what the other person was “saying.”`
},
{
  number: 30,
  category: "CONVERSATION GAMES",
  title: "Gibberish Translator",
  text: `**How to play**
• Choose one player to be the Gibberish Speaker and another to be the Translator.
• The Gibberish Speaker talks in gibberish.
• After each sentence, pause and let the Translator explain what they think was just said.

**Prompt ideas**
• Tell a story that begins with “Once upon a time…”
• Explain something that happened earlier that day.
• Give a dramatic speech.
• Share exciting news.`
},
{
  number: 31,
  category: "CONVERSATION GAMES",
  title: "Alphabet Conversation",
  text: `**How to play**
• Have a conversation together, taking turns speaking.
• Each new sentence must begin with the next letter of the alphabet in order.
• You can invent names, situations, and anything else you want.

**Tip**
• If someone gets stuck, the other player can help by suggesting a word or reminding them of the letter.`
},
{
  number: 32,
  category: "CONVERSATION GAMES",
  title: "Counting Conversation",
  text: `**How to play**
• Take turns saying a sentence at a time in a made-up conversation.
• Each turn must include one more word than the previous turn.
• Start with one word, then two, then three, and keep building.

**Example**
• “Hi.”
• “Hi, Barbara!”
• “How are you?”
• “I’m feeling excited today!”`
},
{
  number: 47,
  category: "CONVERSATION GAMES",
  title: "Book Conversation",
  text: `**How to play**
• Pick a random book.
• One player starts a conversation by speaking normally.
• The other player responds only by flipping through the book and reading a line that could sort of make sense as a reply.

**Ways to play**
• The adult responds only with book lines while the child can say anything.
• If both players can read, use two books and do the whole conversation with book lines.`
},
{
  number: 33,
  category: "STORYTELLING GAMES",
  title: "Popcorn Story",
  text: `**How to play**
• Sit in a circle or face each other.
• One person begins the story by saying, “Once upon a time…” and adds a few sentences.
• When they’re ready to pass it along, they say, “POPCORN… [next player’s name]!”
• Keep going until the story reaches an ending.

**Helpful guidelines**
• Tell the story in the past tense.
• Introduce a main character and describe them.
• Present a problem or challenge.
• Add an adventure.
• Work toward a solution.

**Tip for very young players**
• Let little ones fill in the blanks like a Mad Lib.`
},
{
  number: 34,
  category: "STORYTELLING GAMES",
  title: "One Word Story",
  text: `**How to play**
• Create a story together by taking turns saying just one word.
• Work together as if you were one voice telling the story.

**Tips**
• This game is deceptively tricky, even for adults.
• If one word feels too hard, try every other sentence or every other phrase.
• Younger kids can say a few words while older kids or adults stick to one.`,
  variations: [
    { title: "One Word Commercial", text: `• Make up a commercial one word at a time.` },
    { title: "One Word Motivational Speech", text: `• Give a dramatic inspirational speech one word at a time.` },
    { title: "One Word News Report", text: `• Try a breaking news version with “This just in…”` },
    { title: "One Word Robot", text: `• Answer questions like a robot one word at a time.` },
    { title: "One Word Poem", text: `• Make up a poem one word at a time.` },
    { title: "One Word Fortune Teller", text: `• Predict someone’s future one word at a time.` },
    { title: "One Word Complaint Letter", text: `• Start with “Dear…” and complain one word at a time.` },
    { title: "One Word Dream", text: `• Start with “Last night I dreamt…”` },
    { title: "One Word Customer Service Hotline", text: `• Do a hotline version one word at a time.` },
    { title: "One Word Movie Trailer", text: `• Start with “In a world…”` },
    { title: "One Word GPS Directions", text: `• Give directions one word at a time.` },
    { title: "One Word Love Letter", text: `• Start with “Dear…” and read a love letter one word at a time.` },
    { title: "One Word Saying", text: `• Start with “You know what they say…”` }
  ]
},
{
  number: 45,
  category: "STORYTELLING GAMES",
  title: "Fortunately / Unfortunately",
  text: `**How to play**
• Tell a story together, one sentence at a time.
• Players alternate sentences, starting each one with either “Fortunately…” or “Unfortunately…”
• The story swings back and forth between problems and silver linings.

**Example**
• “Unfortunately, I lost my shoes.”
• “Fortunately, I love being barefoot.”
• “Unfortunately, I stepped on a Lego.”
• “Fortunately, it was the Lego I’d been missing for two years!”`
},
{
  number: 46,
  category: "STORYTELLING GAMES",
  title: "Tell Me About the Time",
  text: `**How to play**
• One person says, “[Name]… tell me about the time…” and finishes the sentence with a wild, imaginative prompt.
• The other person immediately jumps into telling the story.
• The listener can ask questions along the way to help it grow.

**Prompts to get you started**
• Tell me about the time a cow wandered into your backyard.
• Tell me about the time you were about to bite into an orange and it started screaming.
• Tell me about the time your shoes ran away without you.`
},
{
  number: 56,
  category: "CREATIVITY CHALLENGES",
  title: "Fake Definitions",
  text: `**How to play**
• One person invents a silly-sounding fake word.
• Everyone else takes turns pretending they know exactly what it means, explaining the definition and using the word in a sentence.
• There are no wrong answers.

**Example**
• “Your word is scooperdinkle.”
• “A scooperdinkle is a measurement you use when you’re cooking without a recipe.”`
},
{
  number: 57,
  category: "CREATIVITY CHALLENGES",
  title: "Fake Band Names",
  text: `**How to play**
• Take turns quickly calling out fake band names.
• Do not pause to think.
• Say whatever pops into your head and keep the momentum going.

**Optional variations**
• Make up the band’s hit song or album title.
• Decide what kind of music they play.
• Add a dramatic band introduction voice.`
},
{
  number: 58,
  category: "CREATIVITY CHALLENGES",
  title: "Fake Slang",
  text: `**How to play**
• One person uses a made-up word naturally in a sentence.
• The other person responds by saying, “You mean…” and guesses what they think the word means.
• The original speaker goes along with that interpretation.

**Example**
• “Yesterday I was at the park and I totally barked.”
• “You mean you saw a dog you connected with so deeply it felt like you were speaking its language?”`
},
{
  number: 59,
  category: "CREATIVITY CHALLENGES",
  title: "Movie Critic / Book Review",
  text: `**How to play**
• One person comes up with a fake movie or book title.
• The other person becomes the critic, describing the plot or cast and reviewing it.

**Optional things to add**
• A star rating
• Surprising casting choices
• A sequel, prequel, or reboot`
},
{
  number: 60,
  category: "CREATIVITY CHALLENGES",
  title: "Magic Spells",
  text: `**How to play**
• One person starts a spell by saying a rhythmic, made-up phrase.
• The other person finishes the spell with a line that explains what the magic does.

**Example**
• “Hippity-hoppity-boopity-bear…”
• “…Make me have clean underwear!”`
},
{
  number: 61,
  category: "CREATIVITY CHALLENGES",
  title: "Mystery Guest",
  text: `**How to play**
• One or two players are the Interviewers.
• They secretly choose an identity for the Mystery Guest.
• The guest returns and is welcomed onto the “talk show.”
• The Interviewers ask questions and give clues to help the guest figure out who they are.

**Example**
• The secret identity is a dragon.`
},
{
  number: 62,
  category: "CREATIVITY CHALLENGES",
  title: "Interrogation",
  text: `**How to play**
• One person is the Criminal.
• One or more other players are the Interrogators.
• The Interrogators secretly decide what happened, where it happened, and who it happened with.
• Then they give clues so the Criminal can guess.

**Tips**
• Choose an accomplice everyone knows.
• Don’t give all the clues at once.`
},
{
  number: 63,
  category: "CREATIVITY CHALLENGES",
  title: "TV Talking",
  text: `**How to play**
• Turn the volume down on a family-friendly show.
• Players choose a character and voice them in real time, saying whatever comes to mind.
• Accents, nonsense, dramatic monologues, and total absurdity are all welcome.

**Variation**
• Nature Narrator: mute a nature documentary and have one person narrate while others voice the animals.`
},
{
  number: 51,
  category: "MUSICAL GAMES",
  title: "Song-on-the-Spot",
  text: `**How to play**
• Two players sing a song together simultaneously, inventing the lyrics as they go.
• One person leads while the other follows, trying to match the words, melody, and timing in real time.

**Helpful way to start**
• Come up with a made-up song title before you begin.

**Ways to play with more people**
• One person can act as an interviewer introducing the duo and asking about their “new album.”`
},
{
  number: 49,
  category: "MUSICAL GAMES",
  title: "Build a Rap",
  text: `**How to play**
• Everyone starts and keeps the same steady beat: “Bum-ba-dadum-badum-badum-ba”
• One player says, “I’m thinking of a word that rhymes with…”
• The next player adds a rhyming line.
• Keep going until someone wants to reset with a new rhyme.

**Example**
• “I’m thinking of a word that rhymes with bee.”
• “Oops, I fell and scraped my knee.”`
},
{
  number: 50,
  category: "MUSICAL GAMES",
  title: "Syllable Swap",
  text: `**How to play**
• Choose a song everyone knows well.
• Sing the song together, but trade off every syllable, one at a time.

**Ways to make it easier**
• Start by swapping every word instead of every syllable.
• Use a slower song.
• Practice one line at a time.

**Optional challenge**
• Try moving your mouth the entire time, even when it’s not your syllable.`
},
{
  number: 52,
  category: "MUSICAL GAMES",
  title: "Bawk That Tune",
  text: `**How to play**
• Choose a familiar song.
• One person “sings” it using only chicken bawking sounds.
• The other players try to guess the song.

**Fun variations**
• Baa that tune
• Moo that tune
• Croak that tune
• Yawn that tune
• Burp that tune`
},
{
  number: 53,
  category: "MUSICAL GAMES",
  title: "The Jingle Game",
  text: `**How to play**
• Pick a random item nearby.
• One person holds it up and sings a short opening line naming the product.
• The next person immediately finishes the jingle.

**Example**
• “Bar of soap!”
• “The cleanest armpits you’ll ever smell!”

**Ways to play anywhere**
• At home
• In the car
• At the store`
},
{
  number: 54,
  category: "MUSICAL GAMES",
  title: "5, 6, 7, 8!",
  text: `**How to play**
• One player claps out a steady beat and calls out, “5, 6, 7, 8!”
• The other player immediately begins an improvised dance.
• Dance for two full 8-counts, then finish with a strong pose.

**Ways to adjust**
• Do one 8-count instead of two.
• Dance slowly or very fast.
• Add themed dances like robot, ballerina, dinosaur, or sleepy sloth.`
},
{
  number: 55,
  category: "MUSICAL GAMES",
  title: "Fake Dance Trend",
  text: `**How to play**
• One person pretends they’ve discovered a cool new dance trend.
• They give it a name and teach the moves step by step.
• Once everyone knows the steps, do the dance together.

**Example**
• “Have you heard of this new dance trend? It’s called I Ate Too Many Donuts.”`
},
{
  number: 48,
  category: "MUSICAL GAMES",
  title: "One-Word Song",
  text: `**How to play**
• Make up a song by switching off every word.
• One person says or sings a word, then the next person adds the next word.

**Ways to make it easier**
• Switch off every line instead of every word.
• Choose a silly song title ahead of time.
• Start by rewriting a familiar song into a parody.`
},
{
  number: 72,
  category: "PHYSICAL GAMES",
  title: "Be My Arms",
  text: `**How to play**
• One person stands or kneels and places their arms behind their back.
• The other person stands behind them and slides their arms under the front person’s armpits, becoming their “arms.”

**Roles**
• The person in front is the Voice and Face.
• The person in back is the Arms.

**Example ideas**
• Sing a song together.
• Act out a story or short scene.
• Record a silly birthday message.`
},
{
  number: 68,
  category: "PHYSICAL GAMES",
  title: "Sculptor",
  text: `**How to play**
• One person is the Sculptor.
• The other person is the Sculpture.
• The Sculptor gently guides the Sculpture into a position.
• Then the Sculptor gives the sculpture a title.

**Example**
• “I call this sculpture: You’re on a roller coaster and your wig just flew off.”`
},
{
  number: 69,
  category: "PHYSICAL GAMES",
  title: "Lights On / Lights Off",
  text: `**How to play**
• One person is the Prompt-Giver.
• They give a funny, vivid prompt for a pose.
• Then they turn off the lights and count down: “3… 2… 1…”
• The other player or players strike a pose.
• Then the lights come back on for the reveal.

**Example prompts**
• You just looked up and saw a grandma skydiving straight toward you.
• You’re a frog who just fell off your lily pad and feels very embarrassed.
• You just caught a whiff of your own stinky armpit and you’re about to faint.`
},
{
  number: 70,
  category: "PHYSICAL GAMES",
  title: "Guess What I’m Eating",
  text: `**How to play**
• One person silently pretends to eat a specific food using exaggerated facial expressions, hand movements, and body language.
• The other player or players try to guess what food is being eaten.

**Example**
• Pretending to eat a giant cheeseburger.
• Pretending to eat a grape.`
},
{
  number: 71,
  category: "PHYSICAL GAMES",
  title: "Reverse Charades",
  text: `**How to play**
• One person is the Director.
• The other person is the Actor.
• The Director gives specific physical instructions.
• The Actor follows them, then tries to guess what they were acting out.

**Example**
• “Squat down.”
• “Put your hands on the ground between your legs.”
• “Stick your tongue out really fast and then pull it back in.”`
},
{
  number: 73,
  category: "PHYSICAL GAMES",
  title: "Floating Dancer",
  text: `**How to play**
• One person creates the floating “legs.”
• The second person becomes the upper body and arms.
• Together, it looks like one person whose legs are floating in the air.

**Tip**
• Set up your camera before this one so you can watch it back.

**Note**
• The humor comes from the illusion and unrealistic flexibility, not from making fun of bodies.`
},
{
  number: 67,
  category: "PHYSICAL GAMES",
  title: "Ten Seconds to Be a…",
  text: `**How to play**
• Take turns giving each other a random, weird prompt.
• As soon as the prompt is given, count down from ten while the other person acts it out as fully as they can.
• When the countdown ends, stop, laugh, and switch roles.

**Example prompts**
• A baby bird hatching out of an egg
• A rocking chair being built and rocked for the first time
• A firework show going off in the sky

**Tips for making prompts**
• Look around the room for inspiration.
• Use inanimate objects as characters.
• Animals are always a great go-to.`
},
{
  number: 74,
  category: "PROPS GAMES",
  title: "Props",
  text: `**How to play**
• Grab a random item nearby.
• One person starts by acting out a silly, unexpected purpose or meaning for the object.

**Example**
• Someone holds a paper towel roll to their forehead and says, “I can’t believe my unicorn horn grew overnight!”

**Helpful tip**
• Look at the shape, size, or texture of the object and let that guide your imagination.`
},
{
  number: 75,
  category: "PROPS GAMES",
  title: "Infomercial or Shark Tank",
  text: `**How to play**
• Find a random object and assign it a brand-new purpose.
• Then choose one of two ways to play.

**Infomercial**
• Dramatically sell the invention.
• Explain what it is, what problem it solves, and why it’s amazing.

**Shark Tank**
• Pitch the invention.
• The other players act as Investors and ask questions.`
},
{
  number: 76,
  category: "PROPS GAMES",
  title: "20-Second Costume",
  text: `**How to play**
• Set a timer for 20 seconds.
• Everyone grabs nearby items and throws together a costume on the spot.
• When time is up, freeze.

**Then**
• Explain your costume, or
• Deliver a line fully in character

**Example ideas**
• A throw-blanket toga
• A paper towel roll as a rhino horn
• A scarf cape superhero`
},
{
  number: 77,
  category: "PROPS GAMES",
  title: "Unboxing Video",
  text: `**How to play**
• One person secretly fills a box with random everyday items.
• They hand it to the other player, who pretends they are filming an unboxing video.
• The unboxer opens the box one item at a time and reacts with over-the-top excitement.

**Tip**
• Treat every item like it is the best thing you have ever seen.`
}
];

const els = {
  menu: document.getElementById("menu")
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

function formatGameText(text) {
  if (!text) return "";

  let formatted = escapeHTML(text);
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  formatted = formatted.replace(/^•\s(.+)$/gm, '<div class="game-bullet">• $1</div>');
  formatted = formatted.replace(/\n{2,}/g, "<br><br>");
  formatted = formatted.replace(/\n/g, "<br>");

  return formatted;
}

function renderMenu() {
  const menu = els.menu;
  if (!menu) return;

  const cats = uniqueCategories(GAMES);

  const html = cats.map((cat) => {
    const items = gamesForCategory(GAMES, cat).map((g) => {
      const variations = (g.variations && g.variations.length)
        ? `
          <div class="variation-header"><strong>Variations</strong></div>
          ${g.variations.map((v) => `
            <details class="variation">
              <summary>${escapeHTML(v.title)}</summary>
              <div class="variation-body">${formatGameText(v.text || "")}</div>
            </details>
          `).join("")}
        `
        : "";

      return `
        <details class="menu-game">
          <summary class="menu-item">
            <span class="menu-item__title"><strong>${escapeHTML(g.title)}</strong></span>
          </summary>
          <div class="inline-game">
            <div class="game-pill">${escapeHTML(g.category)}</div>
            <div class="game-title"><strong>${escapeHTML(g.title)}</strong></div>
            <div class="game-text">${formatGameText(g.text)}</div>
            <div class="game-variations">${variations}</div>
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

  menu.innerHTML = html;

  menu.querySelectorAll("details.menu-game").forEach((details) => {
    details.addEventListener("toggle", () => {
      if (details.open) {
        menu.querySelectorAll("details.menu-game").forEach((other) => {
          if (other !== details) other.open = false;
        });
      }
    });
  });
}

function init() {
  renderMenu();
}

init();
