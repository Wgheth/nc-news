import axios from 'axios'


const articlesAPI = axios.create({
    baseURL: 'https://waled-news.onrender.com/api'
})

export const getArticles = () => {
 return articlesAPI.get('/articles').then(({data}) =>{
    
    return data;
 });  
    
};