import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 361c51512e93bd7ecd607b57416884cf28f16abd285ebe600dcd2a95f3f18ecf'
    }
});