import axios from "axios";
import { OnlineRoot, RootPath } from "./Config";

export const Get = (path, root = false) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${root ? OnlineRoot : RootPath}/${path}`).then((result) => {
            resolve(result.data);
        }, (err) => {
            reject(err);
        })
    });
    return promise;
}