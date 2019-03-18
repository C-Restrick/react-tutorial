import axios from 'axios';

const KEY = 'AIzaSyDUlJZ9clcn7zBfTXPsEoODBNr7OkmDkqU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
