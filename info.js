document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const itemId = urlParams.get("id");
  const url = "https://tpgoawbuqbxybyhyizaf.supabase.co";
  const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwZ29hd2J1cWJ4eWJ5aHlpemFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNzAyNjIsImV4cCI6MjAwOTY0NjI2Mn0.jx4Im6kt2Ri2WGn70Tlvrw6TQY7ROPz2sTjuzpHb-08";

  if (itemId) {
    // Fetch data for the specific item using its ID
    fetch(`${url}/rest/v1/Vild%20Mad%20database?id=eq.${itemId}`, {
      method: "GET",
      headers: {
        apikey: key,
      },
    })
      .then((res) => res.json())
      .then(showData);

    function showData(item) {
      if (item.length === 1) {
        item = item[0]; // Get the first (and only) item in the array
        // Populate the card with item data
        document.querySelector(".name").textContent = item.Navn;
        document.querySelector(".kategori").textContent = item.Type;
        document.querySelector(".beskrivelse").textContent = item.Beskrivelse;
        document.querySelector(".sted").textContent = item.Sankested;
        // Set the image source
        const imgElement = document.querySelector("img");
        imgElement.src = item.image;
        imgElement.alt = "svamp"; // Set the alt text as needed
      } else {
        // Handle the case where no item with the specified ID was found
        console.error("Item not found");
      }
    }
  } else {
    // Handle the case where no "id" query parameter is present
    console.error("No 'id' parameter found in the URL");
  }
});
