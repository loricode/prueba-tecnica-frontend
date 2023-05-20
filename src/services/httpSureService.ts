import axios from 'axios';

const instanceAxios = axios.create();
instanceAxios.defaults.baseURL = process.env.REACT_APP_POKEAPI;

instanceAxios.interceptors.request.use((config) => {
  //agregar token al headers
   /* const token_seguridad = window.localStorage.getItem("token_seguridad");
   if (token_seguridad != null) {
       config.headers.Authorization = 'Bearer ' + token_seguridad;
   } */
   return config;
},
   error => {
       return Promise.reject(error);
   }
);

const requestGeneric = {
   get: (url:string, body:any) => instanceAxios.get(url, body),
   post: (url:string, body:any) => instanceAxios.post(url, body),
   put: (url:string, body:any) => instanceAxios.put(url, body),
   delete: (url:string, body:any) => instanceAxios.delete(url, body)
};

export default requestGeneric;