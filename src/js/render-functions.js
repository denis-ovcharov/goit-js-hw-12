import { refs } from "../main";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { currentPage, totalPages } from '../main.js';

//!===============================================================================
export function createGallery(images) {
    const markup = images.map((image) => 
        `<li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
          <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" />
        </a>
        <ul class="image-info">
          <li class="info">Likes<p>${image.likes}</p></li>
          <li class="info">Views<p>${image.views}</p></li>
          <li class="info">Comments<p>${image.comments}</p></li>
          <li class="info">Downloads<p>${image.downloads}</p></li>
        </ul>
      </li>`
    ).join('');

  refs.gallery.insertAdjacentHTML('beforeend', markup);

  const simpleLightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

    simpleLightbox.refresh();
}
//!===============================================================================

export function clearGallery() {
  refs.gallery.innerHTML = '';
}
//!===============================================================================
export function showLoader() {
  refs.loader.classList.remove('hidden');
}
//!===============================================================================
export function hideLoader() {
  refs.loader.classList.add('hidden');
}
//!===============================================================================
export function showLoadMoreButton() {
  refs.loadMoreBtn.classList.remove('hidden');
}
//!===============================================================================
export function hideLoadMoreButton() {
  refs.loadMoreBtn.classList.add('hidden');
}
//!===============================================================================
export function checkBtnStatus() {
  if (currentPage < totalPages) {
    showLoadMoreButton();
  } else {
    hideLoadMoreButton();
  }
}
//!===============================================================================