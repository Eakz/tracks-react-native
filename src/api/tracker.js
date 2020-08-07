import axios from 'axios';

export default axios.create({
    // custom ngrok webhost - mirror to localhost:3000 in CLI - ngrok http 3000
    baseURL: 'https://6ec177172774.ngrok.io'
});