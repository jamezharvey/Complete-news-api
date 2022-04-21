import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import '../styling/article.styling.css'

const ArticlesByTopic = () => {
    const [articles, setArticles] = useState([])
    const {topic} = useParams();
    
    useEffect(() => {
        getArticles().then((articlesFromApi) => {
        setArticles(articlesFromApi)
    })}, []); 

    let displayedArticles = []
    articles.map((article) => {
        if(article.topic === topic){
            displayedArticles.push(article)
        }
    })

    return (
        <>
            <h2 className="topic_header">{topic}</h2>
            <ul className="cards">
                {displayedArticles.map((article) => {
                    let strDate = `${article.created_at}`;
                    let date = strDate.substring(0, 10);
                    return <Link to={`/articles/${article.article_id}`}><li className="card" key={article.article_id}>
                        <h2 className="card_title">{article.title}</h2>
                        <h4 className="card_topic">{article.topic}</h4>
                        <p className="card_date">{date}</p>
                        <p className="card_votes">Votes: {article.votes}</p>
                    </li></Link>;
                })}
            </ul>
        </>
    )
}

export default ArticlesByTopic