import axios from "axios";
import { OnlineRoot, RootPath } from "./Config";

export const Post = (path, data, root = false) => {
    const promise = new Promise((resolve, reject) => {
        axios.post(`${root ? OnlineRoot : RootPath}/${path}`, data).then((result) => {
            resolve(result.data);
        }, (err) => {
            reject(err);
        });
    })
    return promise;
}