//Getting the stores from the server
fetch("/api/venues")
  .then((res) => res.json())
  .then((data) => {
    // Sorting stores alphabetically
    const sortedData = data.sort((a, b) => a.name.localeCompare(b.name, "sv"));

    sortedData.forEach((store) => {
      const firstLetter = store.name.charAt(0).toUpperCase();
      const container = document.querySelector(
        `#section${firstLetter} + .stores`,
      );

      if (container) {
        const p = document.createElement("p");
        p.style.padding = "5px 20px";

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

    // Creating the click funtions after finding data
    setupCollapsibles();
  })
  .catch((err) => console.error("Error loading venues:", err));

// Click function to open and close
function setupCollapsibles() {
  let coll = document.getElementsByClassName("collapsible");
  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      let stores = this.nextElementSibling;
      // Vi kollar display. Om den är "block" döljer vi, annars visar vi
      if (stores.style.display === "block") {
        stores.style.display = "none";
      } else {
        stores.style.display = "block";
      }
    });
  }
}
