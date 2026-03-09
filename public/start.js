//Getting the stores from the server
fetch("/api/venues")
  .then((res) => res.json())
  .then((data) => {
    /*  ensures Swedish characters (ÅÄÖ) are sorted correctly.
  Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
*/
    const sortedData = data.sort((a, b) => a.name.localeCompare(b.name, "sv"));

    //sorting
    sortedData.forEach((store) => {
      const firstLetter = store.name.charAt(0).toUpperCase();
      const container = document.querySelector(
        `#section${firstLetter} + .stores`,
      );

      if (container) {
        const p = document.createElement("p");
        p.style.padding = "5px 20px";
        p.style.fontFamily = "Arial, Helvetica, sans-serif";

        // Creating the link for the stores
        if (store.url) {
          const link = document.createElement("a");
          link.href = store.url.startsWith("http")
            ? store.url
            : "https://" + store.url;
          link.target = "_blank";
          link.innerText = store.name;
          p.appendChild(link);
        } else {
          p.innerText = store.name;
        }

        container.appendChild(p);
      }
    });
    setupCollapsibles();
  })
  .catch((err) => console.error("Error loading venues:", err));

//dropdown stores
function setupCollapsibles() {
  let coll = document.getElementsByClassName("collapsible");

  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      let stores = this.nextElementSibling;

      if (stores.style.maxHeight) {
        stores.style.maxHeight = null;
      } else {
        stores.style.maxHeight = stores.scrollHeight + "px";
      }
    });
  }
}
