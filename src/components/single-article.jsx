import { useEffect, useState } from "react";
import { getArticle } from "../utils/api";
import { useParams } from "react-router-dom";
import Comments from "./comments";
import VoteButton from "./votes";
import '../styling/article.styling.css'

const SingleArticle = () => {
    const [article, setArticle] = useState('')
    const {article_id} = useParams();
    
    useEffect(() => {
        getArticle(article_id).then((articleFromApi) => {
        setArticle(articleFromApi)
    })}, []); 

    let strDate = `${article.created_at}`;
    let date = strDate.substring(0, 10);

    if(!article) {
        return null
    }

    return(
        <>
            <body className="article_box">
                <h2 className="article_title">{article.title}</h2>
                    <div className="article_box2">
                        <h4 className="article_author">- {article.author}</h4> 
                        <h4 className="article_date">{date}</h4>
                    </div>
                <p className="article_body">{article.body}</p>
                    <div className="article_interactions">
                        <VoteButton articleid={article.article_id} votes={article.votes} />
                        <p className="article_comments">Comments: {article.comment_count}</p>
                    </div>
            </body>
            <Comments articleid={article.article_id}/>
        </>
    )
}

export default SingleArticle