import { getTopics } from "../utils/api"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import '../styling/nav.styling.css'

const Nav = () => {
    const [topics, setTopics] = useState([])

    useEffect(() => {
        getTopics().then((topicsFromApi) => {
            setTopics(topicsFromApi)
        })
    })

    return (
        <>
        <ul className="nav_bar">
            <li className="nav_topic">
                <Link to="/"><h3 className="topic_title">home</h3></Link>
                </li>
            {topics.map((topic) => {
                return (
                    <li className="nav_topic">
                        <Link to={`/topics/${topic.slug}`}><h3 className="topic_title">{topic.slug}</h3></Link>
                    </li>
                )
            })}</ul></>
    )
}

export default Nav