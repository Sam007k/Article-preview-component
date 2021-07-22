document.getElementById("share").addEventListener("click", showShareDesktop);
const profile = document.querySelector(".profile");
const profileActive = document.querySelector(".profile-active");
function showShare() {
  profile.classList.toggle("profile-active");
  // profileActive.style.display = "block";
  // profile.style.display = "none";
  // profileActive.style.display = "block";
}

function showShareDesktop() {
  console.log(1);
  profile.classList.toggle(
    (document.querySelector(".shareDesktop").style.display = "block")
  );
}
