const { RESTDataSource } = require('apollo-datasource-rest');

class YouTubeAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://www.googleapis.com/youtube/v3';
        this.params = {
            key: process.env.YT_API_KEY,
            part: 'snippet'
        };
    }
}

module.exports = YouTubeAPI;
