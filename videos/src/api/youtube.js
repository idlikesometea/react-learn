import axios from 'axios';

const KEY = 'AIzaSyDXO2lL8clj4odq8Tsgh-ihLvRFp9zEiW8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    } 
});

