// Global variable
let team = "MFF";

// self invoked anonymous function
(function () {
  const headerTag = document.getElementById("number");

  headerTag.addEventListener("numberChanged", function (e) {
    headerTag.textContent = e.detail.number;
    headerTag.style.color = e.detail.textColor;
  });
  document.getElementById("button").addEventListener("click", changeNumber);

  function changeNumber(n, c) {
    const event = new CustomEvent("numberChanged", {
      detail: {
        number: 1,
        textColor: "blue",
      },
    });

    headerTag.dispatchEvent(event);
  }

  document.getElementById("text").innerHTML = team + " is the better than AIK.";

  // Assignment with &&
  team && alert("Best team = " + team);
})();
