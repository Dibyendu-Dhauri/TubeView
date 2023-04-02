import axios from "axios";


const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'd4e50d8ed3msh509c3a6d3fde1eep1ee93ejsne881660ac08a',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url)=> {
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);

    return data;
  }