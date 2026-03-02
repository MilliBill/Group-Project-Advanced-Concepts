// 1. Fetch the data
fetch("/api/venues")
  .then((response) => response.json())
  .then((data) => {
    const sortedData = data.sort((a, b) => a.name.localeCompare(b.name, "sv"));
    renderSimpleList(sortedData);
  })
  .catch((err) => console.error("Connection error:", err));

//2. Render it
function renderSimpleList(venues) {
  const container = document.getElementById("venue-container");
  container.innerHTML = "";

  const ul = document.createElement("ul");

  venues.forEach((venue) => {
    const li = document.createElement("li");

    li.innerText = venue.name;

    ul.appendChild(li);
  });

  container.appendChild(ul);
}
//CLICK HERE -> http://localhost:3000/ to find the stores page yall
