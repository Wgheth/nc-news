import axios from 'axios'


const articlesAPI = axios.create({
    baseURL: 'https://waled-news.onrender.com/api'
})

export const getArticles = () => {
 return articlesAPI.get('/articles').then(({data}) =>{
    
    return data;
 });  
    
};

export const getArticleById= (articleId) => { 
    return articlesAPI.get(`/articles/${articleId}`).then(({data}) =>{
        return data
    });
};
export const getCommentsById= (articleId) => { 
    return articlesAPI.get(`/articles/${articleId}/comments`).then(({data}) =>{
        return data
    });
};
export const upateCommentVotes = (articleId, value) => { 
return articlesAPI.patch(`/articles/${articleId}`, {inc_votes: value});
  
};
