function change() {
  document.getElementById("copyright").innerHTML =
    "Vielen Dank, dass Sie sich meine Website anschauen.";
  document.getElementById("copyright").style.backgroundColor = "#0b93c9";

  setTimeout(() => {
    document.getElementById("copyright").innerHTML =
      "Reinhild's myFriend - copyright &copy; 2026 all rights reserved";
    document.getElementById("copyright").style.backgroundColor = "#da1c68";
  }, 5000);
}
