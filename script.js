const elementById = (id) => {
  return document.getElementById(id);
};

const handleSearch = () => {
  const keyword = elementById("keyword");
  console.log(keyword.value);
  const url = `https://theaudiodb.com/api/v1/json/2/search.php?s=${keyword.value}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showArtists(data));
  const artistContainer = elementById("artists");
  artistContainer.innerHTML = "";
};

const showArtists = (data) => {
  const artistContainer = elementById("artists");
  data?.artists?.forEach((artist) => {
    const div = document.createElement("div");
    div.classList.add("artist-card");
    div.innerHTML = `<div class="image-container">
    <div class="image-container-inner">
      <img
        src="${
          artist.strArtistThumb
            ? artist.strArtistThumb
            : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
        }"
        alt=""
      />
    </div>
  </div>
  <div class="info-container">
    <h1>${artist.strArtist ? artist.strArtist : "Not Available"}</h1>
    <p>Country: ${artist.strCountry ? artist.strCountry : "Not Available"}</p>
    <p>Style: ${artist.strGenre ? artist.strGenre : "Not Available"}</p>
  </div>
  <button class="album-button">
    <i class="fa-solid fa-compact-disc"></i>
    <p class="button-title">Albums</p>
  </button>`;
    artistContainer.appendChild(div);
  });
};
