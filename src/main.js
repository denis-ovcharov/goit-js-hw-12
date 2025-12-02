import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api.js";
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
    hideLoadMoreButton,
    showLoadMoreButton
} from './js/render-functions.js';
//!===============================================================================
export const refs = {
    form: document.querySelector('.form'),
    gallery: document.querySelector('.gallery'),
    loader: document.querySelector('.loader'),
    loadMoreBtn: document.querySelector('.load-more-btn'),
    get galleryItem() {
        return document.querySelector('.gallery-item')
    }
}
 //!===============================================================================
let query;
export let currentPage;
export let totalPages;
export const PAGE_SIZE = 15;
//!===============================================================================
refs.form.addEventListener('submit', async e => {
    e.preventDefault();

    const submitBtn = e.target.querySelector('button[type="submit"]');
    submitBtn.disabled = true;

    query = refs.form.elements.search.value.trim();
    currentPage = 1;
    if (!query) {
        iziToast.error({
            title: "Error",
            message: "Please, enter your search query to get photos.",
            position: 'topRight',
        });
        submitBtn.disabled = false;
        return;
    }
    clearGallery();
    hideLoadMoreButton();
    showLoader();
    
    await loadImages(query, currentPage);

    submitBtn.disabled = false;

    e.target.reset();
});

//!===============================================================================
    async function loadImages(query,currentPage) {
        try {
            const res = await getImagesByQuery(query, currentPage);

            if (res.hits.length === 0) {
                hideLoadMoreButton();
                iziToast.error({
                    title: "Error",
                    message: "Sorry, there are no images matching your search query. <br>Please try again!",
                    position: 'topRight',
                });
                
                return;
            }
            createGallery(res.hits);

            totalPages = Math.ceil(res.totalHits / PAGE_SIZE);
            if (currentPage < totalPages) {
                showLoadMoreButton();
            } else {
                hideLoadMoreButton();
                iziToast.info({
                    title: "Info",
                    message: "We're sorry, but you've reached the end of the results.",
                    position: 'topRight',
                });
            }
        } catch (err) {
            iziToast.error({
                title: "Error",
                message: "Something went wrong. Please try again.",
                position: 'topRight',
            });
            console.error('API error:', err);
        } finally {
            hideLoader();
        }
}
//!===============================================================================

refs.loadMoreBtn.addEventListener('click', async () => {
    hideLoadMoreButton();
    currentPage += 1;

    await loadImages(query, currentPage);
    
    const galleryItemHeight = refs.galleryItem.getBoundingClientRect().height;
    
    window.scrollBy({
        top: galleryItemHeight * 2,
        left: 0,
        behavior: "smooth",
    });
});
//!===============================================================================



