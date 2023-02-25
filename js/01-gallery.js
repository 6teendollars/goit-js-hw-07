import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const markup = craeteMarkup(galleryItems);
galleryRef.innerHTML = markup;
function craeteMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
      </a>
        </div>`;
    })
    .join("");
}

galleryRef.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  } else {
    const instance = basicLightbox.create(
      `<div class="modal"><img src="${e.target.dataset.source}" alt='${e.target.alt}'></div>`,
      {
        onShow: (instance) => {
          window.addEventListener(
            "keydown",
            (event) => {
              if (event.code === "Escape") {
                instance.close();
              }
            },
            { once: true }
          );
        },
      }
    );
    instance.show();
  }
});
console.log(galleryItems);
