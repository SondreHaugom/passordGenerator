document.addEventListener('DOMContentLoaded', function() {
    let input = document.querySelector(".password-length");
    let btn = document.querySelector(".generate-btn");
    let result = document.querySelector(".password-output")
    let copyBtn = document.querySelector(".copy-btn"); 

btn.addEventListener("click", function() {
    let length = input.value;
    generatePassword(length);
});

function generatePassword(length) {
    if (length < 8 || length > 20) {
        alert("Password length must be between 8 and 20 characters.");
        return;
    }
    let charset = "abcdefghijklmnopqrstuvwxyzæøåABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    let password = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    result.textContent = password;

    return password;
}

copyBtn.addEventListener("click", function () {
    let password = result.textContent;
    if (password) {
        navigator.clipboard.writeText(password).then(function() {
            alert("Password copied to clipboard!");
        }); 
    } else {
        alert("No password to copy!");
    }
}); 

});

