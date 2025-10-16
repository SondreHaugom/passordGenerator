// håndterer DOM når innholdet er lastet
document.addEventListener('DOMContentLoaded', function() {
    // henter elementer fra DOM
    let input = document.querySelector(".password-length");
    let btn = document.querySelector(".generate-btn");
    let result = document.querySelector(".password-output")
    let copyBtn = document.querySelector(".copy-btn"); 
// legger til event listener for generer knapp
btn.addEventListener("click", function() {
    // henter passordlengde fra input
    let length = input.value;
    // genererer passord
    generatePassword(length);
});

// definerer funksjon for å generere passord
function generatePassword(length) {
    // sjekker at lengden er innenfor gyldig område
    if (length < 8 || length > 20) {
        alert("Passordlengde må være mellom 8 og 20 tegn.");
        return;
    }
    // definerer karaktersett og genererer passord
    let charset = "abcdefghijklmnopqrstuvwxyzæøåABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    // definerer variabel for passord
    let password = "";
    // en for løkke for å bygge passordet
    for (let i = 0; i < length; i++) {
        // velger en tilfeldig karakter fra settet
        let randomIndex = Math.floor(Math.random() * charset.length);
        // legger til karakteren i passordet
        password += charset[randomIndex];
    }
    // viser passordet i resultatfeltet
    result.textContent = password;
    // returnerer det genererte passordet
    return password;
}
// legger til event listener for kopier knapp
copyBtn.addEventListener("click", function () {
    // henter passordet fra resultatfeltet
    let password = result.textContent;
    // kopierer passordet til utklippstavlen
    if (password) {
        // kopierer til utklippstavlen og gir tilbakemelding
        navigator.clipboard.writeText(password).then(function() {
            alert("Passord kopiert!");
        }); 
    } else {
        alert("Ingen passord å kopiere!");
    }
}); 

});

