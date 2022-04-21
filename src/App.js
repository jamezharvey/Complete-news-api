import { Route, Routes } from "react-router-dom";
import AllArticles from "./components/all-articles";
import ArticlesByTopic from "./components/articles-by-topic";
import SingleArticle from "./components/single-article";
import Header from "./components/header";
import Nav from "./components/nav";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<AllArticles />} />
        <Route path="/topics/:topic" element={<ArticlesByTopic />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </div>
  );
}

export default App;
