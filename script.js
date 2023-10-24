let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function () {
  sizePassword.innerHTML = this.value;
};

function generatePassword() {
  const passLength = sliderElement.value;
  const charset =
    "abcdefghijklmnopqrstuvwxyz123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomValuesArray = new Uint8Array(passLength);

  window.crypto.getRandomValues(randomValuesArray);

  let pass = "";

  for (let i = 0; i < passLength; i++) {
    const randomIndex = randomValuesArray[i] % charset.length;
    pass += charset.charAt(randomIndex);
  }

  containerPassword.classList.remove("hide");
  password.innerHTML = pass;
  novaSenha = pass;
}

function copyPassword() {
  navigator.clipboard.writeText(novaSenha);
}
