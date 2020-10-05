import axios from "axios";
import { AsyncStorage } from "@react-native-community/async-storage";

const instance = axios.create({
    // custom ngrok webhost - mirror to localhost:3000 in CLI - ngrok http 3000
    baseURL: "http://dbd2614f40a9.ngrok.io",
});
instance.interceptors.request.use(
    async config => {
        const token = await AsyncStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    },
);
export default instance;
