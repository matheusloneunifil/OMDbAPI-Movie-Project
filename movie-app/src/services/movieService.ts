import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

export const fetchMovieList = async (searchQuery: string) => {
    try {
        const url = `${API_BASE_URL}/movies?title=${encodeURIComponent(searchQuery)}`;

        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching movie list:', error);
        throw error;
    }
};

export const fetchMovieByName = async (searchQuery: string) => {
    try {
        const url = `${API_BASE_URL}/movies/movies-by-name?title=${encodeURIComponent(searchQuery)}`;

        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching movie list:', error);
        throw error;
    }
};