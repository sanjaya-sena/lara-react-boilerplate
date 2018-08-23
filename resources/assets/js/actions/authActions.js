import axios from 'axios';

export function login(data) {
    axios.post('http://127.0.0.1:8000/api/login',data).then(res => {
        console.log(res);
        const token = res.data.token;
        console.log('aaaaa');
        localStorage.setItem('jwtToken',token);
    }).catch(error => {
        console.log(error.response);
        if (error.response.data.success === false){
            localStorage.removeItem('jwtToken');
        }
    });
}

export function register(data) {
    axios.post('127.0.0.1:8000/api/register',data).then(res => {
        console.log(res);
        const token = res.token;
        localStorage.setItem('jwtToken',token);
    })
}