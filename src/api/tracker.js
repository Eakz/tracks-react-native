import axios from 'axios';

export default axios.create({
    // custom ngrok webhost - mirror to localhost:3000 in CLI - ngrok http 3000
    baseURL: 'http://a00a2746413b.ngrok.io'
});