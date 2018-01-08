window.addEventListener('load', function () {
  var textDescriptors = [
    "Software Engineer",
    "Maker of things",
    "Doer of stuff",
    "Cool cat",
    "Software Enginerd",
    "Programmer",
    "Code Gypsy"
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
