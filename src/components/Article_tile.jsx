export const ArticleTile = (props) => {
const { articleTitle, img, author, created } = props

    return(
        <div className="articles_div">
            <h3>Title: {articleTitle}</h3>
            <p>Author: {author}</p>
            <p>Created at: {created}</p>
            <img src={img} alt={img}></img>
            </div>
        

    )
}