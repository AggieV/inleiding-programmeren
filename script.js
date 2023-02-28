//nieuwste versie eindopdracht

console.log('lekkerzonnen');

//variabelen

var zonButton = document.getElementById('zon');
var aftersunButton = document.getElementById('aftersunbutton');
var insmerenAftersun = document.getElementById('aftersunopdoen');
var vlammen = document.getElementById('vlammen');
var h1El = document.querySelector("h1");
var tintCounter = 0;
var vrouwImage = document.getElementById('vrouw');
var aftersunCounter = 0;
var soundEffectAftersun = document.getElementById('audiovanaftersun');
var soundEffectPlons = document.getElementById('audiovanplons');
var soundEffectZee = document.getElementById('audiovanzee');
var arrayOfImages = ["images/vrouwbikini1.png",
  "images/vrouwbikini2.png",
  "images/vrouwbikini3.png",
  "images/vrouwbikini4.png",
  "images/vrouwbikini5.png"
]
var zeeButton = document.getElementById('zee');
var spetters = document.getElementById('spetters');
var pijl = document.getElementById('pijl');
var zeeCounter = 0;

soundEffectZee.volume = 0.2;

//functions en eventlisteners

zonButton.addEventListener("click", tintBruiner);

function tintBruiner() {
  soundEffectZee.play();
  if (tintCounter < 4) {
    tintCounter += 1;
    vrouwImage.src = arrayOfImages[tintCounter]
  }
  if (tintCounter == 4) {
    vlammen.style.opacity = 1.0;
    aftersunButton.style.opacity = 1.0;
    h1El.textContent = "Aaargh!! Ik ben verbrand! Smeer me in met aftersun.";
    console.log('verbrand');
  }
}

aftersunButton.addEventListener("click", insmeren);

function insmeren() {
  if (aftersunCounter == 1) {
    aftersunCounter = 0;
    insmerenAftersun.style.opacity = 0.0;
    console.log('nu moet de aftersun weg');
    soundEffectAftersun.pause();

  } else if (aftersunCounter == 0) {
    aftersunCounter = 1;
    insmerenAftersun.style.opacity = 1.0;
    vlammen.style.opacity = 0.0;
    tintCounter = 3;
    vrouwImage.src = arrayOfImages[tintCounter]
    h1El.textContent = "Ah dank je wel, dat koelt lekker af. Nu wil ik lekker gaan zwemmen!";
    pijl.style.opacity = 1.0;
    console.log('nu moet de aftersun terug komen');
    soundEffectAftersun.play();

    zeeButton.addEventListener("click", zwemmenZee);

    function zwemmenZee() {
      if (zeeCounter == 1) {
        zeeCounter == 0;
        vrouwImage.style.opacity = 0.0;
        spetters.style.opacity = 1.0;
        h1El.textContent = "Het water is lekker koel, dank je wel en fijne dag!";

      } else if (zeeCounter == 0) {
        zeeCounter == 1;
        vrouwImage.style.opacity = 0.0;
        spetters.style.opacity = 1.0;
        h1El.textContent = "Het water is lekker koel, dank je wel en fijne dag!";
        soundEffectPlons.play();
        pijl.style.opacity = 0.0;
      }
    }
  }
}