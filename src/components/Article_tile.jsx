export const ArticleTile = (props) => {
const { articleTitle, img, author, created, Id } = props

    return(
        <div className="articles_div">
            <h3>Title: {articleTitle}</h3>
            <p>Id: {Id}</p>
            <p>Author: {author}</p>
            <p>Created at: {created}</p>
            <img src={img} alt={img}></img>
            </div>
        

    )
}