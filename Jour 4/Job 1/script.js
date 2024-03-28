document.getElementById("button").addEventListener("click", function () {
  fetch("citation.txt")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error");
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("citation").textContent = data;
    });
});
