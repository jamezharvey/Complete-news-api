import AllArticles from "./components/all-articles";
import ArticlesByTopic from "./components/articles-by-topic";
import Header from "./components/header";
import Nav from "./components/nav";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<AllArticles />} />
        <Route path="/topics/:topic" element={<ArticlesByTopic />} />
      </Routes>
    </div>
  );
}

export default App;
