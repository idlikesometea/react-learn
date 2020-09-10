import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: { 
        Authorization: 'Client-ID BpGnczwP7bm9eZbFP_U_Yqb5HWG1aqi3IKyYCqRWb1s' 
    }
});