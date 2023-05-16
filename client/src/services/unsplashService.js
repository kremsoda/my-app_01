import axios from "axios";

const unsplashApiKey = import.meta.env.VITE_UNSPLASH_API_KEY;
const unsplashApiUrl = "https://api.unsplash.com/search/photos";

const createAxiosInstance = () => {
    return axios.create({
        baseURL: unsplashApiUrl,
        headers: {
        Authorization: `Client-ID ${unsplashApiKey}`,
        },
    });
};
   
   
const axiosInstance = createAxiosInstance();


const searchUnsplashImages = async (query) => {
    try {
        const response = await axiosInstance.get("", {
            params: { query, },
    });
    return response.data.results;

    } catch (error) {
        console.error("Error searching Unsplash images:", error);
        return [];
    }
};


const unsplashService = { searchUnsplashImages };


export default unsplashService;
   