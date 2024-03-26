document.addEventListener("keypress", function (event) {
  var key = event.key.toLowerCase();
  var textarea = document.getElementById("keylogger");

  if (/^[a-z]$/.test(key)) {
    if (document.activeElement === textarea) {
      textarea.value += key + key;
    } else {
      textarea.value += key;
    }
  }
});
