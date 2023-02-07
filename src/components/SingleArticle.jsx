import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import { getArticleById } from "../utils/api";

    const SingleArticle = () => {
     const {article_id} = useParams();
     const [article, setArticle] = useState("");
     const [loading, setLoading] = useState(true);

    useEffect(()=>{
        getArticleById(article_id).then((articleFropmApi) => {
        setLoading(false);
        setArticle(articleFropmApi)
            
        })
    }, [article_id])
    if (loading) {
        return <h3>Loading...</h3>;
      }

    return (
        <div>
     
     <h4> {article.title}  </h4>
    {/* <p>{article.author}</p>
    <p>{article.topic}</p> */}
    <div>{article.body}</div>
    <img src={article.article_img_url} alt={article.img}></img>
    
     </div>
  )

}
export default SingleArticle;

