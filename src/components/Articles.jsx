import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import { ArticleTile } from "./Article_tile";

const Articles = ()=>{
    const [articles, setArticles] = useState([]);

    useEffect(()=>{
        getArticles().then((articlesFropmApi) => {
            
            setArticles(articlesFropmApi)
        })
    },[])
    
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