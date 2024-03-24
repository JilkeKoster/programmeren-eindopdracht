console.log("Hallo Wereld")

let bericht = "Digitaal Artefact";
let kop = document.querySelector("h1");
kop.textContent = bericht;

// Javascript: Popup 
// bron: https://www.youtube.com/watch?v=MBaw_6cPmAw
let openPopupButtons = document.querySelectorAll('[data-popup-target]');
let closePopupButtons = document.querySelectorAll('[data-close-button]');
let overlay = document.getElementById('overlay');

// Javascript uitleg:
// [data-popup-trager] staat tussen [haakjes] omdat het element uit de htlm word gehaalt. 
// 'overlay' staat tussen 'haakjes' omdat het een ID is.

openPopupButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popup = document.querySelector(button.dataset.popupTarget);
        openPopup(popup);
    });
});

closePopupButtons.forEach(button =>{
    button.addEventListener('click', () => {
        const popup = button.closest('.popup');
        closePopup(popup);
    });
});

// Javascript uitleg: openPopupButtons/closePopupButtons
// forEach zorg er voor dat alle knoppen dezelfde javascript gebruiken omdat, ze zelfde handelingen hebben.
// => is een arrow functie die handig voor gebruik is voor de forEach
// button.dataset.popupTarget 
// button is een variable van het html element, 
// dataset = is een DOM-element die toegang bied tot alle aangepaste data-attribyren
// popupTarget = koppelt het aangepaste data element 
// openPopup = word de functie aangesproken met openPopup
// popup = een HTML elenment wat eerder is gesleceteerd met document.querySelector en button.dataset.popupTarget


overlay.addEventListener('click', () => {
    const popups = document.querySelectorAll('.popup.active');
    popups.forEach(popup => {
        closePopup(popup);
    });
});

// Javascript uitleg: overlay
// '.popup.active' zorgt ervoor dat de CSS classen worden aangesproken

function openPopup(popup) {
    if (popup == null) return;
    popup.classList.add('active');
    overlay.classList.add('active');
}

function closePopup(popup) {
    if (popup == null) return;
    popup.classList.remove('active');
    overlay.classList.remove('active');
}

// Javascript uitleg: openPopup/closePopup
// if (popup == null) = controleerd of de variabele 'popup' gelijk is aan null.
// retrun zorgt er voor dat als 'popup' gelijk is aan null is de rest van de functie word overgeslagen.
// popup.classList = bied toegang aan de lijst met classen die aan het elment zijn toegevoegd.
// add zorgt er voor dat er een nieuwe class word toegevoegt aan het HTML element.

// Javascript: Audio 
// bron: https://www.youtube.com/watch?v=VXWvfrmpapI&t=275s

const muziek = document.getElementById('muziek');
let audio = new Audio();

// Javascript uitleg:
// Hij maakt hier binnen javascript een nieuw HTML element aan.

audio.src = 'audio/muzieknieuw.mp3';

// Javascript uitleg:
// Linkt het audio bestand

let isPlaying = false;

// Javascript uitleg:
// false zorgt er voor dat die nu niet actief is.

muziek.addEventListener('click', function(){
    if (!isPlaying) {
        audio.play();
        isPlaying = true;
    } else {
        audio.pause();
        isPlaying = false;
    }
});
// Javascript uitleg:
// ! voor isPlaying zorgt er voor dat als isPlaying false is deze actie word uitgeveort.
// Bij else is dat als isPlaying gelijk is aan true gaat de muziek op pauze. 