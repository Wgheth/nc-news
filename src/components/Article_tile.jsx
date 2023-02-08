import {Link} from "react-router-dom"
export const ArticleTile = (props) => {
const { articleTitle, img, author, created, Id } = props
console.log("yyyyyyyyyyyyyyyyy")
    return(
        <div className="articles_div">
            <h3>Title: {articleTitle}</h3>
            <Link to={`/articles/${Id}`} >
            <p>Id: {Id}</p>
            </Link>
            
            <p>Author: {author}</p>
            <p>Created at: {created}</p>
            <img src={img} alt={img}></img>
            </div>
        

    )
}
