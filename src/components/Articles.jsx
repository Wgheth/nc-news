import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import { ArticleTile } from "./Article_tile";

const Articles = ()=>{
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        getArticles().then((articlesFropmApi) => {
            setLoading(false)
            setArticles(articlesFropmApi)
        })
    },[])
    
    if (loading){
        return <h2>Loadin........</h2>
    }

    return (
        <section>
            <h2 className="articles_heading">Articles</h2>
            <div className="articles">
            {articles.map((article)=>{
            
                    return(
                        <ArticleTile 
                        articleTitle={article.title}
                        img = {article.article_img_url}
                        author={article.author}
                        created={article.created_at}
                        key={article.article_id}
                        />
                       
                           
                    )
                 
            })}
            </div>
         </section>
    );
};
export default Articles;