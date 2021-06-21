import axios from 'axios'

export const instance = axios.create({
    baseURL: "http://127.0.0.1:5000/",  
    // baseURL: "https://cardio-vascular-final.uc.r.appspot.com/", //backend url
    headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        // "Access-Control-Allow-Origin": "https://frontend-dot-cardio-vascular-final.uc.r.appspot.com/"  //frontend url
    },
    // timeout: 60000
})