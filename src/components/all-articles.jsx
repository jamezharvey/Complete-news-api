import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import { Link } from "react-router-dom";
import '../styling/article.styling.css'

const AllArticles = () => {
    const [articles, setArticles] = useState([])
    // const [sortType, setSortType] = useState('created_at');

    useEffect(() => {
        getArticles().then((articlesFromApi) => {
            setArticles(articlesFromApi)
        })

        // const sortArray = type => {
        //     const types = {
        //         created_at: 'created_at',
        //         votes: 'votes',
        //     };
        //     const sortProperty = types[type];
        //     const sorted = [...articles].sort((a, b) => b[sortProperty] - a[sortProperty]);
        //     setArticles(sorted);
        // };
        // sortArray(sortType);
    }, []); 


    return (
        <>
            <ul className="cards">
                {articles.map((article) => {
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

export default AllArticles