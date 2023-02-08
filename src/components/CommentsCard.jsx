

export const CommentsCard = (props) => {

    const {comment, author, timestamp} = props

    
    
    return(
        <div className="comments_card">
<p>{comment}</p>
<h4>By: {author}</h4>
<span>Posted on: {timestamp}</span>
</div>
    )
}