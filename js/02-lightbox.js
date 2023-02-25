import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
galleryRef.innerHTML = createMarkup(galleryItems);

function createMarkup(array) {
  return array
    .map((e) => {
      return `<li><a class="gallery__item" href="${e.original}">
  <img class="gallery__image" src="${e.preview}" alt="${e.description}"/>
</a></li>`;
    })
    .join("");
}

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 200,
});
gallery.on("show.simplelightbox");

console.log(galleryItems);
