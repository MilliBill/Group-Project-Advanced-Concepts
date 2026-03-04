//store page collapsible boxes
let coll = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    let stores = this.nextElementSibling;
    if (stores.style.display === "block") {
      stores.style.display = "none";
    } else {
      stores.style.display = "block";
    }
  });
}
