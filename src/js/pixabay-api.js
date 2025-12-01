import axios from "axios";
import { PAGE_SIZE } from '../main.js';



export async function getImagesByQuery(query, currentPage) {
    const response = await axios.get('https://pixabay.com/api/', {
        params: {
            key: '50466269-2b1f45a47ffe964456016cff3',
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page: currentPage,
            per_page: PAGE_SIZE
        }
  

    });
    return response.data;
}