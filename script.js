
function infos(chars) {
  // Caractères autorisés
  let allowedCharacter = new RegExp("[a-z A-Z]", "i");
  let getOk;
  for (x = 0; x < chars.value.length; x++) {
    getOk= allowedCharacter.test(chars.value.charAt(x));
      if (getOk == false) {
          chars.value = chars.value.substr(0, x) + chars.value.substr(x + 1, chars.value.length - x + 1); x--;
      }
  }
}