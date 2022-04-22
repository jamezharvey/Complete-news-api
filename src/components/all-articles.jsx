import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import { Link } from "react-router-dom";
import SortSelect from "./sort-select";
import '../styling/article.styling.css'

const AllArticles = () => {
    const [articles, setArticles] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        
        getArticles(searchTerm).then((articlesFromApi) => {
            console.log(searchTerm)
            setArticles(articlesFromApi)
        })
    }, [searchTerm]); 
    console.log(searchTerm)


    return (
        <>
            <ul className="cards">
                <SortSelect className="card_sort" setSearchTerm={setSearchTerm} />
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