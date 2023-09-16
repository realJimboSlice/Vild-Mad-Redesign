const url = "https://tpgoawbuqbxybyhyizaf.supabase.co";

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwZ29hd2J1cWJ4eWJ5aHlpemFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNzAyNjIsImV4cCI6MjAwOTY0NjI2Mn0.jx4Im6kt2Ri2WGn70Tlvrw6TQY7ROPz2sTjuzpHb-08";

fetch(url + "/rest/v1/Vild%20Mad%20database", {
  method: "GET",
  headers: {
    apikey: key,
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(items) {
  const template = document.querySelector("#randomitems").content;
  const container = document.querySelector(".svend");
  const seed = Math.floor(Date.now() / 1000);

  // Tilfældige indekser
  const randomIndices = [];

  // Vælg 4 tilfældige indekser fra "Sankested"
  while (randomIndices.length < 4) {
    const randomIndex = Math.floor(Math.random() * items.length);
    const element = items[randomIndex];
    if (element.Sankested && !randomIndices.includes(randomIndex)) {
      randomIndices.push(randomIndex);
    }
  }

  // Opretter en container for hver tilfældig genstand
  randomIndices.forEach((randomIndex) => {
    const element = items[randomIndex];
    const copy = template.cloneNode(true);

    // Indsætter data
    copy.querySelector(".title").textContent = element.Navn;

    // Billede
    const imgElement = copy.querySelector("img");
    imgElement.src = element.image;
    imgElement.alt = "svamp"; // Du kan ændre alt-teksten efter behov

    // Appender
    container.appendChild(copy);
  });
}
