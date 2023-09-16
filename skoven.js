const url = "https://tpgoawbuqbxybyhyizaf.supabase.co";

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwZ29hd2J1cWJ4eWJ5aHlpemFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNzAyNjIsImV4cCI6MjAwOTY0NjI2Mn0.jx4Im6kt2Ri2WGn70Tlvrw6TQY7ROPz2sTjuzpHb-08";

//fetch(url+"/rest/v1/test_products?id=eq.1",{
fetch(url + "/rest/v1/Vild%20Mad%20database", {
  method: "GET",
  headers: {
    apikey: key,
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(items) {
  const template = document.querySelector("#skovenitems").content;
  const container = document.querySelector(".svend");
  items.forEach((element) => {
    if (element.Sankested === "Skoven") {
      const copy = template.cloneNode(true);

      copy.querySelector(".title").textContent = element.Navn;

      //image source
      const imgElement = copy.querySelector("img");
      imgElement.src = element.image;
      imgElement.alt = "svamp";

      // Append
      container.appendChild(copy);
    }
  });
}
