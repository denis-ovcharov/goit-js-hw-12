import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api.js";
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
    checkBtnStatus
} from './js/render-functions.js';
//!===============================================================================
export const refs = {
    form: document.querySelector('.form'),
    gallery: document.querySelector('.gallery'),
    loader: document.querySelector('.loader'),
    loadMoreBtn: document.querySelector('.load-more-btn')
}
 //!===============================================================================
let query;
export let currentPage;
export let totalPages;
export const PAGE_SIZE = 15;
//!===============================================================================
refs.form.addEventListener('submit', async e => {
    e.preventDefault();
    query = refs.form.elements.search.value.trim();
    currentPage = 1;
    checkBtnStatus();
    if (!query) {
        return;
    }
    clearGallery();
    showLoader();
    
    await loadImages(query, currentPage);
    e.target.reset();
});

//!===============================================================================
    async function loadImages(query,currentPage) {
        try {
            const res = await getImagesByQuery(query, currentPage);

            if (res.hits.length === 0) {
                iziToast.error({
                    title: "Error",
                    message: "Sorry, there are no images matching your search query. <br>Please try again!",
                    position: 'topRight',
                });
                
                return;
            }
            createGallery(res.hits);

            totalPages = Math.ceil(res.total / PAGE_SIZE);
            checkBtnStatus();
            
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
    currentPage += 1;
    checkBtnStatus();
    await loadImages(query,currentPage);
})
//!===============================================================================