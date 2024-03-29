document
  .getElementById("inscriptionForm")
  .addEventListener("input", function (event) {
    var emailInput = document.getElementById("email");
    var emailError = document.getElementById("email-error");
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

    emailInput.addEventListener("input", function (event) {
      var emailValue = emailInput.value.trim();
      console.log("hello world");

      if (!emailRegex.test(emailValue)) {
        document.getElementById("email-error").style.display = "block";
      } else {
        document.getElementById("email-error").style.display = "none";
      }
    });
    var mdpInput = document.getElementById("motdepasse");
    var mdpError = document.getElementById("mdp-error");
    var mdpRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    mdpInput.addEventListener("input", function (event) {
      var mdpValue = mdpInput.value.trim();

      if (!mdpRegex.test(mdpValue)) {
        document.getElementById("mdp-error").style.display = "block";
      } else {
        document.getElementById("mdp-error").style.display = "none";
      }
    });
  });
