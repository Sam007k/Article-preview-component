const shareBtn = document.getElementById("share");
const profile = document.querySelector(".profile");
const profileActive = document.querySelector(".profile-active");
const shareDesktop = document.querySelector(".shareDesktop");

shareBtn.addEventListener("click", screen_resize);

// Display mobile share menu
function showShare() {
  shareDesktop.classList.remove("active");
  profile.classList.toggle("profile-active");
}

// Display Desktop share menu
function showShareDesktop() {
  profile.classList.remove("profile-active");
  shareDesktop.classList.toggle("active");
}

//function for screen resize
function screen_resize() {
  var h = parseInt(window.innerHeight);
  var w = parseInt(window.innerWidth);

  if (w <= 800) {
    showShare();
  } else if (w > 800) {
    showShareDesktop();
  }
}
