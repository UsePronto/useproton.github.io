const imageContainer = document.getElementById('image-container');

fetch('./assets/json/g.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(image => {
      const imageElement = document.createElement('a');
      imageElement.href = image.src;

      const img = document.createElement('img');
      img.src = image.path;
      img.alt = image.title || 'ERROR';
      img.style.width = "90px";
      img.style.height = "140px";
      img.className = "classy";
 
      imageElement.addEventListener("click", function (event) {
        event.preventDefault();

        localStorage.setItem("Iframe", image.src);
        window.location.href = "./go.html";
      });


      imageElement.appendChild(img);

      imageContainer.appendChild(imageElement);
    });
  })
  .catch(error => {
    console.error('Error fetching JSON data:', error);
  });

function home() {
  window.location.href = "./index.html"
}
