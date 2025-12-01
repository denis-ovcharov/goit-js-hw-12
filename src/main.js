import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';

export const refs = {
    form: document.querySelector('.form'),
    gallery: document.querySelector('.gallery'),
    loader: document.querySelector('.loader')
 }

refs.form.addEventListener('submit', async e => {
    e.preventDefault();
    const query = refs.form.elements.search.value.trim();
    if (!query) {
        return;
    }
    clearGallery();
    showLoader();
    
    await loadImages(query);
    
});
    async function loadImages(query) {
        try {
            const res = await getImagesByQuery(query);

            if (res.hits.length === 0) {
                iziToast.error({
                    title: "Error",
                    message: "Sorry, there are no images matching your search query. <br>Please try again!",
                    position: 'topRight',
                });
                return;
            }
            createGallery(res.hits);
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
