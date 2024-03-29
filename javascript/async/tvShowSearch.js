const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (evt) {
  evt.preventDefault();
  const searchTerm = form.elements.q.value;
  const res = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${searchTerm}`,
  );
  makeImages(res.data);
});

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement('img');
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
