import { useEffect, useState } from "react";
import '../styling/article.styling.css'

const AllArticles = () => {
    const [articles, setArticles] = useState([])
    // const [sortType, setSortType] = useState('created_at');

    useEffect(() => {
        fetch('https://completed-nc-news-api.herokuapp.com/api/articles')
        .then(response => response.json())
        .then(data => setArticles(data.articles))

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
                    console.log(date)
                    return <li className="card" key={article.title}>
                        <h3 className="card_title">{article.title}</h3>
                        <h4 className="card_topic">{article.topic}</h4>
                        <p className="card_date">{article.created_at}</p>
                        <p className="card_votes">Votes: {article.votes}</p>
                    </li>;
                })}
            </ul>
        </>
    )
}

export default AllArticles