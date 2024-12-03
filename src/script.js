// Fetch the JSON file
fetch('./startups.json')
  .then((response) => response.json())
  .then((startups) => {
    const container = document.getElementById("startups");
    const template = document.getElementById("startup-template");

    // Render each card using the template
    startups.forEach((startup) => {
      const clone = template.content.cloneNode(true);
      clone.querySelector("img").src = startup.image;
      clone.querySelector("img").alt = startup.name;
      clone.querySelector(".category").textContent = startup.category;
      clone.querySelector(".name").textContent = startup.name;
      clone.querySelector(".description").textContent = startup.description;
      clone.querySelector(".link").href = startup.link;

      container.appendChild(clone);
    });
  })
  .catch((error) => console.error('Error fetching startups:', error));
