import axios from 'axios';

export default axios.create({
    // custom ngrok webhost - mirror to localhost:3000 in CLI - ngrok http 3000
    baseURL: 'http://82313ecf2daa.ngrok.io'
});