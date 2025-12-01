import axios from "axios";

export async function getImagesByQuery(query) {
    const response = await axios.get('https://pixabay.com/api/', {
        params: {
            key: '50466269-2b1f45a47ffe964456016cff3',
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        }
  

    });
    return response.data;
}