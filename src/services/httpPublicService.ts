import axios from 'axios';

let instancePublic:any = axios.create();

instancePublic.defaults.baseURL = process.env.REACT_APP_BASE_URL;

instancePublic.CancelToken = axios.CancelToken;
instancePublic.isCancel = axios.isCancel;

const requestGenericPublic = {
    get: (url:string, body:any) => instancePublic.get(url, body),
    post: (url:string, body:any) => instancePublic.post(url,body),
    put: (url:string, body:any) => instancePublic.put(url,body),
    delete: (url:string, body:any) => instancePublic.delete(url, body)
};

export default requestGenericPublic;