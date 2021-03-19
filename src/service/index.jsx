import axios from 'axios';

export const ajax = axios.create({
    baseURL:'http://jsonplaceholder.typicode.com/'
})

export const getPosts = ()=> ajax.get('/todos')