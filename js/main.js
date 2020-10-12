import galleryItem from "./gallery-items.js";
const galleryContainerEl = document.querySelector(".js-gallery");
const lightboxEl = document.querySelector(".js-lightbox");
const lightboxImageEl = document.querySelector(".lightbox__image");
const buttonCloseEl = document.querySelector(
  'button[data-action="close-lightbox"]'
);

const cartMarkup = createGalleryItem(galleryItem);
galleryContainerEl.insertAdjacentHTML("afterbegin", cartMarkup);
galleryContainerEl.addEventListener("click", onGalleryContainerClick);
buttonCloseEl.addEventListener("click", onCloseModal);

function createGalleryItem(items) {
  return items
    .map(({ original, preview, description }) => {
      return `<li class="gallery__item"
    <a
      class="gallery__link"
    href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`;
    })
    .join("");
}
function onGalleryContainerClick(evt) {
  const imgEl = evt.target;
  if (imgEl.nodeName !== "IMG") {
    return;
  }

  unsetImageAttributes(imgEl);
  addClassListOnEvent();
}

function unsetImageAttributes(e) {
  lightboxImageEl.src = e.dataset.source;
  lightboxImageEl.alt = e.alt;
}
function addClassListOnEvent() {
  lightboxEl.classList.add("is-open");
}
function clearlightboxImage() {
  lightboxImageEl.removeAttribute("src");
  lightboxImageEl.removeAttribute("alt");
}
function removeClassListOnEvent() {
  lightboxEl.classList.remove("is-open");
  clearlightboxImage();
}

function onCloseModal() {
  removeClassListOnEvent();
}
