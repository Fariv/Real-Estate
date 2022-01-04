import axios from "axios";

export const baseUrl = 'https://' + process.env.BAYOUT_API_HOST;

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': process.env.BAYOUT_API_HOST,
            'x-rapidapi-key': process.env.BAYOUT_API_KEY,
        }
    });

    return data;
}