window.addEventListener('load', function () {
  var textDescriptors = [
    "Software Engineer",
    "Cool cat",
    "Programmer",
    "Maker of things",
    "Scrambler of Subtitles",
    "Wow you're still here",
    "You're amazing",
    "#1 fan right here",
    "You win points for the dedication",
    "The scrambling never stops",
    "It's scramble-icious",
    "It's also vaguely annoying",
    "But I love it becuase it's the 2000s again",
    "Can't stop scrambling",
    "Maybe you should just email me?",
    "This is alot of attention",
    "I'm flattered but...",
    "Slightly concerned",
    "Maybe you should just say hello",
    "I'm a big fan of hellos",
    "Maybe I can help you?",
    "Maybe not",
    "But hey, good chat",
    "I'm resetting now",
    "Seriously",
    "Great to meet you",
    "Mysterious internet person",
    "Ok now I'm gone for reals",
    "Maybe",
    "Maybe Not",
    "Have a lovely day"
  ];

  var scrambleLength = 500;
  var scrambleFrequency = 10;
  var currentTextIndex = 0;

  setElementText = function (text) {
    document.getElementById("subtitle").textContent = text;
  }

  startScrambler = function () {
    this.currentRun = 1;
    this.textScrambler = setInterval(this.scrambleProgress, scrambleFrequency);
    this.scramblerTimeout = setTimeout(this.stopScrambler, scrambleLength);
  },

  pickText = function () {
    if (!this.currentTextIndex) {
      this.currentTextIndex = 0;
    }
    this.currentDescriptor = textDescriptors[this.currentTextIndex % textDescriptors.length];

    this.currentTextIndex = this.currentTextIndex + 1;

    this.startScrambler();
  },

  scrambleProgress = function () {
    this.currentByLine = this.currentDescriptor;

    var numTotalRuns = scrambleLength/scrambleFrequency;

    this.progress = this.currentRun/ numTotalRuns;

    var textToScramble = this.currentDescriptor;
    var scrambledText = "";

    for (var i = 0, len = textToScramble.length; i < len; i++) {
      var char = textToScramble[i];
      var textPosition = i/textToScramble.length;

      if (this.progress < textPosition) {
        var letter = this.findScrambledCharacter();
        scrambledText += letter;
      } else {
        scrambledText += textToScramble[i];
      }
    }

    this.currentRun += 1;
    this.setElementText(scrambledText);
  },

  findScrambledCharacter = function () {
    var charArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    return charArray[Math.floor(Math.random() * charArray.length)];
  },

  stopScrambler = function () {
    clearTimeout(this.textScrambler);
    clearInterval(this.scramblerTimeout);

    this.setElementText(this.currentDescriptor);
  }


  setInterval(this.pickText, 2000);
  pickText();


}, false);
