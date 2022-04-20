import axios from "axios";

const newsApi = axios.create({
  baseURL: `https://completed-nc-news-api.herokuapp.com/api`,
});

export const getArticles = () => {
  return newsApi.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const getTopics = () => {
  return newsApi.get("/topics").then(({ data }) => {
    return data.topics;
  });
};
