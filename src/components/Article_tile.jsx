import {Link} from "react-router-dom"
export const ArticleTile = (props) => {
const { articleTitle, img, author, created, Id } = props

    return(
        <div className="articles_div">
             <Link to={`/articles/${Id}`} >
            <h3>Title: {articleTitle}</h3>
            </Link>
            <p>Author: {author}</p>
            <p>Created at: {created}</p>
            <img src={img} alt={img}></img>
            </div>
        

    )
}

