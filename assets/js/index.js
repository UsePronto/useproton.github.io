if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js", { scope: "/jquery/" });
  });
}

const imageContainer = document.getElementById("image-container");
const searchBox = document.getElementById("search-box");
let imagesData = [];

async function loadImages() {
  const cachedData = localStorage.getItem("imagesData");
  if (cachedData) {
    imagesData = JSON.parse(cachedData);
    renderImages();
  } else {
    try {
      const response = await fetch("./assets/json/g.json");
      imagesData = await response.json();
      localStorage.setItem("imagesData", JSON.stringify(imagesData));
      renderImages();
    } catch (error) {
      console.error("Error fetching JSON data:", error);
    }
  }
}

function renderImages() {
  const fragment = document.createDocumentFragment();

  imagesData.forEach((image) => {
    const imageElement = document.createElement("a");
    imageElement.href = image.src;

    const imgContainer = document.createElement("div");
    imgContainer.className = "image-container";

    const img = document.createElement("img");
    img.src = image.logo;
    img.alt = image.title || "ERROR";
    img.width = 130;
    img.height = 130;
    img.className = "classy";
    img.loading = "lazy";

    imgContainer.appendChild(img);
    imageElement.appendChild(imgContainer);
    fragment.appendChild(imageElement);
  });

  imageContainer.appendChild(fragment);
  updateGridLayout();
}

const debounce = (func, delay) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
};

const filterImages = debounce(() => {
  const searchTerm = searchBox.value.toLowerCase();
  imagesData.forEach((image, index) => {
    const imageElement = imageContainer.children[index];
    imageElement.style.display = image.title.toLowerCase().includes(searchTerm) ? "block" : "none";
  });
  updateGridLayout();
}, 300);

searchBox.addEventListener("keyup", filterImages);

imageContainer.addEventListener("click", (event) => {
  const clickedLink = event.target.closest("a");
  if (clickedLink) {
    event.preventDefault();
    const imageIndex = Array.from(imageContainer.children).indexOf(clickedLink);
    const image = imagesData[imageIndex];

    if (!image.alert) {
      const url = image.link || image.src;
      localStorage.setItem("Iframe", __uv$config.prefix + __uv$config.encodeUrl(url));
      window.location.href = image.link ? "go.html" : url;
    } else {
      alert(image.alert);
    }
  }
});

function updateGridLayout() {
  imageContainer.style.gridTemplateColumns = `repeat(auto-fill, 130px)`;
  imageContainer.style.gridAutoRows = "130px";
}

loadImages();
