let like_button = document.querySelector("#post-btn");
let like_counter = 0;
function likeFunctionality() {
  like_button.style.backgroundColor = "#3b82fc";
  like_button.style.color = "#eff6ff";
  like_button.style.cursor = "pointer";
  like_counter++;
}
like_button.addEventListener("click", likeFunctionality);
