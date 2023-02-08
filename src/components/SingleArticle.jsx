import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import { getArticleById, getCommentsById } from "../utils/api";
import {CommentsCard} from "./CommentsCard"



    const SingleArticle = () => {
     const {article_id} = useParams();
     const [article, setArticle] = useState("");
     const [loading, setLoading] = useState(true);
     const [comments, setComments] = useState("");
    useEffect(()=>{
        Promise.all([getArticleById(article_id), getCommentsById(article_id)]).then(([articleFropmApi, commentsFropmApi]) => {
        setLoading(false);
        setArticle(articleFropmApi)
        setComments(commentsFropmApi)
            
        })
    }, [article_id])
    if (loading) {
        return <h3>Loading...</h3>;
      }
      
    return (
        <div>
     <div className="single_article">
     <h4> {article.title}  </h4>
    <p>{article.body}</p>
    <img src={article.article_img_url} alt={article.img}></img>
    </div>
    <h4 className="comments_header">Comments:</h4>
      {comments.map((comment) => {
        return <ul>
          <li><CommentsCard 
        key={comment.comment_id}
        id={comment.article_id}
        comment={comment.body} 
        author={comment.author}
        timestamp={comment.created_at}
       
        />
        </li>
        </ul>
      })

      }
     </div>
  )

}
export default SingleArticle;

