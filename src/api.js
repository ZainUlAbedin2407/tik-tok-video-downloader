import axios from "axios";
const tiktokVideoDownloader = async (url) => {
    const options = {
        method: 'GET',
        url: 'https://tiktok-video-no-watermark2.p.rapidapi.com',
        params: {
            url: url,
            hd: '0',
        },
        headers: {
            'x-rapidapi-key': 'a2edf803aemsh29848781a8efc73p1bad8bjsn4ef2f8b7b2d0',
            'x-rapidapi-host': 'tiktok-video-no-watermark2.p.rapidapi.com'
        }
    };

    console.log("Request Options:", options);  // Log the options to check everything

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default tiktokVideoDownloader;